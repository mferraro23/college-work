let newSum = 0;
let cartList = [];
function getCart(){
    let myCartPrice = newSum;
    let myCart = cartList;
    console.log(myCartPrice);


}
function createCart(sum, infoList){
    for (let i=0; i<infoList.length; i++){
        cartList.push(infoList[i]);
    }
    newSum+=sum;
}