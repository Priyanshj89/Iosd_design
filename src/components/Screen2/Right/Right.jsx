import React from 'react';
import './Right.css';

import Girl from '../../Img/formalgirl.jpg';
import Hospital from '../../Img/hospital.jpg';
import David from '../../Img/David.jpg';

function Right() {
	return (
		<div className="right-sec">
			<div style={{ display: 'flex' }}>
				<img className="Profileimg" src={Girl} alt="err"></img>
				<div>
					<div
						style={{
							fontWeight: '800',
							color: 'rgb(28, 28, 163)',
							fontSize: '20px',
							marginTop: '5px'
						}}
					>
						Rachana Ranade
					</div>
					<div style={{ fontWeight: '600', color: 'darkgray', fontSize: '10px' }}>2:03 PM, Today</div>
				</div>
			</div>
			<div style={{ marginLeft: '15px', marginTop: '10px', marginRight: '20px' }}>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr , sed diam nonumy eirmod tempor invidunt ut
				labore et dalore magna aliquyam erat, sed diam voluptua . At vero eos et accusam et justo.
			</div>
			<div>
				<img src={Hospital} alt="err" className="right-img"></img>
			</div>
			<br />
			<div style={{ display: 'flex' }}>
				<img className="Profileimg" src={David} alt="err"></img>
				<div>
					<div
						style={{
							fontWeight: '800',
							color: 'black',
							fontSize: '16px',
							marginTop: '5px'
						}}
					>
						Prayag Mukhi
					</div>
					<div style={{ fontWeight: '600', color: 'darkgray', fontSize: '10px' }}>2:03 PM, Today</div>
				</div>
				<div style={{ marginLeft: 'auto', display: 'flex' }}>
					<div className="card-icon">
						<i
							className="material-icons option-tiles-icons"
							style={{
								fontSize: '20px',
								color: 'green'
							}}
						>
							done
						</i>
					</div>
					<div className="card-icon">
						<i
							className="material-icons option-tiles-icons"
							style={{
								fontSize: '20px',
								color: 'rgb(91, 177, 235)'
							}}
						>
							offline_pin
						</i>
					</div>
					<div className="card-icon">
						<i
							className="material-icons option-tiles-icons"
							style={{
								fontSize: '20px',
								color: 'orange'
							}}
						>
							visibility_off
						</i>
					</div>
				</div>
			</div>
			<div style={{ marginTop: '10px', marginLeft: '10px' }}>
				Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush
				Prayag shoul marry piyush.
			</div>
			<br />
			<div className="right-input-container">
				<input className="right-input" placeholder="Write a reply..."></input>
				<i class="material-icons" style={{ marginRight: '10px', cursor: 'pointer' }}>
					mood
				</i>
			</div>
			<div style={{ display: 'flex' }}>
				<div className="containerv2">
					<div style={{ color: 'rgb(91, 177, 235)' }}>&nbsp;Like&nbsp;</div>
					<i
						className="material-icons"
						style={{
							color: 'rgb(91, 177, 235)',
							fontSize: '18px',
							marginTop: '4px'
						}}
					>
						thumb_up
					</i>
				</div>
				<div className="containerv2">
					<div style={{ color: 'red' }}>&nbsp;Ban&nbsp;</div>
					<i
						className="material-icons"
						style={{
							color: 'red',
							fontSize: '18px',
							marginTop: '4px'
						}}
					>
						block
					</i>
				</div>
				<div className="containerv3">
					<div style={{ color: 'white', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>Reply</div>
				</div>
			</div>
		</div>
	);
}

export default Right;
