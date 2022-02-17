import { FaPizzaSlice, FaBitcoin, FaApplePay, FaCcStripe } from 'react-icons/fa'
import { GiFullPizza, GiPizzaCutter } from 'react-icons/gi'

function Heading({ greeting }) {

  const pizzaStyle = { color: '#a80d27', fontSize: '40px', margin: '0 10px' }
  const payStyle = { color: '#046b2a', fontSize: '40px', margin: '0 10px' }

  return (
    <div className="greeting-div">
      <div>
        <FaPizzaSlice style={pizzaStyle}/>
        <GiPizzaCutter style={pizzaStyle}/>
        <GiFullPizza style={pizzaStyle}/>
      </div>
      <h3>{greeting}</h3>
      <div>
        <FaBitcoin style={payStyle}/>
        <FaApplePay style={payStyle}/>
        <FaCcStripe style={payStyle}/>
      </div>
    </div>
  )
}

export default Heading
