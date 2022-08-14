import React from 'react'
import { useGlobalContext } from '../Context/Context';
import {FaAngleDoubleRight} from 'react-icons/fa'
export default function Jobs() {
    const {data , value,setValue} = useGlobalContext();
    const {title,dates,duties,company} = data[value];
  return (
    <>
    <section className="py-5">
    <h1>Experience</h1>
    <div className="brdr"></div>
    <div className="container">
    <div className="row py-5">
    <div className="col-md-4">
    <article className="worker">
    <div className="row">
    {
data.map((item, index) => {
    return (
        <div className="col-4  col-md-12" key={index}>
        <button onClick={()=>setValue(index)} className={`job-btn  ${index ===value && 'active-btn'}`}>{item.company}</button>
        </div>
    )
    }
    )
}
    </div>
    </article>
    </div>  
    <div className="col-md-8 text-start">
    
<article >
<h3>{title}</h3>
<h5 className="py-2 badge badge-bg">{company}</h5>
<p>{dates}</p>
{duties.map((item, index) => {
    return (
        <div key={index} className="d-flex align-items-center">
        <FaAngleDoubleRight className='icon'/>
        <p className="ms-3">{item}</p>
        </div>
    )
    })
}
</article>

      
    </div>
    </div>
    </div>
    </section>
    
    </>
  )
}
