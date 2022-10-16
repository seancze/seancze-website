import { Injectable } from '@angular/core';
import { Project } from './interfaces/project';
import { PROJECTS } from '../assets/data/projects';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  getProjects(): Project[] {
    return PROJECTS;
  }
}
