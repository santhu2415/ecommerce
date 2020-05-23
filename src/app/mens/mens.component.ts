import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit   {
  

  mens =   [];

  myname = 'santhosh';

  mybrothername = 'praveen';

  
 url = 'https://www.w3schools.com/html/';

 products:any;


  constructor(private router:Router ,private http:HttpClient) {

this.getMensProducts();

   }
  callbuynow(mensitem){
    console.log(JSON.stringify(mensitem)+'this item is added');
  }

  getMensProducts() {
    this.http.get('http://www.json-generator.com/api/json/get/bTFRCglHsi?indent=2').subscribe(data=>{
  console.log('this data is coming from api'+data)
 this.products=data;
  this.sortmensproducts();  
  }, err=>{
    console.log(err)
  }

)
  }

  sortmensproducts() {
    for(let i=0; i<this.products.store_product.length; i++) {
      this.mens.push(this.products.store_product[i])
    }
    function getMensProducts() {
      let products = localStorage.getitem('getMensProducts');
      localStorage.setItem('getMensProducts', '1');
    }
  }

  ngOnInit(): void {
  }
//function SaveDataToLocalStorage(data) 
//{
 // var a = [men];
 // a = JSON.parse(localStorage.getItem('session')) ||[men];
 // a.push(data);
 // alert(a);
 // localStorage.setItem('session', JSON.stringify(a));
//}

}



