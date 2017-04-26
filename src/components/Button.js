import React from 'react';

export class ButtonNext extends React.Component {
  constructor() {
    super();

    this.nextCinema = this.nextCinema.bind(this);
  }

  nextCinema() {
    console.log(this.state.cinemaData);
  }

  render() {
    return (
      <button className="button">Следующий фильм</button>
    );
  }
}

export default ButtonNext;
