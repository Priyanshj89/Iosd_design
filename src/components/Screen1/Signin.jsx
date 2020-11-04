import React, { useState } from 'react';
import './Signin.css';
import Google from '../Img/google.png';
import Facebook from '../Img/facebook.png';
import Girl from '../Img/girlsticker.jpg';
import { useHistory } from 'react-router-dom';

function Signin() {
	const [view, setView] = useState(false);
	const [password, setPassword] = useState('password');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [check, setCheck] = useState(false);

	const history = useHistory();

	return (
		<div className="sign-in-page">
			<div className="sign-in">
				<div
					style={{
						margin: '20px',
						marginLeft: '30px',
						fontSize: '28px',
						fontWeight: 'bold',
						display: 'flex'
					}}
				>
					<div>Rep</div>
					<div style={{ color: 'rgb(60, 119, 247)' }}>suite</div>.
				</div>
				<div className="sign-in-body">
					<div
						style={{
							fontSize: '36px',
							fontWeight: 'bolder',
							marginTop: '0.5%',
							marginBottom: '10px'
						}}
					>
						Hey There 👋
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '7%' }}>
						<div>Welcome back to Rep</div>
						<div style={{ color: 'rgb(60, 119, 247)' }}>suite</div>.
					</div>
					<div
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<div style={{ marginRight: '38%', fontSize: '12px', color: 'darkgray' }}>Email</div>
						<input
							className="input-field"
							placeholder="Enter Email.."
							onChange={e => {
								setEmail(e.target.value);
							}}
						></input>
						<br />
						<br />
						<div style={{ marginRight: '35%', fontSize: '12px', color: 'darkgray' }}>Password</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
								backgroundColor: '#dfedf5',
								border: 'none',
								minWidth: '43%',
								maxWidth: '43%',
								borderRadius: '10px',
								minHeight: '30px',
								maxHeight: '30px',
								padding: '8px'
							}}
						>
							<input
								className="input-field-1"
								placeholder="Enter Password.."
								type={password}
								onChange={e => {
									setPass(e.target.value);
								}}
							></input>
							{!view ? (
								<i
									className="material-icons vis"
									onClick={() => {
										setView(true);
										setPassword('text');
									}}
								>
									visibility_off
								</i>
							) : (
								<i
									className="material-icons vis"
									onClick={() => {
										setView(false);
										setPassword('password');
									}}
								>
									visibility
								</i>
							)}
						</div>
						<div style={{ fontSize: '10px', marginRight: '8%', marginTop: '5px', color: 'darkgray' }}>
							Use 8 or more characters to make a strong password
						</div>
						<br />
						{check ? (
							<div style={{ color: 'red' }}>Please Make sure to fill both the email and the password</div>
						) : (
							''
						)}
						<div
							className="sign-in-button"
							onClick={() => {
								if (!email || !pass) {
									setCheck(true);
								} else {
									setCheck(false);
									history.push('/dashboard');
								}
							}}
						>
							Sign In
						</div>
						<div style={{ display: 'flex', margin: '5px', fontSize: '11px' }}>
							<div>New user ?&nbsp;</div>
							<div style={{ color: 'rgb(60,150,200)', cursor: 'pointer' }}>Signup instead</div>
						</div>
						<br />
						<div style={{ display: 'flex', justifyContent: 'space-around' }}>
							<div className="horizontal-line"></div>
							<div>&nbsp;&nbsp;Or continue with&nbsp;&nbsp;</div>
							<div className="horizontal-line"></div>
						</div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<div className="logo-container">
							<img className="logo" src={Google} alt="err"></img>
						</div>
						<div className="logo-container">
							<img className="logo" src={Facebook} alt="err"></img>
						</div>
					</div>
				</div>
			</div>
			<div className="sign-in-image">
				<div>
					<img className="girl-image" src={Girl} alt="err"></img>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
					<div>
						<i class="material-icons" style={{ color: 'white' }}>
							chat_bubble&nbsp;&nbsp;
						</i>
					</div>
					<div style={{ color: 'white', fontSize: '18px', fontFamily: 'monospace' }}>
						Fully Automated Comment Moderation
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
					<div>
						<i class="material-icons" style={{ color: 'white' }}>
							autorenew&nbsp;&nbsp;
						</i>
					</div>
					<div style={{ color: 'white', fontSize: '18px', fontFamily: 'monospace' }}>
						Take a backseat while we automate your repo
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
					<div>
						<i class="material-icons" style={{ color: 'white' }}>
							alarm_off&nbsp;&nbsp;
						</i>
					</div>
					<div style={{ color: 'white', fontSize: '18px', fontFamily: 'monospace' }}>
						Start with a free trial
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
					<div>
						<i class="material-icons" style={{ color: 'white' }}>
							thumb_up&nbsp;&nbsp;
						</i>
					</div>
					<div style={{ color: 'white', fontSize: '18px', fontFamily: 'monospace' }}>
						Best SAAS in the industry
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signin;
