
describe 'ShoppingCart'
    before
	cart = new ShoppingCart
    end
    describe 'constructor'
	it 'should accept products array'
	    cart = new ShoppingCart(["Banana", "Peach"])
	    cart.should.have 2, 'products'
	end
    end

    describe '.addProduct()'
	it 'should add a product'
	    cart.should.have 0, 'products'
	    cart.addProduct('Apple')
	    cart.should.have 1, 'products'
	end
    end
end
