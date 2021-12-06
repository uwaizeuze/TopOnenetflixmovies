import React from 'react';

function Navbar({ setSelectedApp }) {
	return (
		<div>
			<button
				style={{
					backgroundColor: 'orange',
					padding: '10px 15px',
					border: 'none',
					margin: '0 10px',
					fontSize: '18px',
					color: '#333',
					borderRadius: '10px',
				}}
				onClick={() => setSelectedApp('add-user')}
			>
				Add User
			</button>
			<button
				style={{
					backgroundColor: 'orange',
					padding: '10px 15px',
					border: 'none',
					margin: '0 10px',
					fontSize: '18px',
					color: '#333',
					borderRadius: '10px',
				}}
				onClick={() => setSelectedApp('list-user')}
			>
				List User
			</button>
		</div>
	);
}

export default Navbar;
