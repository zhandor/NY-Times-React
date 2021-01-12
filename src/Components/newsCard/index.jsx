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
		const { data } = this.state
		const media = data.multimedia[0]
		console.log(data)

		return (
			<Card>
				<CardActionArea>
					<CardContent>
						<Typography variant='subtitle1'>
							{data.section} {(data.subsection)?' >> ' + data.subsection : ''}
						</Typography>
						<Typography variant='h5'>{data.title}</Typography>
					</CardContent>
					<CardMedia
						component="img"
						image={media.url}
						title={media.caption}
						height="80"/>
					<CardContent>
						<Typography>{media.copyright}</Typography>
						<Typography>{data.byline}</Typography>
						<p>tags</p>
					</CardContent>
				</CardActionArea>
			</Card>
		)
	}
}
