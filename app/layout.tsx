import './globals.css' // Certifique-se de que o Tailwind está importado aqui
import { ThemeProvider } from '../src/components/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Adicionamos 'suppressHydrationWarning' porque o next-themes modifica a tag <html>
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class" // Essencial para o Tailwind dark: funcionar
          defaultTheme="system" // Começa com o tema do PC do usuário
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}