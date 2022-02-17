import OrderForm from './OrderForm'
import Heading from './Heading'

function App() {

  const greeting = 'Welcome to Our Very Decent/Pretty Good Pizza'
  

  return (
    <div className="container">
      <Heading greeting={greeting}/>
      <OrderForm />
    </div>
  )
}

export default App
