import './5.2_card.css'

const Card = (props) =>{
    return <div className='card'>
        <img src = {props.imgURL} height='300px ' width='300px'/>
        <h2>{props.title} </h2>
        <p> { props.descripton}</p>
        <a className='link' href="#"> share  </a>
        <a className='link' href="#"> Explore </a>
    </div>
}
export default Card
