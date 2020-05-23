import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  kids = [];

  age1to5 ='mothercare';
  age5to10 ='nauti nati';

 products:any;

  

  constructor(private router:Router , private http:HttpClient ) { 
    this.getkidsproducts();
  }
   
   callbuynowfunction(kiditem){
     console.log(JSON.stringify(kiditem)+'this item is added');
   }

    getkidsproducts(){
      this.http.get('http://www.json-generator.com/api/json/get/bPfBcSfWHm?indent=2').subscribe(data=>{
        console.log('this data is coming from api'+data)
        this.products=data;
        this.sortkidsproducts();
      },err=>{
        console.log(err)
      }
      )
    }

     sortkidsproducts() {
       for(let i=0; i<this.products.store_product.length; i++){
         this.kids.push(this.products.store_product[i])
       }
     }
  ngOnInit(): void {
  }


}
