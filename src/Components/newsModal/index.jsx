import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

function rand() {
	return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
	const top = 50 + rand()
	const left = 50 + rand()

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	}
}

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		position: 'absolute',
		width: 450,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}))

export default function NewsModal(props) {
	const classes = useStyles()
	const [modalStyle] = React.useState(getModalStyle)
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const redirect = (url) => {
		window.open(url)
	}

	return (
		<div>
			<Button variant="contained" color="white" onClick={handleOpen}>
                More info
			</Button>

			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>
				<div style={modalStyle} className={classes.paper}>
					<h2>{props.title}</h2>
					<Button variant="contained" color="white" onClick={() => redirect(props.link)}>
						See the full article at the NY Times page
					</Button>
					<p>
						{props.desc}
					</p>
					<img object-fit='cover' src={props.image} width={450}/>
					<p>{props.author}</p>
				</div>
			</Modal>
		</div>
	)
}
