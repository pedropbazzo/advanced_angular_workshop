import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private header: ReplaySubject<string> = new ReplaySubject<string>(11);
    header$ = this.header.asObservable();

    public setHeader(header: string): void {
        this.header.next(header);
    }
}
