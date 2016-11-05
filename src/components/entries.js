import React, { Component } from 'react';

import Entry from './entry'

const styles = {
	ul: {
		marginTop: '20px',		
	}
}

class Entries extends Component {
	//map props
	render() {
		return(
			<ul style={styles.ul}>
				{this.props.entries.map((x) => {
					return <Entry key={x.EntryId} id={x.EntryId} entry={x.Entry} tags={x.EntryTags} entryTime={x.EntryTime} />
				})}
			</ul>
		)
	}
}

export default Entries;