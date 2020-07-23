// ArtistList.js

import React, { Component } from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import { connect } from 'react-redux';

class ArtistList extends Component {
  //   createArtistList() {
  //     let artistListForDom = [];
  //     for (let i = 0; i < this.props.store.artistReducer.length; i += 1) {
  //       let artist = this.props.store.artistReducer[i];
  //       let artistRow = (
  //         <ArtistListItem key={i} refreshArtists={this.props.refreshArtists} artist={artist} />
  //       );
  //       artistListForDom.push(artistRow);
  //     }

  //     return artistListForDom;
  //   }

  render() {
    const showArtistList = this.props.store.artistReducer.map((artist, index) => {
      return (
        <ArtistListItem key={index} refreshArtists={this.props.refreshArtists} artist={artist} />
      );
    });
    return (
      <div>
        <table>
          {/* <tbody>{this.createArtistList()}</tbody> */}
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
