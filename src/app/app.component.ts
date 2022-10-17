import {
  Component,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faHatWizard,
  faFolderOpen,
  faAddressCard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

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

  @HostBinding('class') className = '';

  constructor() {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
    });

    if (window.screen.width <= 640) {
      this.mobile = true;
    }
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
