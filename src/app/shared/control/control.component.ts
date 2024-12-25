import {
  Component,
  HostBinding,
  HostListener,
  Input,
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
    // '(click)': 'onClick()',
  },
})
export class ControlComponent {
  @Input({ required: true }) label!: string;

  // class in host in the component decorator can also be asign like this
  // @HostBinding('class') className = 'control';

  // For events
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }

  // onClick() {
  //   console.log('Control clicked');
  // }
}
