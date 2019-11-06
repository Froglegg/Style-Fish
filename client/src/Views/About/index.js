import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Col, Row, Container } from "../../Components/Grid";
import Title from "../../Components/TitleAnimation";
class About extends Component {
  //   state = {};

  //   componentDidMount() {
  //     this.loadClothes();
  //   }

  //   loadClothes = () => {
  //     API.getClothes()
  //       .then(res => this.setState({ clothes: res.data }))
  //       .catch(err => console.log(err));
  //   };

  render() {
    return (
      <Container>
        <Title>
          <h1>About StyleFish</h1>
        </Title>
        <Row>
          <Col size="md-12">
            <p style={{ textAlign: "center" }}>
              Welcome to StyleFish! Our application saves you time by giving you
              outfits just by selecting the article of clothing you have along
              with its color. We generate different styles which will all
              display on one page for you to visually compare yourself!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
