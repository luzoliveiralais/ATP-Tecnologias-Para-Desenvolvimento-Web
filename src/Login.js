import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };

    this.aoMudarEmail = this.aoMudarEmail.bind(this);
    this.aoMudarSenha = this.aoMudarSenha.bind(this);
    this.aoClicarLogin = this.aoClicarLogin.bind(this);
  }

  aoMudarEmail(evento) {
    this.setState({ email: evento.target.value });
  }

  aoMudarSenha(evento) {
    this.setState({ senha: evento.target.value });
  }

  aoClicarLogin() {
    const emailCorreto = 'laisluz@puc.com.br';
    const senhaCorreta = '123456';

    if (this.state.email === emailCorreto && this.state.senha === senhaCorreta) {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  }

  render() {
    return (
        <div style={{ marginLeft: '10px',marginTop: '10px'}}>
        <h1 style={{ color: '#6A0DAD', margin: '0' }}>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.aoMudarEmail}
        />
        <br />
        <input 
          type="password"
          placeholder="Senha"
          value={this.state.senha}
          onChange={this.aoMudarSenha}
        />
        <br />
        <button style={{ color: '#6A0DAD' }}onClick={this.aoClicarLogin}>Acessar</button>
        <br />
        <label>{this.state.mensagem}</label>
      </div>
    );
  }
}

export default Login;
