import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import FirstPage from './pages/firstpage/FirstPage'
import FooterGuide from './components/footerguide/FooterGuide'
import Category from './pages/category/Category'
import FoundAll from './pages/foundall/FoundAll'
import Personal from './pages/personal/Personal'
import Shopping from './pages/shopping/Shopping'
import Search from './pages/search/Search'

export default class App extends React.Component{
  render(){
    return(
      <div>
        {/* <FirstPage></FirstPage> */}
        <BrowserRouter>
          <Switch>
            <Route path='/firstpage' component={FirstPage}></Route>
            <Route path='/category/:id' component={Category}></Route>
            <Route path='/found' component={FoundAll}></Route>
            <Route path='/personal' component={Personal}></Route>
            <Route path='/shopping' component={Shopping}></Route>
            <Route path='/search' component={Search}></Route>
            <Redirect to='/firstpage' from='/'></Redirect>
          </Switch>
          <FooterGuide></FooterGuide>
        </BrowserRouter>
        
      </div>
    )
  }
}
