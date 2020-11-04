import React from 'react';
import './Dashboard.css';
import Header from './Header/Header';
import Left from './Left/Left';
import Header2 from './Header2/Header2';
import Card from './Card/Card';
import Right from './Right/Right';

function Dashboard() {
	return (
		<div className="dashboard">
			<Header />
			<div className="dashboard-body">
				<Left />
				<div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
					<Header2 />
					<div style={{ display: 'flex', flexWrap: 'wrap' }}>
						<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '60px' }}>
							<div>Showing 36 comments</div>
							<Card />
							<Card />
							<Card />
							<Card />
							<br />
						</div>
						<Right />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
