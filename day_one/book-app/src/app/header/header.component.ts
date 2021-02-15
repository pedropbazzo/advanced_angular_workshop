import {Component, OnInit} from '@angular/core';
import {HeaderService} from "../services/header.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    headerTitle$: Observable<string>;

    constructor(private readonly headerService: HeaderService) {
    }

    ngOnInit(): void {
        this.headerTitle$ = this.headerService.header$;

        this.headerService.setHeader('Cats are cool');
    }

}
