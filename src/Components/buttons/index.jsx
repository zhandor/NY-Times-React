import React from 'react'
import Button from '@material-ui/core/Button'

export default class Buttons extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null
		}
	}

	render() {
		return (
			<Button variant="contained" color={this.props.color}>
				{this.props.children}
			</Button>
		)
	}
}
