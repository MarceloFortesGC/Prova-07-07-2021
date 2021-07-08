import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    produtos: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ produtos: response.data });
  }

  render() {

    const { produtos } = this.state;

    return (
      <div>
        <h1>Listar os produtos</h1>
        {produtos.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default App;
