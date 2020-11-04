import React from 'react';
import './Card.css';
import David from '../../Img/David.jpg';
import instagram from '../../Img/instagram.png';

function Card() {
	return (
		<div className="person-comment">
			<div style={{ display: 'flex' }}>
				<img className="Profileimg" src={David} alt="err"></img>
				<div>
					<div
						style={{
							fontWeight: '800',
							color: 'rgb(28, 28, 163)',
							fontSize: '20px',
							marginTop: '5px'
						}}
					>
						Prayag Mukhi
					</div>
					<div style={{ fontWeight: '600', color: 'darkgray', fontSize: '10px' }}>2:03 PM, Today</div>
				</div>
				<i className="material-icons info-icon" style={{ color: 'rgb(230, 14, 78)' }}>
					error
				</i>
			</div>
			<div className="card-text">
				<div>
					Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry
					piyush Prayag shoul marry piyush ..
				</div>
				<div className="dropdown2">
					<div>
						<i className="material-icons" style={{ fontSize: '30px', cursor: 'pointer' }}>
							keyboard_arrow_right
						</i>
						<div class="dropdown-content2">
							<div className="dropdown-text-2">
								Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag
								shoul marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul
								marry piyush Prayag shoul marry piyush Prayag shoul marry piyush Prayag shoul marry
								piyush
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<div className="card-acc">
					<img className="card-acc-img" src={instagram} alt="err"></img>
					<div
						style={{
							alignSelf: 'center',
							justifyContent: 'center',
							fontSize: '12px',
							fontWeight: '600',
							marginRight: '20px'
						}}
					>
						Rachana.ranade3
					</div>
				</div>
				<div style={{ marginLeft: 'auto', display: 'flex' }}>
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
				</div>
			</div>
		</div>
	);
}

export default Card;
