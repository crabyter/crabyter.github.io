import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = '产品列表';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '蜘蛛';
    products: any[] = [
        {
            "productId": 5,
            "productName": "蜘蛛蟹",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "蜘蛛蟹,来自朝鲜海域,完全无污染,纯天然绿色食品",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/233087/spidercrab.png"
        },
        {
            "productId": 8,
            "productName": "寄生蟹",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "寄生蟹,来自各国海域,随机发货,高度观赏性",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/105247/hermitcrab.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
