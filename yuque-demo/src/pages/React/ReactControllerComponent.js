import React from 'react'
import MyInput from './MyInput'

export default class ControllerComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			text: ''
		}
	}

	onTextChange = (envent) => {
		console.log("改变！！！！")
		this.setState({
			text: envent.target.value
		})
	}

	render() {
		return (
			<MyInput value={this.state.text} onChange={this.onTextChange} />
		)
	}
}
