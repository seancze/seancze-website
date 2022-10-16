import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Project } from '../interfaces/project';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  faYoutube = faYoutube;
  faGithub = faGithub;
  hoveredItems: string[] = [];

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.projects = this.dbService.getProjects();
  }
  addToHoveredItems(name: string) {
    this.hoveredItems.push(name);
  }
}
