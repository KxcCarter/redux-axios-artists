// App.js

import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// --- Style ---
import './App.css';
// --- Custom Components ---
import ArtistList from './../ArtistList/ArtistList.js';
import AddArtist from './../AddArtist/AddArtist';

class App extends Component {
  // DOM is ready
  componentDidMount() {
    // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist',
    })
      .then((response) => {
        console.log(response);

        this.props.dispatch({
          type: 'SET_ALL_ARTISTS',
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log('You done messed up, A-Aron!', err);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Famous Artists</h1>
          </header>
          <br />

          <div>
            <button>
              <Link to="/allArtists">Artist List</Link>
            </button>
            <button>
              <Link to="/add-artist">Add Artist</Link>
            </button>
          </div>
          <Route
            exact
            path="/allArtists"
            render={(props) => <ArtistList {...props} refreshArtists={this.refreshArtists} />}
          />
          <Route
            exact
            path="/add-artist"
            render={(props) => <AddArtist {...props} refreshArtists={this.refreshArtists} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStoreToProps = (store) => store;

export default connect(mapStoreToProps)(App);
