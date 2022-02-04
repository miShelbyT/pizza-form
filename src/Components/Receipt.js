

function Receipt({ order }) {

// key is a special type of prop for if you mapping thru and are rendering multiple elements
  function renderOrder() {
    return Object.entries(order).map(el => {
      if(el[0] === "toppings" && el[1].length > 1){
        return <li key={el[0]}>{el[0]}: {el[1].join(", ")}</li>
      } if(el[1].length === 0) {
        return <li key={el[0]}>{el[0]}: none</li>
      }
    return <li key={el[0]}>{el[0]}: {el[1]}</li>
  
  })
  }


  return <div className="receipt">
    <h3>{order.name}, we hope you'll enjoy your pizza! Please save this receipt for your records.</h3>
    <ul>
      {renderOrder()}
      <li>price: ${order.numPizzas * 50} (includes delivery fee)</li>
    </ul>
  </div>;
}

export default Receipt;
