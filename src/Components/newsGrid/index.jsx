import React from 'react'
import Grid from '@material-ui/core/Grid'

import NewsCard from '../newsCard'

export default class NewsGrid extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			data: [],
			arrayNews: [],
			error: null
		}
	}

	componentDidMount() {
		this.getData()
	}

	getData = async () => {
		const url = 'http://localhost:3003/ny/' + this.props.type
		this.setState({ loading: true })
		try {
			const response = await fetch(url)
			const json = await response.json()
			this.setResult(json)
		} catch (e) {
			this.setState({ loading: false, error: 'Erro' })
		}
	}

	setResult = (res) => {
		this.setState({
			data: [...this.state.data, ...res],
			error: res.error || null,
			loading: false
		})
	}

	render() {
		this.state.data.forEach(element => {
			const news = {
				urlNews: element.short_url,
				title: element.title,
				section: element.section,
				subSection: element.subsection,
				thumb: element.multimedia[0].url,
				thumbToolTip: element.multimedia[0].caption,
				thumbCredit: element.multimedia[0].copyright,
				authorName: element.byline,
				publishedIn: element.published_date,
				tags: element.des_facet
			}
			this.setState({ arrayNews: { ...news } })
		})

		return (
			<div>
				<Grid container spacing={3} ma>
					{this.state.arrayNews.map(item => (
						<>
							<Grid item xs={1}></Grid>
							<Grid item xs={2}>
								<NewsCard data = {item}/>
							</Grid>
						</>
					))}
				</Grid>
			</div>
		)
	}
}
