
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  StaticRouter,
  
} from "react-router-dom";
import Movies from './pages/Blog'
import SignIn from "./pages/SignIn";



import Land from "./pages/Land";

import { useAuthState } from "react-firebase-hooks/auth";

import ReactHome from "./pages/ReactHome";
import TopBar from "./components/TopBar";
import { auth } from "./utils/mybase";

import AddMovie from "./pages/AddMovie";
import About from "./pages/About";
import Movie from "./pages/Movie";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// } else {
//   firebase.app(); // if already initialized, use that one
// }



export default function Hub() {

  


  

  const [user] = useAuthState(auth);

  var uno = user
  return (


      <div> 
            
        {!uno ?<Land />:<Logged />}

      </div>



  );
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


      <Route>
        <ReactHome/>
      </Route>
    </Switch>


    </HashRouter>




  )
}

