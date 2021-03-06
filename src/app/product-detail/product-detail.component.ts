import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product ;

  constructor( private route: ActivatedRoute, private productService: ProductService ) { }

  ngOnInit(): void {
    const prodId: number = parseInt(this.route.snapshot.params['productId']);
    const tempProduct: Product | undefined = this.productService.getProductById( prodId ) ;

    this.product = (tempProduct == undefined) ? this.productService.getProducts()[0]
                                              : tempProduct ;
  }

}
