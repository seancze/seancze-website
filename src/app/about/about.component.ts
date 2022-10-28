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
    const defaultTypewriterStrings: string[] = [
      'Hi, I am...',
      'Define...',
      'What is a...',
      'Nice to meet you! My name is...',
    ];
    new Typewriter('#typewriter', {
      strings: defaultTypewriterStrings,
      autoStart: true,
      loop: true,
    });

    this.magicService.magicModeChange.subscribe((value) => {
      this.isMagicMode = value;
      let typewriterStrings: string[] = defaultTypewriterStrings;
      let delay: any = 'natural';
      let deleteSpeed: any = 'natural';

      if (this.isMagicMode) {
        typewriterStrings = [
          'It does not do to dwell on dreams and forget to live.',
          'We must all face the choice between what is right, and what is easy.',
          'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.',
        ];
        delay = 50;
        deleteSpeed = 1;
      }
      new Typewriter('#typewriter', {
        strings: typewriterStrings,
        autoStart: true,
        delay: delay,
        deleteSpeed: deleteSpeed,
        loop: true,
      });
    });
  }
}
