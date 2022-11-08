import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterTypesService {

  private subject:Subject<any> = new Subject();

  sendType(type:String):void{
    this.subject.next({type});
  }

  getType():Observable<any>{
    return this.subject.asObservable();
  }
  constructor() { }
}
