'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!username.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.');
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const validCredentials = [
        { user: 'admin', pass: 'admin123' },
        { user: 'agente', pass: 'agente123' },
        { user: 'suporte', pass: 'suporte123' }
      ];

      const isValid = validCredentials.some(
        cred => cred.user === username && cred.pass === password
      );

      if (isValid) {
        const userData = {
          name: username,
          loginTime: new Date().toISOString(),
          rememberMe: rememberMe
        };
        
        sessionStorage.setItem('user', JSON.stringify(userData));
        
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(userData));
        }
        
        router.push('/dashboard');
      } else {
        setError('Credenciais inválidas. Use: admin/admin123');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="logo">SUPORTE FÁCIL</h1>
          <h2 className="subtitle">ACESSO DO AGENTE</h2>
          <p className="instruction">Entre com suas credenciais para continuar</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Nome de Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de usuário"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              <label htmlFor="remember">Lembrar-me</label>
            </div>
          </div>
          
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'ENTRANDO...' : 'ENTRAR'}
          </button>
          
          <div className="forgot-password">
            <a href="#" onClick={(e) => e.preventDefault()}>Esqueci minha senha</a>
          </div>
        </form>
        
        <div className="demo-info">
          <p><strong>Credenciais de teste:</strong></p>
          <p>usuário: <code>admin</code> | senha: <code>admin123</code></p>
        </div>
        
        <div className="login-footer">
          <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .login-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 40px;
          max-width: 400px;
          width: 100%;
        }

        .login-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .logo {
          color: #2c3e50;
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .subtitle {
          color: #3498db;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .instruction {
          color: #7f8c8d;
          font-size: 14px;
        }

        .error-message {
          background: #f8d7da;
          color: #721c24;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 20px;
          text-align: center;
        }

        .login-form {
          margin-bottom: 20px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          color: #2c3e50;
          font-weight: 500;
        }

        .input-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e9ecef;
          border-radius: 6px;
          font-size: 16px;
        }

        .input-group input:focus {
          outline: none;
          border-color: #3498db;
        }

        .form-options {
          margin-bottom: 20px;
        }

        .remember-me {
          display: flex;
          align-items: center;
        }

        .remember-me input {
          margin-right: 8px;
        }

        .login-btn {
          width: 100%;
          background: #3498db;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .login-btn:hover:not(:disabled) {
          background: #2980b9;
        }

        .login-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .forgot-password {
          text-align: center;
        }

        .forgot-password a {
          color: #3498db;
          font-size: 14px;
        }

        .demo-info {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .demo-info code {
          background: #e9ecef;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .login-footer {
          text-align: center;
          color: #6c757d;
          font-size: 12px;
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 30px 20px;
          }
          
          .logo {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}