import React from "react";
import { Container, Row, Col, ListGroupItem } from "react-bootstrap";

function NavbarLinksMenu({ content }) {
  return (
    <Container>
      <h3>{content && content.header}</h3>
      <Container className="overlay-menu" fluid>
        <Row>
          {content &&
            content.rows &&
            content.rows.map((row, index) => (
              <Col xl={12 / content.rows.length} md={6} key={index}>
                {row.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className={
                      item.type === "submenu" ? "navbar-overlay-submenu " : ""
                    }
                  >
                    {item.name}
                  </ListGroupItem>
                ))}
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default NavbarLinksMenu;
