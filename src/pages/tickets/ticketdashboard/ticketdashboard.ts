import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../../pages/login/login';
import { TicketCreationService } from '../../../shared';
import { TicketDetailsPage } from '../ticketdetails/ticketdetails';

@Component({
  selector: 'page-ticketdashboard',
  templateUrl: 'ticketdashboard.html'
})
export class TicketDashboardPage {

  private allTickets : {};
  private allTicketsToFilter: {};

  constructor(public navCtrl: NavController, public ticketCreationService: TicketCreationService) {
    this.getAllTickets();
  }

  getAllTickets(){
    this.ticketCreationService.get_all_tickets().subscribe((data) => {
      this.allTickets = data;
      this.allTicketsToFilter = data;
    });
  }

  filterTicket(ev: any){

    this.allTickets = this.allTicketsToFilter;
  
      let val = ev.target.value;
  
      if (val && val.trim() != '') {
        this.allTickets = Object(this.allTickets).filter((item) => {
          return (item.subject.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
  }

  openTicket(id) {
    this.navCtrl.push(TicketDetailsPage, {
      id: id
    })
  }
}
