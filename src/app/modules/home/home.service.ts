import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class HomeService {

    private endpoint: string = environment.host_rest_server + 'home';
    
    constructor(private http: HttpClient) { } // RestService
}