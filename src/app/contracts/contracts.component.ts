import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { Entities } from '../shared/entitie.model';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  contractForm : FormGroup;
  categories = ["Entreprise","Personnal"];
  entities  : Entities[];

  constructor(private _service : AppService) { }

  ngOnInit() {
    this._service.getEntitiesList().subscribe(
      (response) => {
        this.entities = response;
      }
    )
    this.contractForm = new FormGroup({
      'name'        : new FormControl(null),
      'end'         : new FormControl(null),
      'amount'      : new FormControl(null),
      'referer'     : new FormControl(null),
      'categories'  : new FormControl(null),
      'description' : new FormControl(null)
    });

  }

  createContract(){
    console.log(this.contractForm.value)
  }

}
