import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../../app.service';
import { Entities } from '../../shared/entitie.model';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {


  contractForm: FormGroup;
  categories = ["Entreprise", "Personnal"];
  entities: Entities[];

  constructor(private _service: AppService) { }

  ngOnInit() {
    this._service.getEntitiesList().subscribe(
      (response) => {
        this.entities = response;
      }
    )
    this.contractForm = new FormGroup({
      'name': new FormControl(null),
      'end': new FormControl(null),
      'amount': new FormControl(null),
      'referer': new FormControl(null),
      'categories': new FormControl(null),
      'description': new FormControl(null)
    });

  }

  createContract() {
    console.log(this.contractForm.value)
  }


}
