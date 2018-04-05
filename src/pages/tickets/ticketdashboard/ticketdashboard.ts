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
    var user = JSON.parse(localStorage.getItem('currentuser')).user;
    var userRole = user[0].Authorities[0].role;
    var uid = user[0].id;
    console.log("--->> uid ", uid)
    console.log("--->> userRole ", userRole)

    if(userRole === "ROLE_USER") {
      this.getTicketByUser(uid);
    } else {
      this.getAllTickets();
    }
  }

  getTicketByUser(uid) {
    this.ticketCreationService.get_tickets_byUserID(uid).subscribe((data) => {
      this.allTickets = data;
      this.allTicketsToFilter = data;
    });
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
