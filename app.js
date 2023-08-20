const iceCreams = [
  {
    name: 'Vanilla',
    price: 1.25,
    quantity: 0
  },
  {
    name: 'Chocolate',
    price: 1,
    quantity: 0
  },
  {
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
  }]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Gummy Worms',
  price: .5,
  quantity: 0
}]

console.log('I Scream')

function orderVanilla() {
  // console.log('ordering vanilla')
  let Vanilla = iceCreams.find(cream => cream.name == 'Vanilla')
  Vanilla.quantity++
  console.log('buying vanilla', Vanilla)
  drawCart()
  // drawTotal()
}

function orderChocolate() {
  // console.log('ordering chocolate')
  let Chocolate = iceCreams.find(cream => cream.name == 'Chocolate')
  Chocolate.quantity++
  console.log('buying chocolate', Chocolate)
  drawCart()
  // drawTotal()
}

function orderStrawberry() {
  // console.log('ordering Strawberry')
  let Strawberry = iceCreams.find(cream => cream.name == 'Strawberry')
  Strawberry.quantity++
  console.log('buying Strawberry', Strawberry)
  drawCart()
  // drawTotal()

}

// function drawCart() {
//   let cost = 0
//   iceCreams.forEach(cream => {
//     if (cream.quantity > 0) {
//       cost +=
//     }
//     console.log(cost)
//   })
// }

function drawCart() {
  let template = ''
  iceCreams.forEach(cream => {
    if (cream.quantity > 0) {
      template += cream.quantity * cream.price
    }
  })
  let cartElm = document.getElementById('cart')
  cartElm.innerHTML = template
}



// function drawTotal() {
//   let subtotal = ''
//   iceCreams.forEach(cream => {
//     if (cream.quantity > 0) {
//       subtotal += cream.quantity * cream.price
//     }
//   })
//   let totalElm = document.getElementById('total')
//   totalElm.innerHTML = subtotal
// }
