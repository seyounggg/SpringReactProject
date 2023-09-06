import {Fragment,useEffect,useState} from "react";
import axios from "axios";

function Home(){
  const [gaguSaleData,setGaguSaleData]=useState([])
  const [fabricSaleData,setFabricSaleData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost/gagu/gagu_sale_list_react')
        .then(res=>{
          console.log(res.data)
          setGaguSaleData(res.data)
        }).catch(error=>{
          console.log(error)
        })
    axios.get('http://localhost/fabric/fablic_sale_list_react')
        .then(res=>{
          console.log(res.data)
          setFabricSaleData(res.data)
        }).catch(error=>{
          console.log(error)
        })
  },[]);
  const gagu_html=gaguSaleData.slice(0,8).map((g,key)=>{
    return(
        <div key={key} className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box" style={{height:"90%",padding:"5px"}}>
              <img src={g.poster} alt={g.title} style={{borderRadius:"5px"}}/>
            </div>
            <div className="detail-box">
              <h5>
                {g.title}
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <del><span style={{color:'black',fontSize:'9pt'}}>{g.original_pri}</span>원</del>&nbsp;
                  <span style={{float:"right",fontSize:"11pt"}}>{g.priced_sale}원</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
    )
  })
  const fabric_html=fabricSaleData.slice(0,8).map((f,key)=>{
    return(
        <div key={key} className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box" style={{height:"90%",padding:"5px"}}>
              <img src={f.poster} alt={f.title} style={{borderRadius:"5px"}}/>
            </div>
            <div className="detail-box">
              <h5>
                {f.title}
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <del><span style={{color:'black',fontSize:'9pt'}}>{f.original_pri}</span>원</del>&nbsp;
                  <span style={{float:"right",fontSize:"11pt"}}>{f.priced_sale}원</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
    )
  })
  return(
      <Fragment>
        <section className="slider_section" style={{width:"100%",marginTop:"50px"}}>
          <div id="customCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="detail-box">
                        <h1>
                          ㅇㅂ <br/>
                          ㄱㄱ
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis,
                          illo maxime voluptatem a itaque suscipit.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="img-box">
                        <img src="/images/slider-img.png" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="furniture_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h1>
                할인 가구
              </h1>
            </div>
            <div className="row">
              {gagu_html}
            </div>
            <div className="heading_container mt-5">
              <h1>
                할인 이불
              </h1>
            </div>
            <div className="row">
              {fabric_html}
            </div>
          </div>
        </section>
      </Fragment>
  )
}

export default Home;