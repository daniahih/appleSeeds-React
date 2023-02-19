import { useState } from "react";

const Book =(prpos) =>{
return (

<div>
<ul>
  <li>{ prpos.title}</li>
  <li>{prpos.author}</li>
  <li>{prpos.date} </li>
</ul>
</div>
)
}

function App() {
  const articles = [
    { id: 1, title: 'React Props Tutorial', author: 'John Doe', date: '2022-02-15' },
    { id: 2, title: '10 Tips for Writing Clean Code', author: 'Jane Smith', date: '2022-02-14' },
    { id: 3, title: 'The Benefits of Pair Programming', author: 'Bob Johnson', date: '2022-02-13' },
  ];
     return (
      <div>
         
        {articles.map((article) => <Book title={article.title} author={article.author} date={article.date}  key={article.id}/>)}
          <Form/>
    </div>
   
   
     )



}
 const Form =() =>{
 const [title,settitle] = useState('')
 const inputHandlerstitle =(event)=>{
  settitle(event.target.value)
 }
 const [author,setauthor] = useState('')
 const inputHandlerauthor =(event)=>{
  setauthor(event.target.value)
 }
 const [date,setdate] = useState('')
 const inputHandlerdate =(event)=>{
  setdate(event.target.value)
 }


  return (
    <div>
      <form>

      <label> title</label>
      <input type='text' onChange={inputHandlerstitle}/>
      <label> author</label>
      <input type='text' onChange={inputHandlerauthor}/>
      <label> Date</label>
      <input type='date' onChange={inputHandlerdate}/>
      <button type='submit'>submit</button>
      </form>
    </div>
  )
 }