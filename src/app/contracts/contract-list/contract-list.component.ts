import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
 
  listHidden : Boolean = false;

  contracts =  ["1","2","3","4"];

  constructor() { }

  ngOnInit() {
  }

  load(){
    this.listHidden = !this.listHidden;
  }

}
