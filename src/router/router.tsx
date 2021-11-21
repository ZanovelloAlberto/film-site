import { isAuth } from "../context/firebase/static";
import About from "../pages/about";
import { Login } from "../pages/login";







export default function Hub() {

    return (
        <> 
          {isAuth() ?<About />:<Login />}
        </>
    )
  }
  
  const Logged = () => {
    
    
    return (
        
        
      <HashRouter>

        <Route component={TopBar}/>
  
        
      <Switch>
        <Route path="/Movies" component={Movies}/>
        <Route path="/settings" component={ReactHome}/>
        <Route path="/about" component={About}/>
        <Route path="/addMovie" component={AddMovie}/>
        <Route path="/Movie" component={Movie}/>
        <Route path="/Explore" component={Explore}/>
  
        {/* <Route path="/Movie" >
          <Movie/>
        </Route> */}
  
  
        <Route>
          <Explore/>
        </Route>
      </Switch>
  
  
      </HashRouter>
  
  
  
  
    )
  }