import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../../../pages/login/login';
import { TicketCreationService } from '../../../shared';
import { TicketDashboardPage } from '../ticketdashboard/ticketdashboard';

@Component({
  selector: 'page-ticketcreation',
  templateUrl: 'ticketcreation.html'
})
export class TicketCreationPage {

  private userDetails = {};
  private ticket = {
    priority: '',
    severity: '',
    status: '',
    description: '',
    subject: ''
  };

  constructor(private menu: MenuController, public navCtrl: NavController, public ticketCreationService: TicketCreationService) {
    this.userDetails = JSON.parse(localStorage.getItem('currentuser')).user;
    console.log("---->> ", this.userDetails)
  }

  ionViewWillLoad() {
    // this.userDetails = JSON.parse(localStorage.getItem('currentuser')).user;
    // console.log("---->> ", this.userDetails)
  }

  createTicket() {
    var data = {
      "severity": this.ticket.severity,
      "priority": this.ticket.priority,
      "status": "Open",
      "subject": this.ticket.subject,
      "description": this.ticket.description,
      "owner": {
        "id": this.userDetails[0].id
      },
      // "assignto": {
      //     "id": 1,
      //     "username": "useradmin",
      //     "password": "useradmin"
      // }
    }

    this.ticketCreationService.create_tickets(data).subscribe((data) => {
      console.log("------>>> ", data);
      this.navCtrl.push(TicketDashboardPage); 
    });
  }

}
