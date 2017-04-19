import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import preview from './images/preview.jpg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="card-сinema">
        <h1 className="card-сinema__title">На какой<br/>
          <span>фильм пойдем</span>
        </h1>
        <img className="card-сinema__preview" src={preview} alt="preview"/>
        <button className="card-сinema__button">Следующий фильм</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
