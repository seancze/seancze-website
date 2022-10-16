import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test-two';

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
