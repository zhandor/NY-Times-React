import React from 'react'

import Grid from './Components/grid'
import Buttons from './Components/buttons'

function App() {
	return (
		<div>
			<Grid/>
			<div style={{ padding: '50px' }}>
				<Buttons color='blue'>TECHNOLOGY</Buttons>
				<Buttons color='secondary'>SCIENCE</Buttons>
			</div>
		</div>
	)
}

export default App
