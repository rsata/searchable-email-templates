import React, { Component } from 'react';
import Tag from './tag';
import FaTrash from 'react-icons/lib/fa/trash';

const styles = {
  tag: {
    textTransform: 'uppercase'
  },
  entryItem: {
    maxWidth: '100%',
    backgroundColor: '#fff',
    padding: '28px 35px',
    position: 'relative',
    whiteSpace: 'pre-wrap',
    borderBottom: 'solid 1px #eee',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)',
    marginBottom: '15px',
    borderLeft: 'solid 7px #f06163'
  },
  button: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    fontSize: '1.5em',
    color: '#777',
    border: 'none',
    backgroundColor: '#fff'
  },
  entryTime: {
    fontSize: '0.6em',
    marginTop: '12px'
  }
}

class Entry extends Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    // easy way to get list to update
    // e.preventDefault
    // or reload the state
    // or remove it 'visually' - it has also been removed from db - could you remove from state?

    fetch('http://api.supriyapandya.com/delete_entry', {
      method: 'POST',
      headers: {
        // https://github.com/matthew-andrews/isomorphic-fetch/issues/34
        'Content-type': 'application/json' 
      },
      body: JSON.stringify({
        id: this.props.id,
      })
    })
      .then(r => console.log(r));
  }

	render() {
    const date = new Date(this.props.entryTime)
    const dateReadable = date.toDateString()
		return (
			<li style={styles.entryItem}>
        <p>{this.props.entry}</p>
        <form className='inlineForm' onSubmit={this.handleDelete}><button style={styles.button} type='submit'><FaTrash /></button></form>
        <ul>
          {this.props.tags.split(', ').map(x => {
            return <Tag key={x} tag={x} />
          })}
        </ul>
        <div style={styles.entryTime}>Last edited: {dateReadable}</div>
      </li>
		)
	}
}

export default Entry;