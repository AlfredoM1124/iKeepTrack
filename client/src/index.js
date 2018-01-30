import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Component Structure
// --------------------
// Container
// --> Title
// --> Form
// --> List
// ----> Inventory
// --> Footer

// stateless component
const Title = () => {
	return (
		<div id="titleWrapper">
			<h2 className="textCenter">Inventory List</h2>
		</div>
	);
};


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleNewInventoryAddition = this.handleNewInventoryAddition.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}
	
	handleNewInventoryAddition() {
		if(this.input.value !== '') {
			this.props.addInventory(this.input.value);
			this.setState({
				value: ''
			});
			this.input.placeholder = "Add Inventory here...";
		}
	}
	
	render() {
		return (
			// ref should be passed a callback
			// with underlying dom element as its
			// argument to get its reference 
			<div id="form">
				<input 
					ref={node => {
						this.input = node;
					}}
					value={this.state.value}
					placeholder="Add items here..."
					autoComplete="off"
					onChange={this.handleChange}
				/>

				<button 
					onClick={this.handleNewInventoryAddition}
				>	
					+
				</button>	
			</div>
		);
	}
}

const Inventory = ({inventory, remove}) => {
	// single inventory 
	return (
		<p className="inventories">
			{inventory.value}
			<span 
				className="removeBtn"
				onClick={()=> {
					remove(inventory.id)
				}}>
				x
			</span>
		</p>
	);
};

const List = ({inventories, remove}) => {
	let allInventories = [];
	
	if(inventories.length > 0) {
		allInventories = inventories.map(inventory => {
			// passing inventory and remove method reference
			return (<Inventory inventory={inventory} remove={remove} />);
			//return (<p>{inventory.value}</p>);
		});
	} else {
		allInventories.push(<h3 id="acu">All caught up !</h3>);	
	}
	
	return (
		<div id="list">
			<p id="info"> Your Inventories: </p>
			{allInventories}
		</div>
	);
};

const Footer = () => {
	return (
		<div id="footer">
			<a href="https://github.com/AlfredoM1124" target="_blank">
				{/* <p> */}
					Alfredo Munoz
				{/* </p> */}
			</a>
		</div>
	);
};

class Container extends React.Component {
	constructor(props) {
		super(props);
		// data for introduction to app
		// for new users
		const introData = [
			{
				id: -3, 
				value: "Welcome to iKeepTrack! Easily manage a list of items, for those of us who just can't keep track of all our stuff."
			},
			{
				id: -2,
				value: "Hover over items and click on `X` to delete them!"
			},
			{
				id: -1,
				value: "Add new items, delete old ones, keep track of everything."
			}
		];
		
		const localData = localStorage.inventories && JSON.parse(localStorage.inventories);

		this.state = { 
			data: localData || introData
		};
		
		// binding methods
		this.addInventory = this.addInventory.bind(this);
		this.removeInventory = this.removeInventory.bind(this);
	}
	// Handler to update localStorage
	updateLocalStorage() {
		if (typeof(Storage) !== "undefined")
			localStorage.inventories = JSON.stringify(this.state.data);
	}
	// Handler to add Inventory
	addInventory(val) {
		let id;
		// if localStorage is available then increase localStorage count
		// else use global window object's id variable
		if (typeof(Storage) !== "undefined") {
			id = Number(localStorage.count);
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}
		
		const inventory = { 
			value: val, 
			id: id 
		};
		
		this.state.data.push(inventory);
		// update state
		this.setState({
			data: this.state.data
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	// Handler to remove Inventory
	removeInventory(id) {
		// filter out the Inventory that has to be removed
		const list = this.state.data.filter(inventory => {
			if (inventory.id !== id)
				return inventory;
		});
		// update state
		this.setState({
			data: list
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	
	componentDidMount() {
		localStorage.clear();
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.inventories) {
				localStorage.inventories = JSON.stringify(this.state.data);
			}
			if(!localStorage.count) {
				localStorage.count = 0;
			}

		} else {
			 console.log("%cApp will not remember inventories created as LocalStorage Is Not Available",
							 "color: hotpink; background: #333; font-size: x-large;font-family: Courier;");
			window.id = 0;
		}
	}
	
	render() {
		return (
			<div id="container">
				<Title />
				<Form addInventory={this.addInventory} />
				<List inventories={this.state.data} remove={this.removeInventory} />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<Container />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();