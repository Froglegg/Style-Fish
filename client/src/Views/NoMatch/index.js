import React from "react";
import { Container } from "../../Components/Grid";
import Title from "../../Components/TitleAnimation";

function NoMatch() {
  return (
    <Container fluid>
      <Title>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Title>
    </Container>
  );
}

export default NoMatch;
