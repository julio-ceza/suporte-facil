export const metadata = {
  title: 'Suporte Fácil - Sistema de Chamados',
  description: 'Sistema de gerenciamento de chamados de suporte técnico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}