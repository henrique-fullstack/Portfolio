export interface Skill {
  name: string;
  icon?: string; 
  level?: 'beginner' | 'intermediate' | 'advanced'; 
  isCore: boolean; 
  category: 'frontend' | 'backend' | 'tool' | 'database'; 
}