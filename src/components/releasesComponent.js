import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import CardComponent from './cardComponent'

import {Button, Spinner, ButtonGroup} from 'react-bootstrap'

import releasesData from '../releasesData'

class ReleasesComponent extends Component
{
  constructor(){
    super()
    this.state = {
      isLoading: true,
      releases: releasesData,
      sortByNewest: false,
      sortByProject: false,
    }

    this.toggleSortDate = this.toggleSortDate.bind(this)
    this.toggleSortProject = this.toggleSortProject.bind(this)
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  toggleSortDate(){
    const releases = this.state.releases
    const sortByNewest = this.state.sortByNewest

    this.state.sortByNewest  
    ? this.setState({

      releases: releases.sort((a, b) => a.releaseYear > b.releaseYear),
      sortByNewest: !sortByNewest
    })
    : this.setState({

      releases: releases.sort((a, b) => a.releaseYear < b.releaseYear),
      sortByNewest: !sortByNewest
    })
  }

  toggleSortProject(){
    const releases = this.state.releases
    const sortByProject = this.state.sortByProject

    this.state.sortByProject 
    ? this.setState({
      releases: releases.sort((a, b) => (a.project > b.project) ? 1 : -1),
      sortByProject: !sortByProject
    })
    : this.setState({
      releases: releases.sort((a, b) => (a.project < b.project) ? 1 : -1),
      sortByProject: !sortByProject
    })
  }

  render(){
    return(
      <Container fluid>

        <h1>All releases from my projects</h1>

        
        
        {this.state.isLoading 

          ? <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner> 

          : <div>
            Sort By
            <br/>
            <ButtonGroup>
              <Button variant="secondary" onClick={this.toggleSortDate}>Date</Button>

              <Button variant="secondary" onClick={this.toggleSortProject}>Project</Button>
            </ButtonGroup>

            <Row>
              {this.state.releases.map(release => (
                <Col key={release.id} ><CardComponent info={release}/></Col>
              ))}
            </Row>

          </div>
        }
        
      </Container>
    )
  } 
}

export default ReleasesComponent