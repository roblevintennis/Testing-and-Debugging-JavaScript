ShoppingCart = function(products) {
    this.products = products || [];
}

ShoppingCart.prototype = {
    addProduct : function(name) {
	this.products.push(name)
    }
}

