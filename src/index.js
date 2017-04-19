import React from 'react';
import ReactDOM from 'react-dom';
import preview from './images/preview.jpg';
import Modal from 'react-modal';
import './index.css';
import './modal.css';

Modal.setAppElement('#root');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
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
          isOpen={this.state.modalIsOpen}
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
