import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './Datalayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash =  getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token);

        spotify.getUserPlaylists().then((playlist) => {
          dispatch({
            type:"SET_PLAYLIST", 
            playlists:playlist,
          })

        spotify.getMe().then((user) => {
          dispatch({
            type:"SET_USER", 
            user:user,
          })
        })

        spotify.getPlaylist("37i9dQZEVXcEJUT2vnbMUL").then((response)=> {
          dispatch({
            type:"SET_DISCOVER_WEEKLY", 
            discover_weekly: response,
          })
        })
      })
    }

  }, []);



  return (
    <div className="app">
      {
        token?(
          <Player spotify={spotify}/>
        ):<Login/>
      }
    </div>
  );
}

export default App;
