import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Booked from './Pages/Booked'
import BookOnline from './Pages/BookOnline'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Info from './Pages/Info'
import PlanAndPricing from './Pages/PlanAndPricing'
import Schedule from './Pages/Schedule'
import SinglePlan from './Pages/SinglePlan'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/bookOnline">
          <BookOnline />
        </Route>
        <Route path="/plans">
          <PlanAndPricing />
        </Route>
        <Route path="/schedule/:id">
          <Schedule />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/Booked">
          <Booked />
        </Route>
        <Route path="/plan/:id">
          <SinglePlan />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
