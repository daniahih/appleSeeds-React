 import React, {useState} from "react"
 import Voting from './votingPage'
 import './style.css'
  const users=[
  {
    name: 'Tyler-James',
    password: 'AiHU39s',
    type: 'admin',
    email: 'Tyler-James46@walla.co.il'
  },
  {
    name: 'Kevan',
    password: 'q4KoTQQ',
    type: 'user',
    email: 'Kevan18@aol.com'
  },
  {
    name: 'Aarez',
    password: 'jlesOhE',
    type: 'user',
    email: 'Aarez49@hotmail.com'
  },
  {
    name: 'Salahudin',
    password: '0LEv11L',
    type: 'user',
    email: 'Salahudin28@yahoo.com'
  },
  {
    name: 'Ceejay',
    password: 'Cr6vsXG',
    type: 'user',
    email: 'Ceejay34@walla.co.il'
  },
  {
    name: 'Maisum',
    password: 'IpOODG6',
    type: 'user',
    email: 'Maisum13@yahoo.com'
  },
  {
    name: 'Pawel',
    password: 'BsY5Xfg',
    type: 'user',
    email: 'Pawel31@walla.co.il'
  },
  {
    name: 'Robi',
    password: 'Tf1Xqyt',
    type: 'user',
    email: 'Robi31@gmail.com'
  },
  {
    name: 'Eli',
    password: 'y1JVQus',
    type: 'user',
    email: 'Eli29@gmail.com'
  },
  {
    name: 'Sulayman',
    password: '2IdBBTu',
    type: 'user',
    email: 'Sulayman24@gmail.com'
  },
  {
    name: 'Antoni',
    password: 'zGPE3lk',
    type: 'user',
    email: 'Antoni23@walla.co.il'
  },
  {
    name: 'Derren',
    password: 'uu0s548',
    type: 'user',
    email: 'Derren28@yahoo.com'
  },
  {
    name: 'Derryn',
    password: 'ti9rh6c',
    type: 'user',
    email: 'Derryn5@yahoo.com'
  },
  {
    name: 'Ryan',
    password: 'MakBOAM',
    type: 'user',
    email: 'Ryan39@walla.co.il'
  },
  {
    name: 'Darn',
    password: 'R0eVIHe',
    type: 'user',
    email: 'Darn14@gmail.com'
  },
  {
    name: 'Liam-Stephen',
    password: 'DikwxAF',
    type: 'admin',
    email: 'Liam-Stephen2@walla.co.il'
  },
  {
    name: 'Jordy',
    password: 'CYJDYqI',
    type: 'admin',
    email: 'Jordy29@gmail.com'
  },
  {
    name: 'Raheem',
    password: 'k4pBUX0',
    type: 'user',
    email: 'Raheem21@yahoo.com'
  },
  {
    name: 'Lewis',
    password: 'K7qWpYf',
    type: 'user',
    email: 'Lewis3@aol.com'
  },
  {
    name: 'Aref',
    password: 'VrfIwjP',
    type: 'user',
    email: 'Aref27@aol.com'
  },
  {
    name: 'Brayden',
    password: '2lAWtQl',
    type: 'user',
    email: 'Brayden38@hotmail.com'
  },
  {
    name: 'Arjuna',
    password: 'fx97ne9',
    type: 'user',
    email: 'Arjuna7@aol.com'
  },
  {
    name: 'Warren',
    password: '67sh1uP',
    type: 'admin',
    email: 'Warren17@gmail.com'
  },
  {
    name: 'Konrad',
    password: 'xJMEfkp',
    type: 'user',
    email: 'Konrad6@hotmail.com'
  },
  {
    name: 'Rihards',
    password: 'Re7tqR5',
    type: 'user',
    email: 'Rihards21@yahoo.com'
  },
  {
    name: 'Alisdair',
    password: 'fY6w77o',
    type: 'user',
    email: 'Alisdair46@walla.co.il'
  },
  {
    name: 'Sam',
    password: 'sOkEksI',
    type: 'user',
    email: 'Sam30@yahoo.com'
  },
  {
    name: 'Maciej',
    password: 'wJL3RJj',
    type: 'user',
    email: 'Maciej24@hotmail.com'
  },
  {
    name: 'Umut',
    password: 'VJk2u5F',
    type: 'user',
    email: 'Umut9@aol.com'
  },
  {
    name: 'Tomas',
    password: '9YSLDWL',
    type: 'admin',
    email: 'Tomas19@aol.com'
  }
  ,
  {
    name: 'dania',
    password: '1234',
    type: 'admin',
    email: 'd@d.com'
  }
]
 
 const Login =()=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [LoggedUser, setLoggedUser] = useState(null);

     const submitHandler =(e)=>{
      e.preventDefault();
      const user = users.find((user)=>user.email === email && user.password ===password)
      //return object 
      if(user){ // find the user from array 
      setLoggedUser(user) // to control the user that entered and add to it the value (user)
        setIsLoggedIn(true); // login true 
        

      }
      else{
        alert('faild to log in ')
      }
     }



     if (isLoggedIn && (LoggedUser.type ==='admin'||  LoggedUser.type ==='user')) { // true 

      return (
        <div>
          
          <p  style={{fontSize:"20px"}} >Welcome,<strong > {LoggedUser.name}</strong> keep your vote secret !</p>
          {/* Render the voting page here */}
          {
          // declaring a variable named loggedUser and inject to it a null value {} ==> empty obj
          // after that i want to reasiggn the empty object by using method(setLoggedUser) (user)
          // so i added the user to the logged user // so i can return from it the name 
          }
          <Voting/>

        </div>
      );
    } else {
      return (
    <div> 
      <h1> Welcome to Voting Applicaton</h1>
      <form className="form" onSubmit={submitHandler}>

        <label > Email</label>
        <input type='email' onChange={(e)=>{setemail(e.target.value)}} ></input>
        <br></br>
        <label> Password</label>
        <input type='password' onChange={(e)=>{setpassword(e.target.value)}} ></input>
        <br></br>
        <button  className="btn" type='submit'>submit </button>
      </form>
    </div>
   )
 }}
  export default Login