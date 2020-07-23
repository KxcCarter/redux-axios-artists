// ArtistListItem.js

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AddArtist extends Component {
  state = {
    name: '',
  };

  addArtist = () => {
    axios
      .post('/artist', this.state)
      .then((response) => {
        this.props.refreshArtists();
        this.props.history.push('/allArtists');
      })
      .catch((err) => {
        console.log(`POST error! ${err}`);
      });
  };

  handleInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>Add a new artist</h3>
        <form onSubmit={this.addArtist}>
          <input type="text" value={this.state.name} required onChange={this.handleInput} />
          <button type="submit">Add!</button>
        </form>
      </div>
    );
  }
}
const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(AddArtist);
