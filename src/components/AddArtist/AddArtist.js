// ArtistListItem.js

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class AddArtist extends Component {
  state = {
    newArtist: '',
  };

  addArtist = () => {
    axios
      .post('/artist', this.state.newArtist)
      .then((response) => {
        this.props.refreshArtists();
      })
      .catch((err) => {
        console.log(`POST error! ${err}`);
      });
  };

  handleInput = (event) => {
    this.setState({
      newArtist: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>Add a new artist</h3>
        <form onSubmit={this.addArtist}>
          <input type="text" value={this.state.newArtist} required onChange={this.handleInput} />
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
