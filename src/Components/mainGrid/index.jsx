import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import MainCard from '../mainCard'

export default class MainGrid extends React.Component {
	classes = makeStyles({
		root: {
			flexGrow: 1,
			marginTop: '40px'
		}
	})

	constructor(props) {
		super(props)
		this.state = {
			error: null
		}
	}

	acao = (valor) => {
		this.props.onClick(valor)
	}

	render() {
		return (
			<div className={this.classes.root}>
				<Grid container spacing={3} ma style={{ margin: '60px' }}>
					<Grid item xs={1}></Grid>
					<Grid item xs={4}>
						<MainCard
							image = '../../Resources/images/Technology.jpg'
							onClick={this.acao('tech')}>
								TECHNOLOGY
						</MainCard>
					</Grid>
					<Grid item xs={1}/>
					<Grid item xs={4}>
						<MainCard
							image = '../../Resources/images/Science.jpg'
							onClick={this.acao('science')}>
								SCIENCE
						</MainCard>
					</Grid>
					<Grid item xs={1}></Grid>
				</Grid>
			</div>
		)
	}
}
