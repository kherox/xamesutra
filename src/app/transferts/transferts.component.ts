import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferts',
  templateUrl: './transferts.component.html',
  styleUrls: ['./transferts.component.css']
})
export class TransfertsComponent implements OnInit {
  hiddenPanel : Boolean = false;
  up          : Boolean = false;
  down        : Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  upAmount(){
    this.hiddenPanel = !this.hiddenPanel;
    this.up = true;
    this.down = false;
  }
  downAmount(){
    this.hiddenPanel = !this.hiddenPanel;
    this.down = true;
   this.up   = false;
  }

  upAmountHidden() {
    this.up = true;
    this.down = false;
  }
  downAmountHidden() {
    this.down = true;
    this.up = false;
  }
  close() { this.hiddenPanel = !this.hiddenPanel;}

}
