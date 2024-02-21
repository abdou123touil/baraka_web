import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dark_modeService } from '../../../dark_mode/dark_mode.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
@Input() data:any = {};
@Output() item=new EventEmitter();
addbutton:boolean =false;
amount:number = 0
  constructor( public dark_modeService: dark_modeService){}
ngOnInit(): void {

}
isDarkModeEnabled(): boolean {
  return this.dark_modeService.isDarkModeEnabled();
}
add(){
 this.item.emit({item :this.data , quantity:this.amount})
}

}
