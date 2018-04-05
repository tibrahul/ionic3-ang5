import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './index';
import { SharedService } from '../shared.service'

@Injectable()
export class TicketCreationService {
    public selected_id: number;
    constructor(private apiService: ApiService, private SharedService: SharedService) { }

    create_tickets(ticketdetails): Observable<any> {
        return this.apiService.post(this.SharedService.baseUrl + `/api/ticketsystem/createticket`, ticketdetails);
    }

    get_all_tickets(): Observable<any> {
        return this.apiService.get(this.SharedService.baseUrl + `/api/ticketsystem/getalltickets`);
    }

    get_tickets_byUserID(uid): Observable<any> {
        return this.apiService.get(this.SharedService.baseUrl + `/api/ticketsystem/getticketsByUserId/`+uid);
    }

    get_ticket_byID(id): Observable<any> {
        return this.apiService.get(this.SharedService.baseUrl + `/api/ticketsystem/getbyticketByid/`+id);
    }

    get_assigned_ticket(uid): Observable<any> {
        return this.apiService.get(this.SharedService.baseUrl + `/api/ticketsystem/getticketsByAssigntoId/`+uid);
    }

}