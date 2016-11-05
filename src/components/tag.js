import React from 'react';

const styles = {
  tag: {
    display: 'inline',
    backgroundColor: '#f06163',
    borderRadius: '2px',
    margin: '5px 3px',
    textTransform: 'uppercase',
    padding: '6px',
    color: '#fff',
    fontSize: '0.7em'
  }
}

class Tag extends React.Component {
    render() {
        return <li style={styles.tag}>{this.props.tag}</li>;
    }
}

export default Tag;
