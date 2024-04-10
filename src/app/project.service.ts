import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: Project[] = [
    {
      id : 'gameoflife',
      name : 'Game of Life ',
      description : 'The Game of Life is a cellular automaton, come fill some cell and see what happens next.',
      url : 'https://baptistevolle.github.io/gameoflife/',
    },

    {
      id : 'worldmap',
      name : 'Interactive World Map',
      description : 'An interactive world map where you can display country by color based on differents data, and also display multiple information on country selection',
      url: 'https://baptistevolle.github.io/worldmap/',
    },
    {
      id : 'nonogram',
      name : 'A nonogram game',
      description : 'A little nonogram game allowing the users to generate random grid and try to solve them as fast as possible',
      url: 'https://baptistevolle.github.io/nonogram/',
    },
  ]
  
  getAllProjects(): Project[] {
    return this.projectList;
  }

  constructor() { }

}
