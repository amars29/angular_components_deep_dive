import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
// implements OnInit, AfterContentInit
export class ControlComponent {
  @Input({ required: true }) label!: string;

  // With ElementRef, you have the  reference of host element of the component. In this case,
  // the host element the app-control component.
  private el = inject(ElementRef);

  // class in host in the component decorator can also be asign like this
  // @HostBinding('class') className = 'control';

  // For events
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }

  // ContentChild: It is used to get the reference of the element that is projected inside the component.
  // In this case, the input element that is projected inside the app-control component. we have to
  // reference #input to the elements (see new-ticket.component.html)
  @ContentChild('input') control!: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  // ngOnInit() {
  //   console.log('Init');
  //   console.log('Control:', this.control);
  // }

  // ngAfterContentInit() {
  //   console.log('After View Init');
  //   console.log('Control:', this.control);
  // }

  onClick() {
    console.log('Control clicked');
    console.log(this.el);
    console.log(this.control);
  }
}
