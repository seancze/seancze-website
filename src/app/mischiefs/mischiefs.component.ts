import { Component, OnInit } from "@angular/core";
import { Project } from "../interfaces/project";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-mischiefs",
  templateUrl: "./mischiefs.component.html",
  styleUrls: ["./mischiefs.component.scss"],
})
export class MischiefsComponent implements OnInit {
  projects: Project[] = [];
  mischiefs: Array<object> = [];
  mobile: boolean = false;

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.projects = this.dbService.getProjects();
    this.mischiefs = this.dbService.getMischiefs();

    if (window.screen.width <= 640) {
      this.mobile = true;
    }
  }
}
