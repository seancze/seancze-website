import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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

  constructor() {}

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
  }
}
