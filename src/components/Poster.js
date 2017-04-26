import React from 'react';
import loader from './../images/loader.gif';

export class Poster extends React.Component {
  render() {
    return (
      <div className="card-сinema__poster">
        <img className="card-сinema__loader" src={loader} alt="loader"/>
        <img className="card-сinema__preview" src={this.props.poster} alt="preview" onClick={this.openModal}/>
      </div>
    );
  }
}

export default Poster;
