import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../../pages/login/login';
import { TicketCreationService } from '../../../shared';

@Component({
  selector: 'page-ticketdetails',
  templateUrl: 'ticketdetails.html'
})
export class TicketDetailsPage {

  private ticketDetails = { 
    "id": 0, 
    "severity": "", 
    "priority": "", 
    "status": "", 
    "subject": "", 
    "description": "", 
    "timeofcreation": "", 
    "timeofassign": "", 
    "UserId": null, 
    "ownerfk": null, 
    "assigntofk": null 
  };

  constructor(public navParams: NavParams, public navCtrl: NavController, public ticketCreationService: TicketCreationService) {
    console.log(this.navParams.get('id'));
    var id = this.navParams.get('id');
    this.getTicketDetails(id);
  }

  getTicketDetails(id) {
    this.ticketCreationService.get_ticket_byID(id).subscribe((data) => {
      console.log("------>>> ", data);
      this.ticketDetails = data;
      console.log("--->> ", this.ticketDetails)
    });
  }

}
