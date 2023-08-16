import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map } from 'rxjs';
import { productType } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {

  whishlist:any= {}
  constructor(private toaster:ToastrService) { }


  addProductToWhishlist(product: productType) {
    const id = product.id.toString()

    if(!this.whishlist[id]){
      this.whishlist[id] = product
    }else{
      delete this.whishlist[id]
    }

    this.toaster.success('your item has been added','Done')
  }


  deleteProductFromWhishlist(id:string){
    delete this.whishlist[id]
  }


  getWhishlistSize():boolean{
    const totalLength =  Object.keys(this.whishlist).length
    if(totalLength > 0){
      return true
    }else{
      return false
    }
  }

  getKeysForLoop(){
    return Object.keys(this.whishlist)
  }

}
