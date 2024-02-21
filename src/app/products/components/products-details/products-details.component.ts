import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
id:any;
data:any = {};
loading : boolean = false;
showSpinner: boolean = true; // Initially show the spinner

constructor(private route:ActivatedRoute ,private servise:ProductsService){
  this.id = this.route.snapshot.paramMap.get("id")
  console.log(this.id)
}
ngOnInit(): void {
    this.getproduct()
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
}
getproduct(){
  this.loading =true;
  this.servise.getproductsbyid(this.id).subscribe(res =>{
    this.data= res
    this.loading=false;
  }, error=>{
    this.loading=false;
    alert(error.message)

  })
  this.showSpinner = false;
}
}
