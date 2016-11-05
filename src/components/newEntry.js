import React, { Component } from 'react';

const styles = {
	inputEntry: {
		width: '100%',
		height: '100px',
		fontSize: '1em',
		WebkitBoxSizing: 'border-box',
       MozBoxSizing: 'border-box',
          BoxSizing: 'border-box'
	},
	inputTags: {
		fontSize: '1em',
		height: '31px',
		width: '50%'
	},
	button: {
		fontSize: '0.8em',
		height: '44px',
		width: '65px',
		marginTop: '4px',
		backgroundColor: '#fff',
		border: '1px solid #ccc',
	},
	form: {
		marginBottom: '20px'
	}
}


// Because overkill
// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript?page=1&tab=votes#tab-top

function generateUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  	// eslint-disable-next-line
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
	});
}


class newEntry extends Component {

	constructor(props) {
		super(props)
		this.state={
			entry: '',
			tags: ''
		}
		this.handleEntryChange = this.handleEntryChange.bind(this);
		this.handleTagChange = this.handleTagChange.bind(this);
		this.postEntry = this.postEntry.bind(this);
	}

	handleEntryChange(e) {
		this.setState({entry: e.target.value});
	}

	handleTagChange(e) {
		this.setState({tags: e.target.value})
	}

	postEntry(e) {
		// easy way to get list to update
		// e.preventDefault();

		fetch('http://api.supriyapandya.com/new_entry', {
			method: 'POST',
			headers: {
				// https://github.com/matthew-andrews/isomorphic-fetch/issues/34
				'Content-type': 'application/json' 
			},
			body: JSON.stringify({
				id: generateUUID(),
				entry: this.state.entry,
				tags: this.state.tags
			})
		})
			.then(r => console.log(r))
			.then(() => this.setState({
				entry: '',
				tags: ''
			}));
	}

	render() {		
		return(
			<div>
				<form style={styles.form} onSubmit={this.postEntry}>
					<textarea style={styles.inputEntry} type='text' value={this.state.entry} placeholder='Enter text' onChange={this.handleEntryChange} />
					<input style={styles.inputTags} type='text' value={this.state.tags} placeholder='Enter tags separated by comma' onChange={this.handleTagChange} />	
					<br /><button style={styles.button}>Submit</button>
				</form>
			</div>
		)
	}
}

export default newEntry;