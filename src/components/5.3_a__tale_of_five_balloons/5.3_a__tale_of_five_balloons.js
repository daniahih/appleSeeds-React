 const Child = (props) =>{
   return  <div>
        <h3>
{props.name}
<Balloon color={props.color}></Balloon>
        </h3>
    </div>
 }
   const Balloon = (props) =>{
     return <div style={{backgroundColor: props.color, width :"50px" , height :"50px ", borderRadius:"50%"}}>
    </div>
   }

const Mother = () => {

    const kids = [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
        ]
return (


<div>

<div>
    <h1>
    Tale of FiveBalloons
    </h1>
    {kids.map((kid) => <Child name={kid.name} color={kid.color} key={kid.name} />)}
</div>
</div>
)

 }
  export default Mother