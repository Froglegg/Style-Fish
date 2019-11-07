import React, { Component } from "react";
import { subscribeToClosetFeed } from "../../utils/ClosetFeed";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import { getSession } from "../../utils/Session";

class ClosetFeed extends Component {
  state = {
    outfit: false,
    outfitArray: [],
    currentUser: undefined
  };

  componentDidMount() {
    let currentUser = getSession();
    this.setState({ currentUser: currentUser.id });
    API.getMongoClosetFeed()
      .then(res => {
        this.setState({ outfitArray: res.data });
      })
      .catch(err => console.log(err));

    subscribeToClosetFeed((err, res) => {
      if (this.state.outfit && this.state.outfit._id === res._id) {
        return console.log("dont do anything");
      } else {
        API.getOutfit(res._id)
          .then(outfit => {
            this.setState(
              {
                outfit: outfit.data
              },
              () => {
                let outfitObj = this.state.outfit;
                // IF THE INITIAL ARRAY STATE DOESN'T CONTAIN AN OUTFIT WITH A KEY THAT HAS THE SAME ID AS THE CURRENT OUTFIT... THEN ADD THAT OUTFIT
                if (this.state.outfitArray.some(e => e.key === outfitObj._id)) {
                  return console.log("dont do anything");
                } else {
                  this.addToClosetFeed(outfitObj);
                  this.setState({
                    outfitArray: this.state.outfitArray.concat(outfitObj)
                  });
                }
              }
            );
          })
          .catch(err => console.log(err));
      }
      if (err) {
        console.log(err);
      }
    });
  }

  addToClosetFeed = outfitObj => {
    let [top, bottom, outerwear, shoe, user, key] = [
      outfitObj.top,
      outfitObj.bottom,
      outfitObj.outerwear,
      outfitObj.shoe,
      outfitObj.user,
      outfitObj._id
    ];
    API.addToClosetFeed({
      top: top,
      bottom: bottom,
      outerwear: outerwear,
      shoe: shoe,
      user: user,
      key: key
    })
      .then()
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="list-overflow-container">
          <ul className="list-group">
            {this.state.outfitArray.length
              ? this.state.outfitArray
                  .slice(0)
                  .reverse()
                  .map(outfit =>
                    Object.entries(outfit).map(entry =>
                      entry[0] === "user" ? (
                        <li className="list-group-item">
                          {this.state.currentUser === entry[1]._id ? (
                            <Link to={`/MyCloset`}>
                              You saved a new outfit!
                            </Link>
                          ) : (
                            <Link to={`Closet/${entry[1]._id}`}>
                              {entry[1].username} saved a new outfit!
                            </Link>
                          )}
                        </li>
                      ) : (
                        ""
                      )
                    )
                  )
              : ""}
          </ul>
        </div>
      </>
    );
  }
}

export default ClosetFeed;
