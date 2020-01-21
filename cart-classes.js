//const globalGoods = [];

class GoodsItem {
    constructor(index, title = 'Product Name', price = 'Price on request') {
        this.index = index;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item" id="${this.index}">
                    <h3 class="item-title">${this.title}</h3>
                    <div class="item-image"></div>
                    <p class="item-price">Цена: ${this.price}$</p>
                    <span class="add2cart" onclick="addToCart(${this.index})">buy now</span>
                    <!-- <span class="add2cartId">#${this.index}</span> -->
                </div>`;
    }
}
 
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            {
                title: 'Shirt',
                price: 160
            },
            {
                title: 'Socks',
                price: 100
            },
            {
                title: 'Jacket',
                price: 150
            },
            {
                title: 'Shoe',
                price: 120
            },
            {
                title: 'Joe Socks',
                price: 1500,

            },
            {
                title: 'Shoe3',
                price: 65
            }
        ]
        //console.log(this.goods)
    }
    render() {
        //console.log(this.goods);
        let listHtml = '';
        if (this.goods.length) {
            this.goods.forEach((good, index) => {
                const goodItem = new GoodsItem(index, good.title, good.price);
                listHtml += goodItem.render();
            });
        } else {
            console.log("No connection with GB Server");
        }
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    //JS2 - HW2 Part 2: calculate the sum of all goods
    sumGoods() {
        let sum = 0;
        this.goods.forEach(
            (product) => {
                if (isNaN(product.price)) {
                    //continue; //не работает
                } else {
                    sum += product.price;
                }
            });
        document.querySelector('.sum-goods').innerHTML = `Sum of all goods: <strong>${sum}</strong>`;
    }

    //1) Добавить каждому товару EventListener "add to cart" [JS2: 1:41:30 - 1:45:24]
    /*addToCartTriggers() {
        let add2CartBtn = document.getElementsByClassName('add2cart');
        console.log(add2CartBtn);
        for (let i = 0; i < add2CartBtn.length; i++) {
            add2CartBtn[i].addEventListener('click', addToCart);
        }
    }
    */
}

//создать новый элемент корзины
let cart = [];
function addToCart(productIndex) {
    //let newCartItem = {};
    console.log(list.goods[productIndex]);
    console.log(productIndex);
    cart.push(list.goods[productIndex]);
    console.log("Cart: " + cart.join(";"));
    /*globalGoods.forEach((good, index) => {
       if(productIndex == good.id_product) {
           //console.log("Yey! good.id_product: " + good.id_product);
           newCartItem.product_name = good.product_name;
           newCartItem.price = good.price;
           newCartItem.id_product = good.id_product;
           cart.push(newCartItem);
           //console.log(cart);
        }
    });
    */
    
    //display all items in the Cart
    cartInside = "";
    cart.forEach((cartItem, index) => {
        let cartInsideItem = `${cartItem.title} &nbsp; ${cartItem.price} &nbsp; ${productIndex}<br>`;
        cartInside += cartInsideItem;
    });
    document.querySelector('.cart-inside').innerHTML = cartInside;
}

function clearCart() {
    cart = [];
    cartInside = "";
    document.querySelector('.cart-inside').innerHTML = "Your cart is empty";
}

//конструктор для создания новых элементов в корзине
class CartItem {
    constructor(productName, productPrice, productIndex) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productIndex = productIndex;
    }
}

/*
//обьект-класс хронящий массив товаров И считающий их сумму и количество
class Cart {
    constructor(cartProductsList, cartSum, cartQty) {
        this.cartProductsList = cartProductsList; //массив для товаров добавленных в корзину
        this.cartSum = cartSum;
        this.cartQty = cartQty;
    }

    //1) метод чтобы посчитать сумму всех товаров добавленных в корзину
    calcCartSum() {
    }

    //2) метод чтобы посчитать количество всех товаров добавленных в корзину
    calcCartItems() {
        let cartItemsCounter = this.cartProductsList.length;
        console.log(cartItemsCounter);
    }
}
*/


const list = new GoodsList();
console.log(list);
list.fetchGoods();
list.render();
list.sumGoods();
//setTimeout(list.render, 1500);
//setTimeout(list.sumGoods, 1800);
//setTimeout(list.addToCartTriggers, 1000);
