import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  ProductAddForm: FormGroup;
  img_url: any = '';

  constructor(private router: Router) {  }

  ngOnInit() {
    this.ProductAddForm =  new FormGroup({
      'name': new FormControl(null),
      'categories': new FormControl(null),
      'reduce': new FormControl(null),
      'price': new FormControl(null),
      'description': new FormControl(null),
      'img_url': new FormControl(null),
      'start': new FormControl(null),
      'stop': new FormControl(null)
    });
  }
  productSubmit() {
    console.log(this.ProductAddForm.value);
  }

  goToPageList() { this.router.navigate(['/product']); }

  LoadImage(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
       this.img_url = e.target.result;
    };
  }

}
