

function Receipt({ order }) {

  const disclaimerStyles = { margin: '10px auto' }
  const receiptStyles = { margin: '15px auto', fontWeight: 'bold', color: 'rgb(11, 63, 19)' }


// key is a special type of prop for if you mapping thru and are rendering multiple elements
  function renderOrder() {
    return Object.entries(order).map(el => {
      if(el[0] === "toppings" && el[1].length > 1){
        return <li key={el[0]}>{el[0]}: {el[1].join(", ").replaceAll("-", " ")}</li>
      } if(el[1].length === 0) {
        return <li key={el[0]}>{el[0]}: none</li>
      }
    return <li key={el[0]}>{el[0]}: {el[1]}</li>
  
  })
  }


  return <div className="receipt">
    <h3 style={receiptStyles}>thank you for your order, please save this receipt for your records</h3>
    <ul>
      {renderOrder()}
      <li>price: ${order.numPizzas * 50} (includes delivery fee)</li>
    </ul>
    <h6 style={disclaimerStyles}>Disclaimer: no pizzas will actually be delivered</h6>
  </div>;
}

export default Receipt;
