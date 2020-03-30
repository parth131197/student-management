import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'student-frontend';
  showLoader = false;
  private handlerShowLoader: Subscription;
  constructor(private sharedService: SharedService){
    this.subscribeToService();
  }
  ngOnDestroy(): void {
    this.unSubscribeService();
  }
  
  subscribeToService(){
    this.handlerShowLoader = this.sharedService.updatedShowLoaderSubject$.subscribe((status)=>{
      console.log("LOADER STATUS:",status);
      setTimeout(() => {
        this.showLoader = status;
      }, 0);
    });
  }
  unSubscribeService(){
    this.handlerShowLoader.unsubscribe();
  }
}
