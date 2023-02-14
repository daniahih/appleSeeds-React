const BOX1=()=>{
    return <div className="BOX1"> box1 <BOX2/> </div>
}
const BOX2 =()=>{
    return <div className="BOX2"> BOX2 <BOX3/> </div>
}
const BOX3 =()=>{
    return <div className="BOX3"> BOX3 <BOX4/> <BOX4/> </div>
}
const BOX4 =()=>{
    return <div className="BOX4"> </div>
}

const Boxes = ()=> {
    return (
        <BOX1 />
    )
}

export default Boxes;
