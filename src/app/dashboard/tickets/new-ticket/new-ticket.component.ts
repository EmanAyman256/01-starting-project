import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { Ticket } from '../ticket.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
   @ViewChild('form') form?:ElementRef<HTMLFormElement>
   @Output() add=new EventEmitter<{title:string,req:string}>()

  onSubmit(title:string,text:string)
  {
  console.log(title);
  console.log(text);
    this.add.emit({title:title,req:text});
    this.form?.nativeElement.reset();
  }
 

}
