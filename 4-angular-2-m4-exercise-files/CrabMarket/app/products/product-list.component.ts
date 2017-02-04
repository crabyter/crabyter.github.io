import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = '产品列表';
     products: any[] = [
         {
        "productId": 1,
        "productName": "帝王蟹",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "帝王蟹,来自阿拉斯加",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/263381/kingcrab.png"
    },
    {
        "productId": 2,
        "productName": "招潮蟹",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "招潮蟹,小孩宠物,来自舟山群岛",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/261879/filddercrab.png"
    }
    ];
}
