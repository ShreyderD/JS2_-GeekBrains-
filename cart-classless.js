let globalGoods = [];

class GoodsItem {
    constructor(id_product = 'xx', product_name = 'Product Name', price = 'Price on request') {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item" id="${this.id_product}">
                    <h3 class="item-title">${this.product_name}</h3>
                    <div class="item-image"></div>
                    <p class="item-price">Цена: ${this.price}$</p>
                    <span class="add2cart">buy now</span>
                    <!-- <span class="add2cartId">#${this.id_product}</span> -->
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.localGoods = [2];
    }
    fetchGoods() {
        this.goods = [
            {
                product_name: 'Shirt',
                price: 160,
                id_product: 0
            },
            {
                product_name: 'Socks',
                price: 100,
                id_product: 1
            },
            {
                product_name: 'Jacket',
                price: 150,
                id_product: 2
            },
            {
                product_name: 'Shoe',
                price: 120,
                id_product: 3
            },
            {
                product_name: 'Joe Socks',
                price: 1500,
                id_product: 4

            },
            {
                product_name: 'Shoe3',
                price: 65,
                id_product: 5
            }
        ];
        globalGoods = globalGoods.concat(this.goods);
    }
    render() {
        let listHtml = '';
        globalGoods.forEach((good) => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    //JS2 - HW2 Part 2: calculate the sum of all goods
    sumGoods() {
        let sum = 0;
        globalGoods.forEach(
            (product) => {
                if (isNaN(product.price)) {
                    //won't be counted;
                } else {
                    sum += product.price;
                }
            });
        document.querySelector('.sum-goods').innerHTML = `Sum of all goods: <strong>${sum}</strong>`;
    }

    //1) Добавить каждому товару EventListener "add to cart" [JS2: 1:41:30 - 1:45:24]
    addToCartTriggers() {
        let add2CartBtn = document.getElementsByClassName('add2cart');
        for (let i = 0; i < add2CartBtn.length; i++) {
            add2CartBtn[i].addEventListener('click', addToCart);
        }
    }

}

//создать новый элемент корзины
let cart = [];

function addToCart(e) {
    let newCartItem = {};
    let target = e.target;
    let productIndex = target.parentNode.getAttribute("id");
    globalGoods.forEach((good, index) => {
        if (productIndex == good.id_product) {
            newCartItem.product_name = good.product_name;
            newCartItem.price = good.price;
            newCartItem.id_product = good.id_product;
            cart.push(newCartItem);
        }
    });

    //display all items in the Cart
    let cartInside = "";
    cart.forEach((cartItem) => {
        let cartInsideItem = `<span class="cart-item-title">${cartItem.product_name}</span> &nbsp; $${cartItem.price}<br>`;
        cartInside += cartInsideItem;
    });
    document.querySelector('.cart-inside').innerHTML = cartInside;
}

function clearCart() {
    cart = [];
    document.querySelector('.cart-inside').innerHTML = "Your cart is empty";
}


const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoods();
list.addToCartTriggers();
