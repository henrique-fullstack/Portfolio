export interface Skill {
  name: string;
  icon?: string; // Armazena o nome do ícone ou a URL da imagem/SVG
  level?: 'beginner' | 'intermediate' | 'advanced'; 
  isCore: boolean; 
  category: 'frontend' | 'backend' | 'tool' | 'database'; 
}