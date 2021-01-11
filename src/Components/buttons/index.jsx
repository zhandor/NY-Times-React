import React from 'react'
import Button from '@material-ui/core/Button'

export default class Buttons extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			content: [],
			n: 0
		}
	}

	render() {
		return (
			<Button variant="contained" color={this.props.color} onClick = { () => {
				this.setState({ n: (this.state.n + 1) })
			}}>
				{this.props.children} {this.state.n}
			</Button>
		)
	}
}
