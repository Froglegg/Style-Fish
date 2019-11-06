import React, { Component } from "react";
import { Col, Row, Container } from "../../Components/Grid";
import ClothingItem from "../../Components/ClothingItem";
import API from "../../utils/API";
import { getSession } from "../../utils/Session";
import Title from "../../Components/TitleAnimation";

class Closet extends Component {
  state = {
    outfits: [],
    user: "",
    userId: ""
  };

  async componentDidMount() {
    let currentUser = await getSession();
    if (currentUser) {
      if (currentUser.id) {
        this.setState({ userId: currentUser.id }, () => {
          this.reloadOutfits(currentUser.id);
          API.getUser(currentUser.id).then(res => {
            this.setState({ user: res.data, otherUser: false });
          });
        });
      }
      return;
    } else {
      console.log("better do this or else!");
    }
  }

  reloadOutfits = someId => {
    this.setState({ outfits: [] });
    API.getUser(someId)
      .then(response => {
        response.data.outfits.map(el => {
          API.getOutfit(el._id).then(res => {
            console.log(res.data);
            this.setState({ outfits: this.state.outfits.concat([res.data]) });
          });
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Container>
          <Title>
            <h1>My Closet</h1>
          </Title>
          <Row
            style={{ textAlign: "center" }}
            className="justify-content-center"
          >
            <Col size="md-6">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => {
                  if (window.confirm("Are you sure?")) {
                    API.deleteAllOutfitsFromUser(this.state.userId).then(() =>
                      this.reloadOutfits(this.state.userId)
                    );
                  } else {
                  }
                }}
              >
                Clean my closet
              </button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {this.state.outfits.map((outfit, index) => (
              <Col size="md-6">
                <Row>
                  <Col size="md-6">
                    <ClothingItem
                      imageURL={outfit.top ? outfit.top.imageURL : ""}
                    />
                  </Col>
                  <Col size="md-6">
                    <ClothingItem
                      imageURL={outfit.bottom ? outfit.bottom.imageURL : ""}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col size="md-6">
                    <ClothingItem
                      imageURL={
                        outfit.outerwear ? outfit.outerwear.imageURL : ""
                      }
                    />
                  </Col>
                  <Col size="md-6">
                    <ClothingItem
                      imageURL={outfit.shoe ? outfit.shoe.imageURL : ""}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col size="md-6" className="text-center">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() =>
                        API.deleteOneOutfit(outfit._id).then(
                          this.reloadOutfits(this.state.userId)
                        )
                      }
                    >
                      REMOVE
                    </button>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Closet;
