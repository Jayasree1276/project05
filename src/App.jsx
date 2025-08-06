import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <div className='logo'>Grid Demo</div>
        </header>
        <section>
          <div className='card'>
            <img src='/1.jpeg' alt=''/>
            <label>image 1</label>
          </div>
          <div className='card'>
            <img src='/2.jpeg' alt=''/>
            <label>image 2</label>
          </div>
          <div className='card'>
            <img src='/3.jpeg' alt=''/>
            <label>image 3</label>
          </div>
          <div className='card'>
            <img src='/4.jpeg' alt=''/>
            <label>image 4</label>
          </div>
          <div className='card'>
            <img src='/5.jpeg' alt=''/>
            <label>image 5</label>
          </div>
          <div className='card'>
            <img src='/6.jpeg' alt=''/>
            <label>image 6</label>
          </div>
        <div className='card'>
            <img src='/7.jpeg' alt=''/>
            <label>image 7</label>
          </div>
          <div className='card'>
            <img src='/8.jpeg' alt=''/>
            <label>image 8</label>
          </div>
          <div className='card'>
            <img src='/9.jpeg' alt=''/>
            <label>image 9</label>
          </div>
        </section>
      <footer>Copyright@2025.All Rights Reserved. </footer>
      </>
    );
  }
}

export default App;
