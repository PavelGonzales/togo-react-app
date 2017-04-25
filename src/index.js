import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import preview from './images/preview.jpg';
import Poster from './poster.js';
import ButtonNext from './button.js';
// import Popup from './popup.js';
import './index.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cinemaData: [],
      poster: preview,
    };

  }

  componentDidMount() {
    axios.get(`https://kudago.com/public-api/v1.3/movies/?location=msk&fields=id,title,body_text,poster&page_size=100`)
      .then((response) => {
        const cinemaData = this.shuffle(response.data.results);
        this.setState({
          cinemaData: cinemaData
        })
      })
      .catch((error) => {
        console.log('error', error);
      })

  }

  shuffle(arr) {
    const array = arr;
    for (let i = array.length; i; i--) { // eslint-disable-line
      const j = Math.floor(Math.random() * i);
      [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
    return array;
  }

  render() {
    console.log('DONE! ', this.state.cinemaData);
    
    return (
      <div className="card-сinema">
        <h1 className="card-сinema__title">На какой<br/>
          <span>фильм пойдем</span>
        </h1>
        <Poster poster={this.state.poster}/>
        <ButtonNext cinemaData={this.nextCinema}/>
        {/*<Popup/>*/}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
