'use client';

import { useState } from 'react';
import styles from './login.module.css';

export default function LoginPage() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.username || !formData.password) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    
    try {
      // Aqui você pode implementar a lógica de autenticação
      console.log('Dados do login:', formData);
      
      // Simulação de autenticação bem-sucedida
      // await signIn('credentials', formData);
      
      alert(`Bem-vindo, ${formData.username}!`);
      
      // Redirecionar após login bem-sucedido
      // router.push('/dashboard');
      
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro ao fazer login. Tente novamente.');
    }
  };

  const handleForgotPassword = () => {
    // Lógica para recuperação de senha
    alert('Funcionalidade de recuperação de senha');
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.logo}>
          <h1>SUPORTE FÁCIL</h1>
        </div>
        
        <div className={styles.loginHeader}>
          <h2>ACESSO DO AGENTE</h2>
          <p>Entre com suas credenciais para continuar</p>
        </div>
        
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">
              <span className={styles.checkboxPlaceholder}></span>
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
          
          <div className={styles.formGroup}>
            <label htmlFor="password">
              <span className={styles.checkboxPlaceholder}></span>
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
          
          <button type="submit" className={styles.loginButton}>
            ENTRAR
          </button>
        </form>
        
        <div className={styles.forgotPassword}>
          <button onClick={handleForgotPassword} className={styles.forgotButton}>
            Esqueci minha senha
          </button>
        </div>
        
        <div className={styles.footer}>
          <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}