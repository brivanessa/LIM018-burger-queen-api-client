import { useState, useEffect } from 'react';


export const OrderClient = (props) => {

  return(
  <div className="OrderClientList">

    <div className="productName">{props.producto}</div>
  </div>
)
}