import {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function GaguList(){
  const [gaguList,setGaguList]=useState([])
  const [curpage, setCurpage]=useState(1)
  const [title, setTitle]=useState('')
  const [totalpage,setTotalpage]=useState(0)
  const [startPage,setStartPage]=useState(0)
  const [endPage,setEndPage]=useState(0)

  useEffect(()=> {
    axios.get('http://localhost/gagu/gagu_list_react', {
      params: {
        title:title,
        page: curpage
      }
    }).then(res => {
      console.log(res.data)
      setGaguList(res.data)
    }).catch(error => {
      console.log(error)
    })

    axios.get('http://localhost/gagu/gagu_page_react',{
      params:{
        title:title,
        page:curpage
      }
    }).then(res=>{
      console.log(res.data)
      setCurpage(res.data.curpage)
      setTotalpage(res.data.totalpage)
      setStartPage(res.data.startPage)
      setEndPage(res.data.endPage)
    })
  },[title])

  //버튼 클릭 시 처리
  
  // 입력값으로 변환
  const findChange=(e)=>{
    setTitle(e.target.value)
  }
  const findBtn=()=>{
    setCurpage(1)
    axios.get('http://localhost/gagu/gagu_list_react',{
      params:{
        title:title,
        page:curpage
      }
    }).then(res=>{
      console.log(res.data)
      setGaguList(res.data)
    }).catch(error=>{
      console.log(error.response)
    })
    axios.get('http://localhost/gagu/gagu_page_react',{
      params:{
        title:title,
        page:curpage
      }
    }).then(res=>{
      console.log(res.data)
      setCurpage(res.data.curpage)
      setTotalpage(res.data.totalpage)
      setStartPage(res.data.startPage)
      setEndPage(res.data.endPage)
    }).catch(error=>{
      console.log(error)
    })
  }

  const pages=(page)=>{
    axios.get('http://localhost/gagu/gagu_list_react',{
      params:{
        title:title,
        page:page
      }
    }).then(res=>{
      console.log(res.data)
      setGaguList(res.data)
    }).catch(error=>{
      console.log(error)
    })
    axios.get('http://localhost/gagu/gagu_page_react',{
      params:{
        title:title,
        page:page
      }
    }).then(res=>{
      console.log(res.data)
      setCurpage(res.data.curpage)
      setTotalpage(res.data.totalpage)
      setStartPage(res.data.startPage)
      setEndPage(res.data.endPage)
    }).catch(error=>{
      console.log(error)
    })
  }

  const pageChange=(page)=>{
    pages(page)
  }
  const pagePrev=()=>{
    pages(startPage-1)
  }
  const pageNext=()=>{
    pages(endPage+1)
  }

  let row=[]
  if(startPage>1) {
    row.push(<li><a href={"#"} onClick={()=>pagePrev(startPage>1?startPage-1:startPage)}>&lt;</a></li>)
  }
  for(let i=startPage;i<=endPage;i++) {
    if(i===curpage) {
      row.push(<li className={"active"}><a href={"#"} onClick={()=>pageChange(i)}>{i}</a> </li>)
    }
    else {
      row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a> </li>)
    }
  }
  if(endPage<totalpage) {
    row.push(<li><a href={"#"} onClick={()=>pageNext(endPage<totalpage?endPage+1:endPage)}>&gt;</a></li>)
  }

  const gagu_html=gaguList.map((g,key)=>{
    return(
      <div key={key} className="col-md-6 col-lg-3">
        <div className="box">
          <div className="img-box" style={{height:"90%",padding:"5px"}}>
            <NavLink to={"/gagu/gagu_detail_react/"+g.no}>
              <img src={g.poster} alt={g.title} style={{borderRadius:"5px"}}/>
            </NavLink>
          </div>
          <div className="detail-box">
            <h5>
              {g.title}
            </h5>
            <div className="price_box">
              <h6 className="price_heading">
                <span style={{fontSize:"10pt"}}>{g.original_pri}원</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <Fragment>
      <section className="furniture_section mt-5">
        <div className="container">
          <div className={"row"} style={{justifyContent:"right"}}>
            <input type={"text"} className={"input-sm"} size={25} value={title}
                   onChange={findChange}/>
            <button type={"button"} value={"검색"} onClick={findBtn} className={"btn"}>
              <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            </button>
          </div>
          <div className="row">
            {gagu_html}
          </div>
          <div style={{"height":"10px"}}></div>
          <div className={"row"} style={{justifyContent:"center"}}>
            <div className={"text-center"}>
              <ul className="pagination">
                {row}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default GaguList;