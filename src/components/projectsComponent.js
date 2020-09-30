import React, {Component} from 'react';
import {Container, Col, Row, Jumbotron, Image, Accordion, Card, Button} from 'react-bootstrap';

class ProjectsComponent extends Component
{
  constructor(){
    super()
    this.state = {
      tenebralCortex: require('../images/tenebral.png'),
      soundCurious: require('../images/curious.jpg')
    }
  }

  render(){
    return(
      <Container fluid>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Tenebral Cortex
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Jumbotron fluid>
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <Image src={this.state.tenebralCortex} roundedCircle fluid  />
                    </Col>
                    </Row>
                  <h1>Tenebral Cortex</h1>
                  <p>
                    Tenebral Cortex is a sonic project emerging from the mind of Ioannis Karapostolis.
                    Having dabbled into various styles and forms of music over the years and connecting with a plethora of individuals and groups, the need for creating and expression has risen into fruition of this project.
                    Dark and abstract atmospheric composition paired with stable rhythmic elements, accompanied with the occasional simplistic but touching melodies aiming to transmit emotion are the main factors behind the music.
                    <br/>
                    This project is dedicated to the loving memory of Thomas Denis.
                  </p>
                </Container>
              </Jumbotron>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Sound Curious
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Jumbotron fluid>
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <Image src={this.state.soundCurious} roundedCircle fluid  />
                    </Col>
                    </Row>
                  <h1>Sound Curious</h1>
                  <p>
                    Sound Curious is all about chaotic composition, a coalescence of tweaking, vision, curiosity and sonic mutilation that is all about where the creative process of one's mind can lead.
                    The project was born around 2010, trying out various styles but settled down as a psy project after discovering the darkpsy scene in Athens with it's intense sessions of mind drilling kickbasses.
                    Although Sound Curious was about creation, it also rose up as a mean of communication with like-minded individuals. Like a flock finding it's way to feed the eternal abyss that each one of us hides inside.
                  </p>
                </Container>
              </Jumbotron>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    )
  } 
}

export default ProjectsComponent