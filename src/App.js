/* eslint-disable no-alert */
import React from 'react'

import MainGrid from './Components/mainGrid'
import Buttons from './Components/buttons'

import NewsGrid from './Components/newsGrid'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tela: 'inicial'
		}
	}

	reload = (value) => {
		this.setState({ tela: value })
	}

	render () {
		if (this.state.tela === 'inicial') {
			return (
				<div>
					<h1>{this.state.tela}</h1>
					<MainGrid reload={this.reload}/>
				</div>
			)
		} else {
			return (
				<div>
					<h1 onClick = {() => { this.reload('inicial') }}>
						{this.state.tela}
					</h1>
					<NewsGrid type={this.state.tela}/>
					<Buttons color='secondary' >Voltar</Buttons>
				</div>
			)
		}
	}
}
