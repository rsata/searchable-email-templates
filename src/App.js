import React, { Component } from 'react';
import './App.css';

import Entries from './components/entries';
import NewEntry from './components/newEntry';
import SearchEntries from './components/searchEntries';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaFire from 'react-icons/lib/fa/fire';

const styles = {
  button: {
    border: 'none',
    fontSize: '1.4em',
    backgroundColor: '#f06163',
    color: '#fff',
    marginBottom: '20px',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)'
  },
  icon: {
    textAlign: 'center',
    fontSize: '10em',
    border: 'solid 15px #f06163',
    borderRadius: '100%',
    width: '264px',
    height: '264px',
    margin: '45px auto',
    color: '#f06163'
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      entries: '',
      filteredEntries:[],
      newEntryFormVisible: false
    }
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.newEntryClick = this.newEntryClick.bind(this);
  }

  componentDidMount() {
    fetch('http://api.supriyapandya.com/entries')
      .then(r => r.json()) // why the r.json??
      .then(resp => {
        this.setState({
          entries: resp
        })
      })
      .catch(err => console.log(err));
  }

  handleSearchQuery(query) {
    this.setState({query: query});
    const filter = this.state.entries.filter(e => e.EntryTags.includes(query)).map(e => e);
    this.setState({filteredEntries: filter});
  }

  newEntryClick() {
    this.setState({newEntryFormVisible: !this.state.newEntryFormVisible});
  }

  render() {
    if (!this.state.entries) return <div>Loading</div>
    return (
      <div>
        <div style={styles.icon}><FaFire /></div>
        <button style={styles.button} onClick={this.newEntryClick}><FaPlusCircle /> New Entry</button>
        {this.state.newEntryFormVisible ? <NewEntry /> : null}        
        <SearchEntries query={this.handleSearchQuery}/>
        <Entries entries={this.state.query ? this.state.filteredEntries : this.state.entries}/>        
      </div>
    );
  }
}

export default App;
