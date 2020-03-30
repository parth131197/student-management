import { Component, OnInit } from '@angular/core';
import {animate,trigger, state, transition, style, keyframes} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('visibilityChanged',[
      state('shown' , style ({opacity:1})),
      state('hidden', style({opacity:0})),
      transition('* => *', animate('1s')),  
    ]),
    
    trigger('rocketLauncher',[
      state('top' , style({top:'10%',right:'10%' , transform:'rotate(-90deg)'})),
      state('left' , style({top:'10%',right:'80%' , transform:'rotate(-180deg)'})),
      state('bottom' , style({top:'60%',right:'80%',  transform:'rotate(-270deg)'})),
      state('right' , style({top:'60%',right:'10%', transform:'rotate(0deg)'})),
      
      transition('top => left',animate('2s ease-in-out')),
      transition('left => bottom',animate('1.5s ease-in-out')),
      transition('bottom => right',animate('2s ease-in-out')),
      transition('right => top',animate('1.5s ease-in-out'))
    ])
    
  ]
})
export class HomeComponent implements OnInit {
  launcher = 'top';
  constructor(private router:Router) { }

  ngOnInit() {
    this.launcher = 'top';
  }
  ngAfterViewInit() {
    console.log("ngAfterContentInit");
    this.launcher = 'top';
  }
  ngOnDestroy(){
    this.launcher = null;
  }
  launcherAnimationEnd(event){
    // console.log("Event:",event);
    if(event.toState === 'top'){
      this.launcher = 'left';
    }else if(event.toState === 'left'){
      this.launcher = 'bottom';
    }else if( event.toState === 'bottom'){
      this.launcher = 'right';
    }else if(event.toState === 'right'){
      this.launcher = 'top';
    }
  }
  goToStudentsPage(){
    this.router.navigate(['students']);
  }
}
