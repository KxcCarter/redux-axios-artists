// ArtistListItem.js

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class AddArtist extends Component {
  state = {
    name: this.props.hold.name,
  };

  addArtist = () => {
    axios
      .post('/artist', this.props.hold)
      .then((response) => {
        this.props.refreshArtists();
        this.props.history.push('/allArtists');
        this.props.dispatch({
          type: 'HOLD_INPUT_DATA',
          payload: '',
        });
      })
      .catch((err) => {
        console.log(`POST error! ${err}`);
      });
  };

  handleInput = (event) => {
    this.props.dispatch({
      type: 'HOLD_INPUT_DATA',
      payload: { name: event.target.value },
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
  return { hold: store.persistantInput };
};

export default connect(mapStoreToProps)(AddArtist);
