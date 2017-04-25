import React from 'react';
import Modal from 'react-modal';
import './modal.css';

Modal.setAppElement('#root');

export class Poster extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.state.showModal}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="info">
          <div className="info__poster">
            {/*<img src={cinemaData[0].poster.image} alt="poster"/>*/}
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
    );
  }
}

export default Poster;