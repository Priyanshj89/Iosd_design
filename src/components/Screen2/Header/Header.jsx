import React from 'react';
import '../Header/Header.css';
import Rachna from '../../Img/formalgirl.jpg';

function Header() {
	return (
		<div className="header">
			<div
				style={{
					marginTop: '10px',
					marginLeft: '30px',
					fontSize: '28px',
					fontWeight: 'bold',
					display: 'flex'
				}}
			>
				<div>Rep</div>
				<div style={{ color: 'rgb(60, 119, 247)' }}>suite</div>.
			</div>
			<div className="header-icons">
				<div className="icon-container">
					<i className="material-icons" style={{ fontSize: '25px' }}>
						book
					</i>
				</div>
				<div className="icon-container">
					<i className="material-icons" style={{ fontSize: '25px' }}>
						settings
					</i>
				</div>
				<div style={{ display: 'flex' }}>
					<div style={{ display: 'flex' }}>
						<img src={Rachna} alt="err" className="img-container"></img>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<div style={{ display: 'flex' }}>
							<div
								style={{
									fontSize: '10px',
									marginRight: '70px',
									alignSelf: 'center'
								}}
							>
								Profile
							</div>
							<div className="dropdown1">
								<div>
									<i
										className="material-icons"
										style={{ fontSize: '15px', alignSelf: 'center', cursor: 'pointer' }}
									>
										expand_more
									</i>
								</div>
								<div class="dropdown-content1">
									<div className="dropdown-text">Account</div>
									<div className="dropdown-text">History</div>
									<div className="dropdown-text">Privacy</div>
									<div className="dropdown-text">Settings</div>
								</div>
							</div>
						</div>
						<div style={{ fontWeight: '800', fontSize: '16px' }}>Rachna Ranade</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
