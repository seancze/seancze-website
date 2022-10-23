import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { MagicService } from '../services/magic.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public typewriterText: string = 'Thank you for your interest';
  public typewriterDisplay: string = '';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  isMagicMode: boolean = false;

  constructor(private magicService: MagicService) {}

  ngOnInit(): void {
    new Typewriter('#typewriter', {
      strings: [
        'Hi, I am...',
        'Define...',
        'What is a...',
        'Nice to meet you! My name is...',
      ],
      autoStart: true,
      loop: true,
    });
    this.magicService.magicModeChange.subscribe((value) => {
      this.isMagicMode = value;
    });
  }
}
