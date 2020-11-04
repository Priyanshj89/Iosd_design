import React from 'react';
import './Left.css';
import youtube from '../../Img/youtube.png';
import instagram from '../../Img/instagram.png';
import facebook from '../../Img/facebook.png';

const check = id => {
	document.getElementById(id).className = 'done-checkbox';
};

const uncheck = id => {
	document.getElementById(id).className = 'checkbox';
};

const middleware = id => {
	var y = document.getElementById(id).className;
	if (y == 'done-checkbox') {
		uncheck(id);
	} else {
		check(id);
	}
};

function Left() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className="left-sec">
				<div style={{ fontWeight: '800', fontSize: '22px' }}>Pages and Channels</div>
				<div className="account">
					<div id="1" className="done-checkbox" onClick={() => middleware('1')}>
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontWeight: '600', marginTop: '2px', marginLeft: '5px' }}>Rachana Ranade</div>
					<div>
						<img src={youtube} alt="err" className="imgcontainer"></img>
					</div>
				</div>
				<div className="account">
					<div id="2" className="done-checkbox" onClick={() => middleware('2')}>
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontWeight: '600', marginTop: '2px', marginLeft: '5px' }}>Rachana.ranade3</div>
					<div>
						<img src={instagram} alt="err" className="imgcontainer"></img>
					</div>
				</div>
				<div className="account">
					<div id="3" className="checkbox" onClick={() => middleware('3')}>
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontWeight: '600', marginTop: '2px', marginLeft: '5px' }}>Rachana Ranade</div>
					<div>
						<img src={facebook} alt="err" className="imgcontainer"></img>
					</div>
				</div>
				<div className="account">
					<div id="4" className="done-checkbox" onClick={() => middleware('4')}>
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontWeight: '600', marginTop: '2px', marginLeft: '5px' }}>Rachana.ranade3</div>
					<div>
						<img src={instagram} alt="err" className="imgcontainer"></img>
					</div>
				</div>
				<br />
				<div style={{ fontWeight: '800', fontSize: '20px', marginBottom: '10px' }}>Status</div>
				<div style={{ display: 'flex' }}>
					<div className="done-checkbox2">
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
						Requires Manual Action
					</div>
				</div>
				<div style={{ display: 'flex' }}>
					<div className="done-checkbox2">
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontSize: '16px', fontWeight: '600' }}>Marked as safe By:</div>
				</div>
				<div style={{ display: 'flex', marginLeft: '25px', marginTop: '7px' }}>
					<div className="done-checkbox2">
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontSize: '14px' }}>Manual Action</div>
				</div>
				<div style={{ display: 'flex', marginLeft: '25px', marginTop: '7px' }}>
					<div className="done-checkbox2">
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontSize: '14px', marginBottom: '20px' }}>AI</div>
				</div>
				<div style={{ display: 'flex' }}>
					<div className="done-checkbox2">
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontSize: '16px', fontWeight: '600' }}>Hidden By</div>
				</div>
				<div style={{ display: 'flex', marginLeft: '25px', marginTop: '7px' }}>
					<div className="checkbox2"></div>
					<div style={{ fontSize: '14px' }}>Manual Action</div>
				</div>
				<div style={{ display: 'flex', marginLeft: '25px', marginTop: '7px' }}>
					<div className="done-checkbox2">
						<i className="material-icons done_icon">done</i>
					</div>
					<div style={{ fontSize: '14px' }}>AI</div>
				</div>
				<div style={{ display: 'flex', marginLeft: '25px', marginTop: '7px' }}>
					<div className="checkbox2"></div>
					<div style={{ fontSize: '14px' }}>Keywords</div>
				</div>
				<br />
			</div>
			<div className="left-sec">
				<div style={{ fontWeight: '800', fontSize: '22px' }}>Plan Usage</div>
				<br />
				<div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>
					Accounts Connected
					<div id="myProgressHome">
						<div id="myBarHome"></div>
					</div>
					<div
						style={{
							fontSize: '10px',
							fontWeight: '600',
							display: 'flex',
							float: 'right',
							marginRight: '40px',
							marginTop: '3px',
							color: 'rgb(170, 167, 167)'
						}}
					>
						2 of 3
					</div>
				</div>
				<div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>
					Comments Processed
					<div id="myProgressHome">
						<div id="myBarHome1"></div>
					</div>
					<div
						style={{
							fontSize: '10px',
							fontWeight: '600',
							display: 'flex',
							float: 'right',
							marginRight: '40px',
							marginTop: '3px',
							color: 'rgb(170, 167, 167)'
						}}
					>
						5,000 of 10,000
					</div>
				</div>
			</div>
		</div>
	);
}

export default Left;
