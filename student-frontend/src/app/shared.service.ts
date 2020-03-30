import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private showLoader = new Subject<any>();
  updatedShowLoaderSubject$ = this.showLoader.asObservable();
  constructor() { }

  setShowLoaderStatus(status: boolean){
    this.showLoader.next(status);
  }
}
