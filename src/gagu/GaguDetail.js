import {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";

function GaguDetail(){
    const [gaguDetail,setGaguDetail]=useState({})
    const {no}=useParams(); // 외부에서 데이터 받아와서!

    useEffect(() => {
        axios.get('http://localhost/gagu/gagu_detail_react',{
            params:{
                no:no
            }
        }).then(res=>{
            console.log(res.data)
            setGaguDetail(res.data)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

    return(
        <div className={"container"} style={{width:"800px",marginTop:"50px"}}>
            <div className={"row"} style={{margin:"0px auto"}}>
                <div className={"col-sm-5"}>
                    <img src={gaguDetail.poster} style={{width:"100%",height:"auto",borderRadius:"5px",border:"0.5px solid #d3d3d3"}}/>
                </div>
                <div className={"col-sm-7"}>
                    <strong style={{fontSize:"20pt"}}>{gaguDetail.title}</strong>
                    <p style={{fontSize:"15pt"}}>By.&nbsp;{gaguDetail.brand}</p>
                    <p style={{fontSize:"13pt"}}><span><i className="fa fa-credit-card-alt"></i>&nbsp;</span>{gaguDetail.original_pri}원</p>
                    {gaguDetail.priced_sale && (
                        <p style={{fontSize: "14pt",color:"orange",fontWeight:"900px"}}><span>할인가 : </span>{gaguDetail.priced_sale}</p>
                    )}
                    <p style={{fontSize:"10pt"}}>{gaguDetail.delivery_pri}</p>
                </div>
            </div>
            <div style={{height:"30px"}}></div>
            <div className={"row"}>
                <img src={gaguDetail.detailposters} style={{width:"780px"}}/>
            </div>
        </div>
    )
}

export default GaguDetail;