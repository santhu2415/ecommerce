import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router) { }
    

  callhomepage(){
    console.log('this is call in home page');
    this.router.navigateByUrl('/home')
  }

  callmenspage(){
    console.log('this is call in mens page');
    this.router.navigateByUrl('/mens')
  }
  callgirlspage(){
    console.log('this is call in girls page');
    this.router.navigateByUrl('/girls')
  }
  callkidspage(){
    console.log('this is call in kids page');
    this.router.navigateByUrl('/kids')
  }
  callcartpage(){
    console.log('this is call in cart page');
    this.router.navigateByUrl('/cart')
  }
  ngOnInit(): void {
  }

}
