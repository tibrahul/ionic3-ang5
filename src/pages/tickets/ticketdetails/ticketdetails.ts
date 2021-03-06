import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../../pages/login/login';
import { TicketCreationService } from '../../../shared';
import { LoadingController } from 'ionic-angular';

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
    "assigntofk": null,
    "assignto" :{
      "id": null,
      "password": "",
      "username": ""
    },
    "owner" :{
      "id": null,
      "password": "",
      "username": ""
    }
  };

  constructor(public navParams: NavParams, public navCtrl: NavController,
     public ticketCreationService: TicketCreationService,public loadingController:LoadingController) {
    console.log(this.navParams.get('id'));
    var id = this.navParams.get('id');
    
    this.getTicketDetails(id);
  }

  getTicketDetails(id) {
    let loading = this.loadingController.create({content : "Getting ticket details"});
    loading.present();
    this.ticketCreationService.get_ticket_byID(id).subscribe((data) => {
      console.log("------>>> ", data);

      this.ticketDetails = data;
      console.log("--->> ", this.ticketDetails)
      loading.dismissAll();
    });
  }

}
