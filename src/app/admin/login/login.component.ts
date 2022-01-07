import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtToken } from '../model/JwtToken';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  token:JwtToken = new JwtToken("");

  constructor(private inventoryService:InventoryService, private router:Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl("",[
        Validators.required
      ])
    });
  }

  
  ngOnInit(): void {
  }

  authenticateUser(){
    this.inventoryService.authenticateUser(this.loginForm.value).subscribe((res:any)=>{
      this.token = res;
      console.log(this.token.token)
      
    })
    if(this.token.token != null){
      localStorage.setItem('token',this.token.token)
      this.router.navigateByUrl('/admin/flightlisting');
    }else{
      this.inventoryService.showErrorNotification("Username or password is not valid","Invalid credentials")
    }
    
  }

}
