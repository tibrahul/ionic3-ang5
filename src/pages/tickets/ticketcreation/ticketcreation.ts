import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
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

  constructor(
    private menu: MenuController, 
    private alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public ticketCreationService: TicketCreationService
  ) {
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
      if(data.id) {
        this.presentAlert('Ticket created successfully!'+'<br>'+'Your Ticket ID:'+data.id); 
      }
    });
  }

  goToDashboard() {
    this.navCtrl.push(TicketDashboardPage);
  }

  presentAlert(message: string): void { 
    let alert = this.alertCtrl.create({ 
      title: 'Information', 
      message: message, 
      buttons: [{
        text: 'OK',
        handler: data => {
          this.ticket = {
            priority: '',
            severity: '',
            status: '',
            description: '',
            subject: ''
          }
        }
      }] 
    });
    alert.present(); 
  } 

}
