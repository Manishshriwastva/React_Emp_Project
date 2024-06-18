import React from 'react'
import Offernav from '../offer/Offernav'

const OfferCardd = () => {
  return (
    <div>
      <Offernav/>
     
     <div className="card col-md-2 " style={{width:'18rem'}}>
  <img style={{width:'285px',height:'250px'}} src="https://th.bing.com/th?id=OIP.S-xjLBec3JvLNW312LIKQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
      
    </div>
  )
}

export default OfferCardd
