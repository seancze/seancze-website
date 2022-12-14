import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { PROJECTS } from '../../assets/data/projects';
import { TECH_STACK_IMAGES } from '../../assets/data/tech-stack-images';
import { MISCHIEFS } from '../../assets/data/mischiefs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  getProjects(): Project[] {
    return PROJECTS;
  }

  getTechStackImages(): { [key: string]: string } {
    return TECH_STACK_IMAGES;
  }

  getMischiefs(): Array<object> {
    return MISCHIEFS;
  }
}
