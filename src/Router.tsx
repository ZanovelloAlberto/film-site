
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Movies from './pages/Blog'
import SignIn from "./pages/SignIn";



import Land from "./pages/Land";

import { useAuthState } from "react-firebase-hooks/auth";

import ReactHome from "./pages/ReactHome";
import TopBar from "./components/TopBar";
import { auth } from "./utils/mybase";

import AddMovie from "./pages/AddMovie";


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

  console.log(user ? "true" : "false")
  return (


      <div> 
            
        {user ?
         (<Logged />)
        :
        <Land />
      }
      </div>



  );
}

const Logged = () => {
  
  return (



    <Router basename="/film-site">

      <Route>
      <TopBar/>
      </Route>
      
    <Switch>
      <Route path="/Movies">

        <Movies  />
      </Route>

      <Route path="/signIn">
        <SignIn />
      </Route>

      <Route path="/about">
        {/* <About /> */}
      </Route>

      <Route path="/add">
        <AddMovie/>
      </Route>

      <Route>
        <ReactHome/>
      </Route>
    </Switch>


    </Router>




  )
}

