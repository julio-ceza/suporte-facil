export const metadata = {
  title: 'Login - Suporte Fácil',
  description: 'Acesso do agente ao sistema Suporte Fácil',
};

export default function LoginLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}