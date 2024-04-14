import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: Project[] = [
   

    {
      id : 'worldmap',
      name : 'Interactive World Map',
      description : 'An interactive world map where you can display country by color based on differents data, and also display multiple information on country selection, Made with Angular V17',
      url: 'https://baptistevolle.github.io/worldmap/',
    },
    {
      id : 'nonogram',
      name : 'A nonogram game',
      description : 'A little nonogram game allowing the users to generate random grid and try to solve them as fast as possible, Made with Angular V17',
      url: 'https://baptistevolle.github.io/nonogram/',
    },
    {
      id : 'city-map',
      name : 'A map of world cities',
      description : 'A map of world cities with more than 100,000 inhabitants. with cursor to show/hide above a certain value, Made with Angular V17',
      url: 'https://baptistevolle.github.io/city-map/',
    },
    {
      id : 'gameoflife',
      name : 'Game of Life ',
      description : 'The Game of Life is a cellular automaton, come fill some cell and see what happens next, Made with Angular V17',
      url : 'https://baptistevolle.github.io/gameoflife/',
    },

  ]
  
  getAllProjects(): Project[] {
    return this.projectList;
  }

  constructor() { }

}
