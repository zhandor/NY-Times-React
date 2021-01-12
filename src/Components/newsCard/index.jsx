import React from 'react'
import { Card, CardActionArea, Typography, CardMedia, CardContent } from '@material-ui/core'

import NewsModal from '../newsModal/'

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

		return (
			<Card>
				<CardActionArea>
					<CardContent>
						<Typography variant='caption'>
							{data.section} {(data.subsection) ? ' >> ' + data.subsection : ''}
						</Typography>
						<Typography variant='subtitle1'>{data.title}</Typography>
					</CardContent>
					<CardMedia
						component="img"
						image={media.url}
						title={media.caption}
						height="150"/>
					<CardContent>
						<Typography variant='caption'>{media.copyright}</Typography>
						<Typography variant='caption'>{data.byline}</Typography>
						<p>tags</p>
						<NewsModal title={data.title} image={media.url} link={data.short_url} desc={data.abstract} author={data.byline}/>
					</CardContent>
				</CardActionArea>
			</Card>
		)
	}
}
