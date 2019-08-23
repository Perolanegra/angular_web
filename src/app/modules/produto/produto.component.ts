import { OnInit, Component } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
    selector: 'app-home',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

    constructor(public appController: AppController) {}

    ngOnInit(): void {
        console.log('ProdutoComponent Works!');
    }
}