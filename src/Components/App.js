import OrderForm from './OrderForm'
import Heading from './Heading'

function App() {

  const greeting = 'Welcome to Our Very Decent/Pretty Good Pizza'
  const newVariable = 'i am another variable, please pass me with props'

  return (
    <div className="container">
      <Heading greeting={greeting} newVariable={newVariable}/>
      <OrderForm />
    </div>
  )
}

export default App
