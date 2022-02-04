import { useState } from 'react'
import Matrix1 from './Matrix1'

function OrderForm() {
  const [submitted, setSubmitted] = useState(false)

  const [state, setState] = useState({
    name: "",
    address: "",
    telephone: "",
    email: "",
    crust: "white",
    toppings: [],
    numPizzas: 1
  })

  function handleChange(event) {
    const value = event.target.value
    setState({
      ...state,
      [event.target.name]: value
    })
  }
  

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(submitted => !submitted)
  }

  function handleToppings(e) {
    if(e.target.checked) {
      setState({
        ...state,
        toppings: [...state.toppings, e.target.value]
      })
    } else {
      setState({
        ...state,
        toppings: state.toppings.filter(topping => topping !== e.target.value)
      })
    }  
  }

  return (
    <>
      {!submitted ? 
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Name:</label>
          <input
            required
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />

          <label>Address:</label>
          <input
            required
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />

          <label>Telephone Number:</label>
          <input
            required
            type="tel"
            name="telephone"
            value={state.telephone}
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            required
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <fieldset>
            <legend>
              Crust <em>(Choose one)</em>:
            </legend>

            <label>
              <input
                type="radio"
                name="crust"
                value="white"
                checked={state.crust === 'white'}
                onChange={handleChange}
              />
              Classic White
            </label>

            <label>
              <input
                type="radio"
                name="crust"
                value="multigrain"
                checked={state.crust === 'multigrain'}
                onChange={handleChange}
              />
              Multigrain
            </label>

            <label>
              <input
                type="radio"
                name="crust"
                value='gluten-free'
                checked={state.crust === 'gluten-free'}
                onChange={handleChange}
              />
              Gluten-free
            </label>

            <fieldset>
              <legend>
                Toppings<em>(Choose as many as you wish)</em>:
              </legend>

              <label>
                <input
                  type="checkbox"
                  value="red-sauce"
                  onChange={handleToppings}
                />
                Red sauce
              </label>

              <label>
                <input
                  type="checkbox"
                  value="white-sauce"
                  onChange={handleToppings}
                />
                White sauce
              </label>

              <label>
                <input type="checkbox" value="mozz" onChange={handleToppings} />
                Mozzarella
              </label>

              <label>
                <input
                  type="checkbox"
                  value="mushrooms"
                  onChange={handleToppings}
                />
                Mushrooms
              </label>
            </fieldset>
          </fieldset>
          <fieldset>
            <legend>Number</legend>
            <label className="num-label">
              How many pizzas:
              <select
                name="numPizzas"
                value={state.numPizzas}
                onChange={handleChange}
                className="select"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>
          </fieldset>

          <button>Place My Order</button>
        </fieldset>
      </form>
     : <Matrix1 order={state}/>}
    </>
  )
}

export default OrderForm
