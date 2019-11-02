import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import ClothingItem from "../../Components/ClothingItem";
import ClosetFeed from "../../Components/ClosetFeed";
import Cookies from "js-cookie";

import "./style.css";

class Home extends Component {
  state = {
    tops: [],
    bottoms: [],
    shoes: [],
    outerwear: []
  };

  componentDidMount() {
    this.loadClothes();
    let cookie = Cookies.get("userToken");
    console.log(
      `hey here is your cookie which is the JWT as well :) : ${cookie}`
    );
  }

  loadClothes = () => {
    API.getTops()
      .then(res => this.setState({ tops: res.data }))
      .catch(err => console.log(err));
    API.getBottoms()
      .then(res => this.setState({ bottoms: res.data }))
      .catch(err => console.log(err));
    API.getShoes()
      .then(res => this.setState({ shoes: res.data }))
      .catch(err => console.log(err));
    API.getOuterwear()
      .then(res => this.setState({ outerwear: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Welcome to StyleFish!</h1>
        </Jumbotron>
        <Row className="justify-content-center">
          <ClosetFeed />
        </Row>
        <Row className="justify-content-center">
          <p>
            Select a clothing type to begin. Check out our{" "}
            <Link to="/About">Information Page</Link> to learn more.
          </p>
        </Row>
        <Row className="justify-content-center">
          <Col size="md-3">
            <Link to="/ClothingDetail/Tops">
              <ClothingItem
                imageURL={
                  this.state.tops.length
                    ? this.state.tops[0].imageURL
                    : "no-image"
                }
              />
            </Link>
          </Col>
          <Col size="md-3">
            <Link to="/ClothingDetail/Bottoms">
              <ClothingItem
                imageURL={
                  this.state.bottoms.length
                    ? this.state.bottoms[0].imageURL
                    : "no-image"
                }
              />
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col size="md-3">
            <Link to="/ClothingDetail/Outerwear">
              <ClothingItem
                imageURL={
                  this.state.outerwear.length
                    ? this.state.outerwear[0].imageURL
                    : "no-image"
                }
              />
            </Link>
          </Col>
          <Col size="md-3">
            <Link to="/ClothingDetail/Shoes">
              <ClothingItem
                imageURL={
                  this.state.shoes.length
                    ? this.state.shoes[0].imageURL
                    : "no-image"
                }
              />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
