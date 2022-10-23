import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MagicService {
  isMagicMode: boolean = false;

  magicModeChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.magicModeChange.subscribe((value) => {
      this.isMagicMode = value;
    });
  }

  toggleMagicMode() {
    this.magicModeChange.next(!this.isMagicMode);
  }
}
