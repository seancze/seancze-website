import { Component, OnInit } from '@angular/core';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../interfaces/project';
import { DbService } from '../services/db.service';
import { MagicService } from '../services/magic.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  techStackImages: { [key: string]: string } = {};
  faYoutube = faYoutube;
  faGithub = faGithub;
  faArrowRight = faArrowRight;
  hoveredItems: string[] = [];
  isMagicMode: boolean = false;

  constructor(
    private dbService: DbService,
    private magicService: MagicService
  ) {}

  ngOnInit(): void {
    this.projects = this.dbService.getProjects();
    this.techStackImages = this.dbService.getTechStackImages();
    this.magicService.magicModeChange.subscribe((value) => {
      this.isMagicMode = value;
    });
  }
  addToHoveredItems(name: string) {
    this.hoveredItems.push(name);
  }
}
