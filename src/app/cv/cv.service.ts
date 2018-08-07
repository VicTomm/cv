import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Person } from "./models/person.model";
import { Works } from './models/work.model';

@Injectable({providedIn: 'root'})
export class CVService{
    private person: Person;
    private works: Array<Works>;
    private workUpdated = new Subject<Works[]>();
    constructor(private http: HttpClient){}

    getPersonInfo(){
        return this.http.get<{ person: Person }>("assets/db/cv.json");
    }

    getWorkInfo(){
        return this.http.get<{ work: Array<Works>}>("assets/db/cv.json")
        .pipe(map((person) => {
            return person.work.map(work => {
                return work
            });
        }))
        .subscribe((work) => {
            this.works = work;
            this.workUpdated.next([...this.works]);
        });
    }

    getWorksUpdateListener() {
        return this.workUpdated.asObservable();
    }

}