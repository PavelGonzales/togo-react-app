import React from 'react';
import ReactDOM from 'react-dom';
import preview from './images/preview.jpg';
import Modal from 'react-modal';
import './index.css';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="card-сinema">
        <h1 className="card-сinema__title">На какой<br/>
          <span>фильм пойдем</span>
        </h1>
        <img className="card-сinema__preview" src={preview} alt="preview"/>
        <button className="card-сinema__button" onClick={this.openModal}>Следующий фильм</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref="subtitle">Инфа о фильме</h2>
          <button onClick={this.closeModal}>Закрыть</button>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
