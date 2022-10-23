import { Component, OnInit } from '@angular/core';
import { MagicService } from '../services/magic.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  isMagicMode: boolean = false;

  constructor(private magicService: MagicService) {}

  ngOnInit(): void {
    this.magicService.magicModeChange.subscribe((value) => {
      this.isMagicMode = value;
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
