export interface Skill {
  name: string;
  icon?: string;  
  isCore: boolean; 
  category: 'frontend' | 'backend' | 'tool' | 'database'; 
}