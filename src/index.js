import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import preview from './images/preview.jpg';
import Modal from 'react-modal';
import './index.css';
import './modal.css';

Modal.setAppElement('#root');

let cinemaData = [];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  props() {

  }

  componentDidMount() {
    console.log('componentDidMount');
    axios.get(`https://kudago.com/public-api/v1.3/movies/?location=msk&fields=id,title,body_text,poster&page_size=100`)
      .then((response) => {
        cinemaData = this.shuffle(response.data.results);
        console.log('DONE! ', cinemaData);
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

  openModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div className="card-сinema">
        <h1 className="card-сinema__title">На какой<br/>
          <span>фильм пойдем</span>
        </h1>
        <img className="card-сinema__preview" src={preview} alt="preview"/>
        <button className="button" onClick={this.openModal}>Следующий фильм</button>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="info">
            <div className="info__poster">
              <img src={preview} alt="poster"/>
            </div>
            <div className="info__content">
              <h2 className="info__title">Инфа о фильме</h2>
              <p className="info__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores recusandae inventore pariatur adipisci nesciunt sed incidunt earum aliquam, suscipit illo ut numquam, at molestiae quibusdam ad error, culpa sint non.</p>
            </div>
          </div>
          <div className="cinemas">
            <h3>Где идет:</h3>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <button className="button" onClick={this.closeModal}>Закрыть</button>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
