import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphabets]'
})
export class OnlyAlphabetsDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
      const e = <KeyboardEvent>event;
      if (e.key === 'Tab' || e.key === 'TAB') {
        return;
      }
      let k;
      k = event.keyCode;
      if ((k > 64 && k < 91) ||(k > 96 && k < 123) || k === 8) {
        return;
      }
      e.preventDefault();
  }


}
