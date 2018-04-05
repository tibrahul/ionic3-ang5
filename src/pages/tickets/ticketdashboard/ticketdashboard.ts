import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../../pages/login/login';
import { TicketCreationService } from '../../../shared';
import { TicketDetailsPage } from '../ticketdetails/ticketdetails';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-ticketdashboard',
  templateUrl: 'ticketdashboard.html'
})
export class TicketDashboardPage {

  private allTickets : {};
  private allTicketsToFilter: {};

  constructor(public navCtrl: NavController,
     public ticketCreationService: TicketCreationService
     ,public loadingController:LoadingController) {
    var user = JSON.parse(localStorage.getItem('currentuser')).user;
    var userRole = user[0].Authorities[0].role;
    var uid = user[0].id;
    console.log("--->> uid ", uid)
    console.log("--->> userRole ", userRole)

    if(userRole === "ROLE_USER") {
      this.getTicketByUser(uid);
    } else if(userRole === "ROLE_TM" ) {
      this.getAssignedTicketByUser(uid);
    } else {
      this.getAllTickets();
    }
  }

  getAssignedTicketByUser(uid) {
    let loading = this.loadingController.create({content : "Getting Tickets Assigned To User"});
    loading.present();
    this.ticketCreationService.get_assigned_ticket(uid).subscribe((data) => {
      this.allTickets = data;
      this.allTicketsToFilter = data;
      loading.dismissAll();
    });
  }

  getTicketByUser(uid) {
    let loading = this.loadingController.create({content : "Getting User's Ticket"});
    loading.present();
    this.ticketCreationService.get_tickets_byUserID(uid).subscribe((data) => {
      this.allTickets = data;
      this.allTicketsToFilter = data;
      loading.dismissAll();
    });
  }

  getAllTickets(){
    let loading = this.loadingController.create({content : "Getting All Ticket"});
    loading.present();
    this.ticketCreationService.get_all_tickets().subscribe((data) => {
      this.allTickets = data;
      this.allTicketsToFilter = data;
      loading.dismissAll();
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
