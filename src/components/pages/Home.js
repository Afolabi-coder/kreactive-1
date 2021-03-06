import React, { Component } from 'react';

export default class Home extends Component {
	showForm = () => {
		this.props.history.push('/addresults');
	};
	render() {
		return (
			<div>
				<div className="text-align-center" style={styles}>
					<div className="row align-items-center justify-content-center" style={{ height: '80vh' }}>
						<div className="col col-md-10 mx-auto" style={{ color: '#fff' }}>
							<h1 className="mb-0">Akumlate v1.1.1</h1>
							<button onClick={this.showForm} className="mt-0 btn btn-light">
								Start Calculating
							</button>
						</div>
					</div>
				</div>
				<span>
					<strong> &copy; Developed By Afolabi</strong>
				</span>
			</div>
		);
	}
}

const styles = {
	minHeight: 'calc(100vh - 56px)',
	fontSize: '4rem',
	background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/img/home.jpg")',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	maxWidth: '100%',
	overflow: 'hidden'
};
