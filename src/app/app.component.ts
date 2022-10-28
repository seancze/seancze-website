import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faAddressCard,
  faFolderOpen,
  faHatWizard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { MagicService } from './services/magic.service';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sean-chen';
  toggleControl = new FormControl(false);
  faHatWizard = faHatWizard;
  faFolderOpen = faFolderOpen;
  faAddressCard = faAddressCard;
  faHome = faHome;
  mobile: boolean = false;
  isMagicMode: boolean = false;
  isTypewriterDone: boolean = false;

  constructor(private magicService: MagicService) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(() => {
      this.magicService.toggleMagicMode();
    });

    this.magicService.magicModeChange.subscribe((value) => {
      this.isMagicMode = value;
    });

    if (window.screen.width <= 640) {
      this.mobile = true;
    }

    this.magicService.magicModeChange.subscribe((value) => {
      if (value) {
        var typewriter = new Typewriter('#magic-typewriter');
        typewriter
          .typeString('I solemnly swear that I am up to no good...')
          .callFunction(() => {
            this.isTypewriterDone = true;
          })
          .start();
        console.log({ typewriter });
      }

      this.isMagicMode = value;
    });
  }

  // ARCHIVED: generate custom cursor
  // cursorRounded: any;
  // constructor(private el: ElementRef) {}
  // ngOnInit() {
  //   this.cursorRounded = this.el.nativeElement.querySelector(`.rounded`);
  // }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e: any) {
  //   this.moveCursor(e);
  // }

  // moveCursor = (e: any) => {
  //   const mouseY = e.clientY;
  //   const mouseX = e.clientX;

  //   this.cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  // };
}
