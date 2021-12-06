import React from 'react';

function ListUser({ users }) {
	return (
		<div>
			<h1>List Of users</h1>
			{users.map(item => (
				<>
					<li>{item.username}</li>
					<li>{item.password}</li>
				</>
			))}
		</div>
	);
}

export default ListUser;
