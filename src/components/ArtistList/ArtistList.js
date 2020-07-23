// ArtistList.js

import React, { Component } from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import { connect } from 'react-redux';

class ArtistList extends Component {
  render() {
    const showArtistList = this.props.store.artistReducer.map((artist, index) => {
      return (
        <ArtistListItem key={index} refreshArtists={this.props.refreshArtists} artist={artist} />
      );
    });
    return (
      <div>
        <table>
          <tbody>{showArtistList}</tbody>
        </table>
      </div>
    );
  }
}
const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(ArtistList);
