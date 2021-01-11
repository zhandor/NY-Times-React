import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Cards from '../cards'

export default class CustomGrid extends React.Component {
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

	render() {
		return (
			<div className={this.classes.root}>
				<Grid container spacing={3} ma style={{ margin: '60px' }}>
					<Grid item xs={1}></Grid>
					<Grid item xs={4}>
						<Cards image = '../../Resources/images/Technology.jpg'>TECHNOLOGY</Cards>
					</Grid>
					<Grid item xs={1}/>
					<Grid item xs={4}>
						<Cards image = '../../Resources/images/Science.jpg'>SCIENCE</Cards>
					</Grid>
					<Grid item xs={1}></Grid>
				</Grid>
			</div>
		)
	}
}
