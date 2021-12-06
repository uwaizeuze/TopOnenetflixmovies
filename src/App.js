import React, { useState } from 'react';

import AddUser from './components/AddUser';
import ListUser from './components/ListUser';
import Navbar from './components/Navbar';

function App() {
	const [users, setUsers] = useState([]);
	const [selectedApp, setSelectedApp] = useState('add-user');

	return (
		<div
			style={{
				width: '1100px',
				margin: '0 auto',
				display: 'flex',
				// justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				padding: '30px 0',
			}}
		>
			<Navbar setSelectedApp={setSelectedApp} />

			<div style={{ marginTop: '20px' }}>
				{selectedApp === 'add-user' && (
					<AddUser setUsers={setUsers} users={users} />
				)}
				{selectedApp === 'list-user' && <ListUser users={users} />}
			</div>
		</div>
	);
}

export default App;
