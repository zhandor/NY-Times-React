import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Typography from '@material-ui/core/Typography'

export default class MainCard extends React.Component {
classes = makeStyles({
	root: {
		maxWidth: 345,
		minHeight: 550
	},
	media: {
		height: 140
	},
	title: {
		fontSize: 14
	}
});

constructor(props) {
	super(props)
	this.state = {
		error: null
	}
}

render() {
	return (
		<Card className={this.classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					image={this.props.image}
					title={this.props.children}
					height="140"
				/>
				<CardContent>
					<Typography className={this.classes.title} color="textSecondary" gutterBottom>Top Stories
					</Typography>
					<Typography variant="h5" component="h2">
						{this.props.children}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
}
