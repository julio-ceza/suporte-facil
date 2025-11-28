import React, { useState } from 'react';
import './Login.css'; // Importando o CSS

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Dados do formulário:', formData);
    
    // Exemplo de validação básica
    if (!formData.username || !formData.password) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    
    // Simulação de login bem-sucedido
    alert(`Bem-vindo, ${formData.username}!`);
    
    // Redirecionar ou fazer chamada API aqui
  };

  const handleForgotPassword = () => {
    // Lógica para recuperação de senha
    alert('Funcionalidade de recuperação de senha');
  };

  return (
    <div className="login-container">
      <div className="logo">
        <h1>SUPORTE FÁCIL</h1>
      </div>
      
      <div className="login-header">
        <h2>ACESSO DO AGENTE</h2>
        <p>Entre com suas credenciais para continuar</p>
      </div>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            <span className="checkbox-placeholder"></span>
            Nome de Usuário
          </label>
          <input 
            type="text" 
            id="username"
            name="username"
            placeholder="Digite seu nome de usuário"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">
            <span className="checkbox-placeholder"></span>
            Senha
          </label>
          <input 
            type="password" 
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="login-button">
          ENTRAR
        </button>
      </form>
      
      <div className="forgot-password">
        <a href="#" onClick={handleForgotPassword}>
          Esqueci minha senha
        </a>
      </div>
      
      <div className="footer">
        <p>&copy; 2025 Sua Empresa. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default LoginPage;