import React, { Component } from 'react'
import { Card } from 'antd';

export default class Card_1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardList: [
				{
					id:1,
					setup:'asdasd',
					punchline:'asdasdas'
				},
				{
					id:2,
					setup:'asdasd',
					punchline:'asdasdas'
				}
			]
		}
	}

	render(){
		return (
			<div>
				{
					this.state.cardList.map(card=>{
						return (<Card key={card.id}>
							<div>Q:{card.setup}</div>
							<div>A:{card.punchline}</div>
						</Card>);
					})
				}
			</div>
		)
	}
}