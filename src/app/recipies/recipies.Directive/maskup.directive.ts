import {
  Directive, ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[appMaskup]'
})
export class MaskupDirective {
  private el: NgControl;

  constructor(private ngControl: NgControl, private elref: ElementRef) {
    this.el = ngControl;
  }

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keyup', ['$event.target.value'])
  newColor(value) {

    console.log(value);
    // this.el.control.patchValue(value.replace(/[^0-9]/g, ''));
    this.elref.nativeElement.value = (<HTMLInputElement>event.currentTarget).value.replace(/[^0-9]/g, '');
    // if (value === newValue.match(/'[0-9]'/g) ) {
    // console.log(value);
    // }
  }
}
