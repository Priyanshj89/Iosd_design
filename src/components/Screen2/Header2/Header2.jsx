import React, { useState } from 'react';
import './Header2.css';

function Header2() {
	const [last, setLast] = useState('Last 7 days');
	return (
		<div className="options">
			<div style={{ fontWeight: '800', marginTop: '15px' }}>Date Range:&nbsp;&nbsp;&nbsp;</div>
			<div className="dropdown">
				<div className="time-container">
					<div>{last}&nbsp;</div>
					<i className="material-icons" style={{ fontSize: '15px', alignSelf: 'center' }}>
						expand_more
					</i>
				</div>
				<div class="dropdown-content">
					<div
						className="dropdown-text"
						onClick={() => {
							setLast('Last 6 hours');
						}}
					>
						Last 6 hours
					</div>

					<div
						className="dropdown-text"
						onClick={() => {
							setLast('Last 24 hours');
						}}
					>
						Last 24 hours
					</div>

					<div
						className="dropdown-text"
						onClick={() => {
							setLast('Last 3 days');
						}}
					>
						Last 3 days
					</div>

					<div
						className="dropdown-text"
						onClick={() => {
							setLast('Last 7 days');
						}}
					>
						Last 7 days
					</div>
				</div>
			</div>
			<div className="option-tiles">
				<div>
					<div style={{ fontSize: '8px', fontWeight: '600' }}>Requires Manual action</div>
					<div style={{ fontWeight: '800' }}>34</div>
				</div>
				<i className="material-icons option-tiles-icons" style={{ color: 'rgb(230, 14, 78)' }}>
					error
				</i>
			</div>
			<div className="option-tiles">
				<div>
					<div style={{ fontSize: '8px', fontWeight: '600' }}>Marked as Safe</div>
					<div style={{ fontWeight: '800', marginTop: '10px' }}>128</div>
				</div>
				<i className="material-icons option-tiles-icons" style={{ color: 'rgb(91, 177, 235)' }}>
					offline_pin
				</i>
			</div>
			<div className="option-tiles">
				<div>
					<div style={{ fontSize: '8px', fontWeight: '600' }}>Hidden</div>
					<div style={{ fontWeight: '800', marginTop: '10px' }}>128</div>
				</div>
				<div
					style={{
						color: 'white',
						backgroundColor: 'orange',
						borderRadius: '50%',
						fontSize: '25px',
						alignSelf: 'center',
						minWidth: '30px',
						maxWidth: '30px',
						minHeight: '30px',
						maxHeight: '35px',
						marginRight: '5px'
					}}
				>
					<i
						className="material-icons option-tiles-icons"
						style={{
							fontSize: '20px'
						}}
					>
						visibility_off
					</i>
				</div>
			</div>
		</div>
	);
}

export default Header2;
