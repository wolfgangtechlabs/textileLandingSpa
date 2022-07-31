import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import dyesImage from "assets/img/dyes.jpg";
import postprodImage from "assets/img/postprod.jpg";
import linenImage from "assets/img/linen.jpg"

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col id="about_us" className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                Established in 1985, TS Jeans Care is a widely respected supplier of speciality chemicals and dyeing systems to the fashion garment industry in over fifty countries.
                </h5>
                <h5 className="description">              
                We are pioneers in enzyme washing and biopolishing of garments, providing an unparalleled service to our customers globally. 
                </h5>
                <h5 className="description">
                Originally specialists in denim, we also are experts in the finishing of garments of all constructions and weights of wovens, knitwear and jersey.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/unsplash.jpg").default + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                    <small>Our Mission</small>
                    <br></br>
                    <br></br>
                      "To fully support our customers through continuous development of
                      technologically advanced products, systems and a commitment to 
                      excellent customer service" 
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/whitetextile.jpg").default + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/denim.jpg").default + ")",
                    }}
                  >

                  </div>
                  
                  <CardTitle tag="h3">
                    So what does TS Textiles have to offer?
                  </CardTitle>
                  <br></br>
                  <br></br>
                  <CardSubtitle tag="h4">
                  We deliver 
                  </CardSubtitle>
                  <br></br>
                  <ListGroup>
                    <ListGroupItem>High quality products</ListGroupItem>
                    <ListGroupItem>Access to innovations developed in our in house development laboratory</ListGroupItem>
                    <ListGroupItem>Chemicals tailored to customers specific requirements</ListGroupItem>
                    <ListGroupItem>Problem solving: Trouble shooting on already finished garments</ListGroupItem>
                    <ListGroupItem>Competitive pricing</ListGroupItem>
                  </ListGroup>
                  

                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div id="services_section" className="section section-team text-center">
          <Container>
            <h2 className="title">What we specialize in</h2>
            <div className="team">
              <Row>
                <Col xl="4">
                  <div className="team-player">
                  <CardImg alt="..." src={dyesImage} top></CardImg>
                    <CardTitle tag="h4">NATURAL DYES</CardTitle>
                    <CardText>
                    TS Jeans Care introduces our new dye system, Natural Earth Pigments.
                    This range of earth and mineral pigments create beautiful washed down effects using colours the way nature intended{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Read more...
                      </a>{" "}
                    </CardText>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="team-player">
                  <CardImg alt="..." src={postprodImage} height="50%" top></CardImg>
                    <CardTitle tag="h4">POST-PRODUCTION CARE</CardTitle>
                    <CardText>
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Read more...
                      </a>{" "}
                      
                    </CardText>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="team-player">
                    <CardImg alt="..." src={linenImage} top></CardImg>
                    <CardTitle tag="h4">FLEXIFILL</CardTitle>
                    <CardText>
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </CardText>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div id="contact_us" className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LandingPage;
