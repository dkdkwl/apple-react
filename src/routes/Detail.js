import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Nav} from "react-bootstrap";

function Detail(props){
    
    let {id} = useParams();
    let [count,setCount] = useState(0);
    let 찾은상품 = props.shoes.find(function(x){ return x.id == id; });
    // let [alert,setAlert] = useState(true);
    let [num,setNum] = useState("");
    let [탭, 탭변경] = useState(0);

    let [contentFade, setContentFade] = useState('');
    useEffect(()=>{
        setContentFade('end');
        return ()=>{
            setContentFade('')
        }
        
    },[])


    return(
        <div className={"container " + contentFade}>
            {alert == true 
            ? <div className="alert alert-warning">
                2초이내 구매시 할인
            </div> 
            : null}
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
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{탭변경(1)}}  eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{탭변경(2)}}  eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭 = {탭}/>
        </div> 
    )

}
function TabContent({탭}){

    let [fade, setFade] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setFade('end');
        },100);
        return ()=>{
            setFade('');
        }
    },[탭])

    return <div className = {"start " + fade}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>

}

export default Detail;