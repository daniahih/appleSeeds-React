import './5.3.css'

const Child = (props) =>{
    return(

    <div>
       <h3> {props.name}</h3> 
<Balloon color ={props.color}/>
    </div>
    )
// props .name should be at the same as the name of attrubite in the other commponents 
}
const Balloon =(props) =>{
    return (   
    <div style={{backgroundColor:props.color, width:"50px" , height:"50px" , borderRadius:"50%"} }>

    </div>
    )
}



const Mother =() =>{

    const kids= [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
        ]
return (
<div className='countainer'>
    <h1>
    Tale of Five Balloons.
    </h1>
    <div className='child'>
        {kids.map((res) => <Child name={res.name} color={res.color} key={res.name}/>)} 
    </div>
    
   
</div>
)
//i want to loop for the kids by kids.map // res will loop about everyelement in the array i want to call the component child and i will give it a 
// attrubite name , color  
}
export default Mother