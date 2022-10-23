import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  techStackImages: { [key: string]: string } = {};
  hover: number = -1;

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    // deep copy techStackImages before mutation below
    this.techStackImages = JSON.parse(
      JSON.stringify(this.dbService.getTechStackImages())
    );

    for (const key in this.techStackImages) {
      // manually delete skills with no images or poorly formatted images
      if (
        key === 'Wix' ||
        key === 'humanPowered' ||
        key === 'Lucid' ||
        key === 'IBM Watson'
      ) {
        delete this.techStackImages[key];
      }
    }
  }
}
