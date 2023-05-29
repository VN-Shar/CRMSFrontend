import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Customer from './components/admin/Customer';

function App() {
	return (
		<div className='app'>
			<Router>
				<Routes>
					<Route path='admin'>
						<Route path='customer' element={<Customer/>} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
