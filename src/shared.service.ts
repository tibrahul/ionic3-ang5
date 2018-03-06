import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://35.171.121.149:8080";
    public browser_language: string;
}