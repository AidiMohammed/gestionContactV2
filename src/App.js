import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Components/navbar/Navbar';
import Contacts from './Components/contacts/Contacts';
import PageNotFound from './Components/pages/PageNotFound';
import About from './Components/pages/About';
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact'
import {Provider} from "react-redux"
import store from "./store"

import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Provider store = {store}>
        <Router>
          <Navbar titel = "Dashboard Client"/>
          <Switch>
            <Route exact path = "/" component = {Contacts}/>
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/contact/add" component = {AddContact}/> 
            <Route exact path = "/contact/edit/:id" component = {EditContact}/> 
            <Route component = {PageNotFound}/>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
