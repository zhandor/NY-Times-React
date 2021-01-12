/* eslint-disable no-alert */
import React from 'react'

import MainGrid from './Components/mainGrid'
import Buttons from './Components/buttons'

// import NewsGrid from './Components/newsGrid'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tela: 'inicial'
		}
	}
	// verificar a aba de elevar states

	componentDidMount() {
		this.setState({ tela: 'inicial' })
	}

	reload = (state) => {
		this.aux = this.state.cont + 1
		this.setState({ tela: state })
	}

	alertZhandao = (texto) => {
		alert(texto)
	}

	render () {
		if (this.state.tela === 'inicial') {
			return (
				<div>
					{this.state.tela}
					<MainGrid onClick={(value) => this.alertZhandao(value)}/>
					<div>
						<h1>{this.state.tela}</h1>
						<Buttons color='primary'>TECHNOLOGY</Buttons>
						<Buttons color='secondary'>SCIENCE</Buttons>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					{this.state.tela}
					<h1> qualquer merda</h1>
					{/* <NewsGrid type={this.state.tela}/> */}
				</div>
			)
		}
	}
}
