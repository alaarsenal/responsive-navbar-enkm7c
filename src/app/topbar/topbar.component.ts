import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) {}


  ngOnInit() {
  }
log(){
}
 home(){
  
 }
 logout(){

}
}