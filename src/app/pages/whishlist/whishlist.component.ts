import { Component, OnInit } from '@angular/core';
import { WishlistServiceService } from 'src/app/Services/whishlist/wishlist-service.service';
import { productType } from 'src/app/shared/types';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {
  whishlist:any= {}
  loopedWhishlist:any

  constructor(private whishlistService:WishlistServiceService){}


  ngOnInit(): void {
    this.whishlist = this.whishlistService.whishlist
    this.loopedWhishlist = this.whishlistService.getKeysForLoop()
  }


  addToWhishlist(product:productType){
    this.whishlistService.addProductToWhishlist(product)
    this.whishlist = this.whishlistService.whishlist
  }

  onDeleteProductFromWhishlist(id:string){
    this.whishlistService.deleteProductFromWhishlist(id)
    this.whishlist = this.whishlistService.whishlist
    this.loopedWhishlist = this.whishlistService.getKeysForLoop()
  }
}
