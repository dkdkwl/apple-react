import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){
    
    let {id} = useParams();
    let [count,setCount] = useState(0);
    // let [alert,setAlert] = useState(true);
    let [num,setNum] = useState("");
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id;
    });



    return(

        <div className="container">
            {/* {alert == true 
            ? <div className="alert alert-warning">
                2초이내 구매시 할인
            </div> 
            : null} */}
            {count}
            <button onClick={()=>{
                setCount(++count);
            }}>숫자증가 시키기</button>
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <input className="useInput" type="text" onChange = {((e)=>{ setNum(e.target.value) })} />
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price} 원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;