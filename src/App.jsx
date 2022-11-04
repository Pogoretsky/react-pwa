import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import firebase from './firebase'
import {NavLink, BrowserRouter as Router} from 'react-router-dom'
import Routes from "./Routes";
import {ReactComponent as HomeIcon} from './assets/icons/Home.svg'
import {ReactComponent as FeedIcon} from './assets/icons/Feed.svg'
import {ReactComponent as EventsIcon} from './assets/icons/Events.svg'
import './App.css';

    function App() {
  const [mode, setMode] = useState('online');

  const handleMode = (event) => {
    setMode(event.type)
  }

  useEffect(() => {
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.warn("token", data)
    })

    window.addEventListener('offline', handleMode);
    window.addEventListener('online', handleMode);

    return () => {
      window.removeEventListener('offline', handleMode);
      window.removeEventListener('online', handleMode);
    }
  }, [])

  return (
    <div className="App min-vh-100 vh-100 position-relative">
      {
        mode === 'offline' ?
          <div class="alert alert-warning" role="alert">
            you are in offline mode or some issue with connection
          </div>
          : null

      }
      <Router>
        <Routes />
        <Navbar className='w-100' variant="light">
          <Nav className="nav-footer mr-auto">
            <NavLink exact to="/" className="d-flex flex-column justify-content-center align-items-center nav-link">
              <div className='top-border'/>
              <HomeIcon width="20px"/>
              <span>Home</span>
            </NavLink>
            <NavLink to="/feed" className="d-flex flex-column justify-content-center align-items-center nav-link">
              <div className='top-border'/>
              <FeedIcon width="20px"/>
              <span>Feed</span></NavLink>
            <NavLink to="/events" className="d-flex flex-column justify-content-center align-items-center nav-link">
              <div className='top-border'/>
              <EventsIcon width="20px"/>
              <span>Events</span></NavLink>
          </Nav>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
