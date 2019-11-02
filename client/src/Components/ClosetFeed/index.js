import React, { Component } from "react";
import { subscribeToClosetFeed } from "../../utils/ClosetFeed";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
class ClosetFeed extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    subscribeToClosetFeed((err, res) =>
      API.getOutfit(res._id)
        .then(outfit => {
          this.setState({
            outfit: outfit.data
          });
        })
        .catch(err => console.log(err))
    );
  }

  state = {
    outfit: false
  };

  render() {
    return (
      <p className="feed">
        Closet Feed... works if you have a hardcoded user ID and are saving
        outfits correctly. Styling / layout TBD
        <br />
        {this.state.outfit ? (
          <Link to={`/Closet/${this.state.outfit.user._id}/`}>
            {this.state.outfit.user.username} saved a new outfit!
          </Link>
        ) : (
          ""
        )}
        <hr></hr>
      </p>
    );
  }
}

export default ClosetFeed;
