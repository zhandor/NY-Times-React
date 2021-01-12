import React from 'react'
import Grid from '@material-ui/core/Grid'

import axios from 'axios'

import NewsCard from '../newsCard'

export default class NewsGrid extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoaded: false,
			data: [],
			arrayNews: [],
			error: null
		}
	}

	componentDidMount() {
		this.axiosGetData()
	}

	axiosGetData = () => {
		axios({
			method: 'get',
			url: 'http://localhost:3003/ny/' + this.props.type
		}).then((response) => {
			this.setState({
				data: response.data.result,
				isLoaded: true
			})
		}).catch((error) => {
			this.setState({
				error,
				isLoaded: false
			})
		})
	}

	render() {
		const { error, isLoaded, data } = this.state

		if (error) {
			return (
				<div> Error: {error.message} </div>
			)
		} else if (!isLoaded) {
			return (
				<div> Loading... </div>
			)
		} else {
			return (
				<Grid
					container
					direction="row"
					justify="space-evenly"
					alignItems="baseline"
					spacing={2}
				>
					{data.map((item, index) => {
						return (
							<Grid item xs={3} key={index}>
								<NewsCard data={item}></NewsCard>
							</Grid>
						)
					})}
				</Grid>
			)
		}
	}
}
