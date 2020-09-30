import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap';

class CardComponent extends Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			isLiked : false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState((state) => ({
			isLiked: !state.isLiked
		}))
	}

	render()
	{
		return(
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={this.props.info.cover} />
					<Card.Body>
						<Card.Title>{this.props.info.name}</Card.Title>
						<Card.Text>By: {this.props.info.project}</Card.Text>
						<Card.Text>Album: {this.props.info.albumName}</Card.Text>
						<Card.Text>Year: {this.props.info.releaseYear}</Card.Text>
						<Button variant={this.state.isLiked ? "success" : "primary"} onClick={this.handleClick}>{this.state.isLiked ? "unLike" : "Like"}</Button>
					</Card.Body>
				</Card>
			</div>
		)
	}
	
}

export default CardComponent