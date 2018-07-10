import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {
 
  depositForm : FormGroup;
  userModel   : User;
  hiddenForm  : Boolean = false;

  /**
   *  _id   = db.ObjectIdField()
    amount = db.FloatField()
    wallet = db.ReferenceField(Wallet)
    created = db.DateTimeField()
    last_deposit_id = db.StringField()
   */

  constructor() { }

  ngOnInit() {
    this.depositForm = new FormGroup({
      "amount"          : new FormControl(null,[Validators.required,Validators.min(3)]),
      "wallet"          : new FormControl(null),
      "last_deposit_id" : new FormControl(null)
    })
  }

  createDeposit(){
    this.hiddenForm = !this.hiddenForm;
  }
  closeForm() { this.hiddenForm = !this.hiddenForm;}

}
