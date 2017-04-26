import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import Poster from './Poster';
import ButtonNext from './Button';
// import Popup from './components/Popup.js';

import './../styles/index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cinemaData: [],
      // poster: preview,
    };
  }

  // componentDidMount() {
  //   axios.get(`https://kudago.com/public-api/v1.3/movies/?location=msk&fields=id,title,body_text,poster&page_size=100`)
  //     .then((response) => {
  //       const cinemaData = this.shuffle(response.data.results);
  //       this.setState({
  //         cinemaData: cinemaData
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('error', error);
  //     })

  // }

  // shuffle(arr) {
  //   const array = arr;
  //   for (let i = array.length; i; i--) { // eslint-disable-line
  //     const j = Math.floor(Math.random() * i);
  //     [array[i - 1], array[j]] = [array[j], array[i - 1]];
  //   }
  //   return array;
  // }

  render() {
    console.log(this.props.testStore);
    
    return (
      <div className="card-сinema">
        <h1 className="card-сinema__title">На какой<br/>
          <span>фильм пойдем</span>
        </h1>
        <Poster poster={this.props.testStore[0].poster}/>
        <ButtonNext cinemaData={this.nextCinema}/>
        {/*<Popup/>*/}
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({}),
)(App);