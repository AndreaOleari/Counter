import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  num: 0, 
		  show: true
		};
	}
	
	IncrementItem = () => {
		this.setState({ num: this.state.num + 3});
	}
	
	DecreaseItem = () => {
		this.setState({ num: this.state.num - 3});
	}
	
	ToggleClick = () => {
		this.setState({ show: !this.state.show });
	}
	
	render(){
		return(
			<div className="Counter">
				<header className="Counter-header">
					<button onClick = {this.IncrementItem}>Clicca per +3</button>
					<button onClick = {this.DecreaseItem}>Clicca per -3</button>
					<button onClick = {this.ToggleClick}>
						{	this.state.show ? 'Hide num' : 'Show num' }
					</button>
					{	this.state.show ? <h2>{ this.state.num } </h2> : ''}
					<img src={logo} className="Counter-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default Counter;
