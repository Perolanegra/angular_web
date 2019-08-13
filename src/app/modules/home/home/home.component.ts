import { OnInit, Component } from '@angular/core';
import { AppController } from '../../core/appController';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    constructor(public appController: AppController) {}
    
    ngOnInit(): void {
        console.log('HomeComponent Works!');
    }
}