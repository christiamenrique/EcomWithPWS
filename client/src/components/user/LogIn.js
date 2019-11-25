import React from 'react';
import httpClient from './httpClient';
import './logIn.scss';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: '' }
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if (user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<h1>Log In</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input
						type="text"
						required
						placeholder="Email"
						name="email"
						value={email}
					/>

					<input
						type="password"
						required
						placeholder="Password"
						name="password"
						value={password}
					/>

					<button className="btn btn-primary btnSpace">Log In</button>
					<Link to="/signup" className="btn btn-primary">Sign Up</Link>
				</form>
			</div>
		)
	}
}

export default LogIn