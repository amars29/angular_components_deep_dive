import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})

// implements  OnInit, AfterViewInit
export class NewTicketComponent {
  @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  // private form!: viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() add = new EventEmitter<{ title: string; text: string }>();

  // // Uncomment the below code if you want to see the lifecycle hooks in action and
  // // want to see how form is being initialized and accessed in the lifecycle hooks
  // ngOnInit(): void {
  //   console.log('Init');
  //   console.log('Form:', this.form?.nativeElement);
  // }

  // ngAfterViewInit(): void {
  //   console.log('After View Init');
  //   console.log('Form:', this.form?.nativeElement);
  // }
  // //the lifecycle hooks ends here

  onSubmit(title: string, text: string) {
    // console.log('Form submitted');
    // console.log('Title:', title);
    // console.log('text:', text);
    this.add.emit({ title, text });
    this.form?.nativeElement.reset();
  }
}
