// ● Each element has to be a component
// ● You will have the following components:
// Quiz, QuizTitle, Q1, Q1Title, Q1Input, Q2, Q2Title,
// Q2Input
// ○ Quiz: The overall container
// ○ QuizTitle: Quiz title
// ○ Q1: First question
// ○ Q1Input: First questions input
// and so on…
// Think where the components belong. Who is the
// father and who are the children.
 const QuizTitle =()=>{
    return <h1>
        How do you like FrontEnd
    </h1>
 }
  const Q1Title =()=>{
    return <h2> How much you love Front End</h2>
  }
   const Q1Input = () =>{
    return <input type='range' min='0' max='10' defaultValue='0'></input>
   }

  const Q1 =()=>{
    return <div>
<Q1Title/>
<Q1Input/>

    </div>

  }
  const Q2Title = () =>{
     return <p> What is your favourite front end topic  </p>
  }

 const  Q2Input = () =>{
    return <input type='text'></input>
 }
  const Q2 =() =>{
    return <div>
<Q2Title/>
<Q2Input/>
    </div>
  }

   const Quiz =() =>{
    return <div>
        <QuizTitle/>
        <Q1/>
        <Q2/>
    </div>
   }
    export default Quiz;