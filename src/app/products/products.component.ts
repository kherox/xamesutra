import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  currentAppName: String = 'Les Offres';

  constructor(private router: Router) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name': new FormControl(null),
      'categories': new FormControl(null),
      'reduce': new FormControl(null),
      'price': new FormControl(null),
      'description': new FormControl(null),
      'img_url': new FormControl(null),
      'start': new FormControl(null),
      'stop': new FormControl(null)
    }
  );
  }
  AddProduct() {
   this.router.navigate(['/add-product']);
  }

}
