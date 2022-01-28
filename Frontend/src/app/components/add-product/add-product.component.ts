import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product = {
    name: '',
    description: '',
    price: '',
    category: '',
    quantity: '',
    pro_picture: ''
  };
  submitted = false;

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      category: this.product.category,
      quantity: this.product.quantity,
      //thumbnail: req.body.thumbnail,
      pro_picture: this.product.pro_picture
    };

    this.productService.create(data)
      .subscribe(response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      description: '',
      price: '',
      category: '',
      quantity: '',
      pro_picture: ''
    };
  }

}
