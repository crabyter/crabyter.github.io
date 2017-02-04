import { Injectable } from '@angular/core';

import { IProduct } from './product';

@Injectable()
export class ProductService {

    getProducts(): IProduct[] {
        return [
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
            },
            {
                "productId": 5,
                "productName": "蜘蛛蟹",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "蜘蛛蟹,来自朝鲜海域,完全无污染,纯天然绿色食品",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/233087/spidercrab.png"
            }
        ];
    }
}
