export interface ContactChannel {
  name: string;
  label: string; // Ex: "@seu_usuario" ou "Chamar no Whats"
  url: string;
  icon: string; // Nome do ícone do react-icons (Fi ou Si)
  isPrimary: boolean; // Para destacar os canais principais (ex: LinkedIn/E-mail)
}