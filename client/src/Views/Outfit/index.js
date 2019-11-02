import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../Components/Grid";
import ClothingItem from "../../Components/ClothingItem";
import { getSession } from "../../utils/Session";
const hardCodedUserId = "5db75b79c9e53d19ad99b030";
let currentUser;
class Outfit extends Component {
  state = {
    clothingType: "",
    clothingItem: "",
    top: {},
    bottom: {},
    shoe: {},
    outerwear: {},
    outfit: {
      top: {},
      bottom: {},
      shoe: {},
      outerwear: {}
    },
    userId: ""
  };

  async componentDidMount() {
    let currentUser = await getSession();
    if (currentUser.id) {
      this.setState({ userId: currentUser.id });
    }
    let idParams = this.props.match.params.id;
    let clothingType = this.props.match.params.clothingType;
    this.setState({ clothingType: clothingType });
    this.loadClothingItem(clothingType, idParams, () => {
      this.loadClothes();
    });
  }

  // get specific clothing item from id in URL path parameters
  loadClothingItem = (clothingType, idParams, cb) => {
    clothingType === "Tops"
      ? API.getTopById(idParams)
          .then(res => this.setState({ clothingItem: res.data }))
          .catch(err => console.log(err))
      : clothingType === "Bottoms"
      ? API.getBottomById(idParams)
          .then(res => this.setState({ clothingItem: res.data }))
          .catch(err => console.log(err.message))
      : clothingType === "Shoes"
      ? API.getShoeById(idParams)
          .then(res => this.setState({ clothingItem: res.data }))
          .catch(err => console.log(err))
      : clothingType === "Outerwear"
      ? API.getOuterwearById(idParams)
          .then(res => this.setState({ clothingItem: res.data }))
          .catch(err => console.log(err))
      : console.log("no clothing type specified");

    console.log(idParams);
    cb();
  };

  // load a random clothing item into the state
  loadClothes = () => {
    API.getTops()
      .then(res =>
        this.setState({
          top: res.data[Math.floor(Math.random() * res.data.length)]
        })
      )
      .catch(err => console.log(err));
    API.getBottoms()
      .then(res =>
        this.setState({
          bottom: res.data[Math.floor(Math.random() * res.data.length)]
        })
      )
      .catch(err => console.log(err));
    API.getShoes()
      .then(res =>
        this.setState({
          shoe: res.data[Math.floor(Math.random() * res.data.length)]
        })
      )
      .catch(err => console.log(err));
    API.getOuterwear()
      .then(res =>
        this.setState({
          outerwear: res.data[Math.floor(Math.random() * res.data.length)]
        })
      )
      .catch(err => console.log(err));
  };

  // this gets called when the Save Outfit button is pressed. Switch case for creating the perfect outfit.
  createOutfit = cb => {
    let top;
    let bottom;
    let shoe;
    let outerwear;
    let clothingType = this.props.match.params.clothingType;

    switch (clothingType) {
      case "Tops":
        top = this.state.clothingItem._id;
        bottom = this.state.bottom._id;
        shoe = this.state.shoe._id;
        outerwear = this.state.outerwear._id;
        break;
      case "Bottoms":
        top = this.state.top._id;
        bottom = this.state.clothingItem._id;
        shoe = this.state.shoe._id;
        outerwear = this.state.outerwear._id;
        break;
      case "Shoes":
        top = this.state.top._id;
        bottom = this.state.bottom._id;
        shoe = this.state.clothingItem._id;
        outerwear = this.state.outerwear._id;
        break;
      case "Outerwear":
        top = this.state.top._id;
        bottom = this.state.bottom._id;
        shoe = this.state.shoe._id;
        outerwear = this.state.clothingItem._id;
        break;
      default:
        top = this.state.top._id;
        bottom = this.state.bottom._id;
        shoe = this.state.shoe._id;
        outerwear = this.state.outerwear._id;
    }

    this.setState(
      state => ({
        outfit: {
          ...state.outfit,
          top: top,
          bottom: bottom,
          shoe: shoe,
          outerwear: outerwear,
          user: hardCodedUserId
        }
      }),
      () => cb()
    );
  };

  saveOutfit = (userId, cb) => {
    let outfit = this.state.outfit;
    API.saveOutfit(userId, outfit);
    cb();
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Your Outfit!</h1>
        </Jumbotron>
        <Row className="justify-content-center">
          <Col size={"md-2"} className="text-center m-1">
            <button
              type="button"
              class="btn btn-success"
              onClick={() => {
                this.createOutfit(() =>
                  this.saveOutfit(this.state.userId, () =>
                    alert(
                      " Check out http://localhost:3001/api/users to see users with associated outfits. If you did not enter a hardcoded user ID in the Outfit view line 165, then this won't work. Create a user (sign up) first. Checkout http://localhost:3001/api/users to see users with associated outfits and their i."
                    )
                  )
                );
              }}
            >
              SAVE OUTFIT
            </button>
          </Col>
          <Col size={"md-2"} className="text-center m-1">
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                window.location.reload();
              }}
            >
              FISH AGAIN
            </button>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-center">
          <Col size="md-3">
            <ClothingItem
              imageURL={
                this.state.top && this.state.clothingType === "Tops"
                  ? this.state.clothingItem.imageURL
                  : this.state.top
                  ? this.state.top.imageURL
                  : "error"
              }
            />
          </Col>
          <Col size="md-3">
            <ClothingItem
              imageURL={
                this.state.bottom && this.state.clothingType === "Bottoms"
                  ? this.state.clothingItem.imageURL
                  : this.state.bottom
                  ? this.state.bottom.imageURL
                  : "error"
              }
            />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-center">
          <Col size="md-3">
            <ClothingItem
              imageURL={
                this.state.outerwear && this.state.clothingType === "Outerwear"
                  ? this.state.clothingItem.imageURL
                  : this.state.outerwear
                  ? this.state.outerwear.imageURL
                  : "error"
              }
            />
          </Col>
          <Col size="md-3">
            <ClothingItem
              imageURL={
                this.state.shoe && this.state.clothingType === "Shoes"
                  ? this.state.clothingItem.imageURL
                  : this.state.shoe
                  ? this.state.shoe.imageURL
                  : "error"
              }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Outfit;
