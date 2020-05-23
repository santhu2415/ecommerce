import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {

  girls= [];

  age1to10 ='frocks';
 data: any;
  age10to15 ='kurtas';
  itemname: string;
  itemprice: number;
  quantity: string;
  products:any;
  constructor( private router:Router , private http:HttpClient) {
    this.getgirlsproduct();
   }

 
 
	//	function function_one()
	//	{
	//		function_two();
	//		alert("the function called 'function_one' has been called.")
	//	}
	//	function function_two()
	//	{
	//		alert("the function called 'function_two' has been called.")
	//	}
	//	function_one();
 

  callbuynowfunction(girlitem){
    console.log(JSON.stringify(girlitem)+'this item is added ');
  alert("item added successfully")

         
  }  
  //localStorage.setItem("girlitem", JSON.stringify(girlitem)) ;
  //let girldata = JSON.parse(localStorage.getItem('girlitem'))

   //girldata = JSON.stringify(localStorage.getItem('girlitem'));
  //console.log(girldata.name)
//console.log(localStorage.getItem('girlitem'));
 // }

   

  getgirlsproduct(){
    this.http.get('http://www.json-generator.com/api/json/get/cvmyfvHLoy?indent=2').subscribe(data=>{
      console.log('this data is coming from api'+data)
      this.products=data;
      this.sortgirlsproducts();
    },err=>{
      console.log(err)
    }
    )
  }
  sortgirlsproducts(){
    for(let i=0; i<this.products.store_product.length; i++){
      this.girls.push(this.products.store_product[i])
    }
  }
   
  ngOnInit(): void {
  
localStorage.setItem("girl",'girl');
console.log(localStorage.getItem('girl'));



  }
}

	