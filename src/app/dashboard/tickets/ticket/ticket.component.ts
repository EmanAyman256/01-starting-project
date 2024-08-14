import { Component, Input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  @Input({required:true}) data!:Ticket
  detailVisible=signal(false);
  close=output()

  onToggleDetails()
  {
    this.detailVisible.update((wasVisible)=>!wasVisible)
  }
  onMarkAsCompleted()
  {
    this.close.emit()
  }
}
