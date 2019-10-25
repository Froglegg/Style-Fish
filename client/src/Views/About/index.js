import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";

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
      <Container fluid>
        <Jumbotron>
          <h1>About StyleFish</h1>
        </Jumbotron>
        <Row>
          <Col size="md-12">
            <h2>Swimmin' Styles</h2>
            <p>
              Deutsches Ipsum Dolor quo Guten Tag posidonium Handschuh adhuc
              Rotwurst sadipscing Bezirksschornsteinfegermeister at, Rotwurst
              mei Brezel gloriatur. Vorsprung durch Technik inermis
              Entschuldigung accommodare Schadenfreude Id Projektplanung assum
              Ampelmännchen te Handtasche erroribus Zauberer Nec Die Toten Hosen
              amet Aufenthaltsgenehmigung iriure, Zeitgeist gloriatur was machst
              du ut. Freude schöner Götterfunken virtute Herr Doktor per Bier At
              HugoClub Mate scaevola Sauerkraut An Die Ärzte malorum zu spät ius
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;