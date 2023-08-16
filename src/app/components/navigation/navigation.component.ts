import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartServericeService } from './../../Services/carts/cart-serverice.service';
import { Component, OnInit } from '@angular/core';
import {
  NgbDatepickerModule,
  NgbOffcanvas,
  NgbModal,
  NgbNavModule,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { WishlistServiceService } from 'src/app/Services/whishlist/wishlist-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [NgbDatepickerModule,NgbNavModule],
})
export class NavigationComponent implements OnInit {
  active =1
  closeResult = '';
  whishSub!:Subscription
  confirmError = ''
  loginFormGroup!:FormGroup
  registerFormGroup!:FormGroup

  constructor(private modalService: NgbModal,private offcanvasService: NgbOffcanvas,public cartService:CartServericeService,public whishlistService:WishlistServiceService){
  }



  ngOnInit(): void {
    const passwordRgx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    this.loginFormGroup = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    })

    this.registerFormGroup = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(passwordRgx)]),
      confirmPassword: new FormControl('',[Validators.required])
    })
  }

  open(content: any) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {

      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  openModal(content:any) {
    this.registerFormGroup.reset()
    this.loginFormGroup.reset()
		this.modalService.open(content, { size: 'lg' });
	}


  loginInUser(){
    console.log(this.loginFormGroup.value)
    console.log(this.loginFormGroup.errors)
  }

  onRegisterUser(){
    if(!this.confirmPassword()){
     this.confirmError = 'Password Not Match'
    }else{
      this.confirmError = ''
      console.log(this.registerFormGroup.value)
    }
  }


  private confirmPassword():boolean{
    if(this.registerFormGroup.value.confirmPassword !== this.registerFormGroup.value.password){
      return false
    } 
    return true
  }
}
