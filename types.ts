export interface MenuItem {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  tags: string[];
}

export interface VibeStat {
  label: string;
  value: number;
  color: string;
}

export enum AppSection {
  HOME = 'HOME',
  MENU = 'MENU',
  EVENTS = 'EVENTS',
  ABOUT = 'ABOUT'
}