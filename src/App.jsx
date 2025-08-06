import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const BASEURl=import.metaenv.BASE_URL;
    return (
      <>
        <header>
          <div className='logo'>Grid Demo</div>
        </header>
        <section>
          <div className='card'>
            <img src={${BASEURL}1.jpeg} alt=''/>
            <label>image 1</label>
          </div>
          <div className='card'>
            <img src={${BASEURL}2.jpeg} alt=''/>
            <label>image 2</label>
          </div>
          <div className='card'>
            <img src={${BASEURL}3.jpeg} alt=''/>
            <label>image 3</label>
          </div>
          <div className='card'>
            <img src={${BASEURL}4.jpeg} alt=''/>
            <label>image 4</label>
          </div>
          <div className='card'>
            <img src={${BASEURL}5.jpeg} alt=''/>
            <label>image 5</label>
          </div>
          <div className='card'>
            <img src={${BASEURL}6.jpeg} alt=''/>
            <label>image 6</label>
          </div>
        <div className='card'>
            <img src={${BASEURL}7.jpeg} alt=''/>
            <label>image 7</label>
          </div>
          <div className='card'>
            <img src={${BASEURL}8.jpeg} alt=''/>
            <label>image 8</label>
          </div>
          <div className='card'>
            <img src={${BASEURL}9.jpeg} alt=''/>
            <label>image 9</label>
          </div>
        </section>
      <footer>Copyright@2025.All Rights Reserved. </footer>
      </>
    );
  }
}

export default App;
