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
					<MainGrid reload={this.reload}/>
				</div>
			)
		} else {
			return (
				<div>
					<NewsGrid type={this.state.tela}/>
					<div onClick = {() => { this.reload('inicial') }}>
						<Buttons color='secondary'>Voltar</Buttons>
					</div>
				</div>
			)
		}
	}
}
