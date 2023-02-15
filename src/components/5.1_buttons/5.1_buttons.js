import "./style.css"

const Btn = (props) =>{
return <button className="btn">{props.name}</button>
}
 export default Btn
  //prpos holds all the attrubite from the index.js 
// // so if we have a 
//  <Btn name ='important'/>
//  <Btn name =' not important'/>
// name will be the key 
// so the key yo access the props object will be the name of attributes when i render it 