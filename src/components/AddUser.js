import { Input, Label } from '@rebass/forms';
import React, { useState } from 'react';

function AddUser({ users, setUsers }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		if (!username) {
			setUsernameError(true);
		}

		if (!password) {
			setPasswordError(true);
		}

		if (username && password) {
			setUsers([...users, { username: username, password: password }]);
		}
	};

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<Label mb={2}>Username</Label>
				<Input
					style={{ backgroundColor: '#fff' }}
					mb={2}
					value={username}
					onChange={({ target }) => setUsername(target.value)}
				/>
				{usernameError && (
					<span style={{ backgroundColor: 'red' }}>
						username Required
					</span>
				)}
				<Label mb={2}>Password</Label>
				<Input
					style={{ backgroundColor: '#fff' }}
					value={password}
					mb={2}
					onChange={({ target }) => setPassword(target.value)}
				/>
				{passwordError && (
					<span style={{ backgroundColor: 'red' }}>
						password Required
					</span>
				)}
				<button>Add User</button>
			</form>
		</div>
	);
}

export default AddUser;
