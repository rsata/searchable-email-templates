import React from 'react';

const styles = {
  input: {
    maxWidth: '100%',
    height: '62px',
    fontSize: '37px',
    border: 'none',
    paddingLeft: '15px',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)'
  }  
}

class searchEntries extends React.Component {
  constructor(props) {
    super(props);

    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(e) {
    e.preventDefault();
    // this.setState({searchQuery: e.target.value})
    this.props.query(e.target.value)
  }

  render() {
    return (
      <form>
        <input style={styles.input} type='text' placeholder='Search Tags...' onChange={this.handleQuery} />
      </form>
    );
  }
}

export default searchEntries;
