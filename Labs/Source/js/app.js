(function(){
    var app = angular.module('store',[]);
    app.controller('storeController', function(){
        this.products = gems;
    });
    var gems =[
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'this is the best',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'pentagonal gem',
            price: 5.95,
            description: 'this is the best',
            canPurchase: true,
            soldOut: false
        },
        
    ]; 
})();

