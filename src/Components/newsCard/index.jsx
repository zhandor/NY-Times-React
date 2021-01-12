import React from 'react'
import { Card, CardActionArea, Typography, CardMedia, CardContent } from '@material-ui/core'

export default class NewsCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			data: this.props.data
		}
	}

	render() {
		return (
			<Card>
				<CardActionArea>
					<CardContent>
						<Typography>News Section Subsection</Typography>
						<Typography>News Title</Typography>
					</CardContent>
					<CardMedia
						component="img"
						image={this.state.data.thumb}
						title={this.state.data.thumbToolTip}
						height="80"/>
					<CardContent>
						<Typography>Thumb Credit</Typography>
						<Typography>Author name</Typography>
						<p>tags</p>
					</CardContent>
				</CardActionArea>
			</Card>
		)
	}
}
