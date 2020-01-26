//Tasks:
//1) Доделать кнопку удаления товара из корзины
//2) Убрать двойные записи в корзине -> вместо этого сделать прибавление количества товара Q-ty
//3) Выводить сумму товаров всей карзины!
//4) Подцепить каталог товаров из уделенного сервера от GB и добавить "Promise"
//**5) От нечего делать можно еще добавить поле для ввода количества товара на саму карточку товара!

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
                qty: 1,
                id_product: 0
            },
            {
                product_name: 'Socks',
                price: 100,
                qty: 1,
                id_product: 1
            },
            {
                product_name: 'Jacket',
                price: 150,
                qty: 1,
                id_product: 2
            },
            {
                product_name: 'Shoe',
                price: 120,
                qty: 1,
                id_product: 3
            },
            {
                product_name: 'Joe Socks',
                price: 1500,
                qty: 1,
                id_product: 4

            },
            {
                product_name: 'Shoe3',
                price: 65,
                qty: 1,
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
        //document.querySelector('.sum-goods').innerHTML = `Sum of all goods: <strong>${sum}</strong>`;
    }
}

//создать новый элемент корзины
class Basket {
    constructor() {
        this.cart = [];
        this.cartInsideItem = [];
    }
    //1) Добавить каждому товару EventListener "add to cart" [JS2: 1:41:30 - 1:45:24] и clearCart
    init() {
        //addToCartTriggers
        let add2CartBtn = document.getElementsByClassName('add2cart');
        for (let i = 0; i < add2CartBtn.length; i++) {
            add2CartBtn[i].addEventListener('click', (i) => this.addToCart(i));
        }
    }
    deleteItemTriggers() {
        let deleteBtn = document.getElementsByClassName('delete-item');
        //console.log(deleteBtn);
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', (e) => this.deleteCartItem(e));
            //console.log(i);
        }

        //delete all Items
        document.querySelector('.clear-cart').addEventListener('click', () => this.clearCart());
    }

    addToCart(e) {
        let newCartItem = {};
        let target = e.target;
        let productIndex = target.parentNode.getAttribute("id");
        let sameItemFlag = "false";
        console.log("this.cart.length: " + this.cart.length);

        //check if we already have the Product in user's cart - if "yes" -> just increase the q-ty
        for (let i = 0; i < this.cart.length; i++) {
            if (productIndex == this.cart[i].id_product) {
                sameItemFlag = i;
            }
        }

        if (sameItemFlag === "false") {
            console.log("sameItemFlag: " + sameItemFlag);
            //get the Product from catalog and add it to Cart if founded:
            globalGoods.forEach((good, index) => {
                if (productIndex == good.id_product) {
                    newCartItem.product_name = good.product_name;
                    newCartItem.price = good.price;
                    newCartItem.qty = good.qty;
                    newCartItem.id_product = good.id_product;
                    this.cart.push(newCartItem);
                }
            });
        } else {

            this.cart[sameItemFlag].qty += 1;
        }
        this.displayCartItems();

    }
    displayCartItems() {
        if (this.cart.length < 1) {
            document.querySelector('.cart-inside').innerHTML = "Your cart is empty";
        } else {
            //the Cart Products list rendering
            this.cartInsideItem = this.cart
                .map((cartItem) =>
                `<tr>
                <td class="cart-item-title">${cartItem.product_name}</td>
                <td class="cart-item-price">$${cartItem.price}</td>
                <td class="cartTh__qty">${cartItem.qty}</td>
                <td><span class="delete-item" id="${cartItem.id_product}">delete item</span></td></tr>`)
                .join("");

            //header of the Cart Product table + products list "itself"!
            document.querySelector('.cart-inside').innerHTML =
                `<div class="cartTh"><table>
                <tr>
                <th class="cartTh__name">Product Name</th>
                <th class="cartTh__price">Product price</th>
                <th class="cartTh__qty">Q-ty</th>
                <th class="cartTh__action">Action</th>
                </tr>` +
                this.cartInsideItem + 
                "</table></div>";
            this.deleteItemTriggers();
        }
        
        //cart items counter
        document.querySelector('.cart-items-counter').innerHTML = `${this.cart.length} item(s)`;
        this.cartTotal();
    }

    deleteCartItem(e) {
        console.log(e.target);
        let id_product = e.target.getAttribute('id');
        for (let i = 0; i < this.cart.length; i++) {
            if (id_product == this.cart[i].id_product) {
                //console.log("i: " + this.cart[i].id_product);
                //console.log(typeof (this.cart));
                this.cart.splice(i, 1);
            }
        }
        //console.log(this.cart);
        this.displayCartItems();
    }

    clearCart() {
        this.cart = [];
        this.displayCartItems();
    }

    cartTotal() {
        let total = 0;

        this.cart.forEach((item) => {
            total += item.qty * item.price;
        });
        document.querySelector('.cart-total').innerHTML = `<b>Cart total: $${total}</b>`;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoods();
//list.addToCartTriggers();
let basket = new Basket();
basket.init();
