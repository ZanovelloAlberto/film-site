import { Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { dbMovie, Film, Now } from "../../utils/mybase"

// const getMovie = ()=>{

// const docRef = doc("cities", "SF");
// getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
// }
type DocPromise = Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>>

const Confirm = (prop:{val:Film})=>{
    
    useEffect(() => {
        var a = prop.val
        a.date = Now()
        dbMovie.add(a).then((v)=>Setsetter("result"),(e)=>Setsetter("error"))

    }, [])
    


    const Error = () => (<p></p>)

    const Result = () => (
        <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Movie have been added.
        </Typography>
        <Typography variant="subtitle1">
          Your Movie number is #2001539. 
          We added your movie,and it will be avalible 
          clicking the following link <br></br>
          <Link to="/#/Movie"> Here </Link>
        </Typography>
    </React.Fragment>
    )
    
    const [setter, Setsetter] = useState("load")

    var View = () => (<p> Caricando</p>)
    switch(setter){
        case "error":
            View = Error
            break
        
        case "result":
            View = Result
            break
    }



    return(
        <View/>
    )




}

export default Confirm