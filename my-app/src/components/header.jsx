import React from 'react';

export const Header = () => {
    return ( 
        <div className='viewWaiterPeiddos' id='viewWPedidos'>
        <div className="headerViews" id="menu">
            <div>Hola: </div>
            <div>LOGO NEGOGIO </div>
            <div> <li href="">Cerrar sesión</li> </div>
        </div>
        <div className="waiterBody">
          < div className="waiterOptions" >
            {/* <button type="submit" className="waiterButtons"  >Registrar Pedidos</button>
            <button type="submit" className="waiterButtons"  >Pedidos Pendientes</button>
            <button type="submit" className="waiterButtons"  >Pedidos Preparados</button>
            <button type="submit" className="waiterButtons"  >Pedidos Entregados</button> */}
            <button type="submit" className="waiterButtons" >Desayunos</button>
              <button type="submit" className="waiterButtons" >Almuerzos</button>
          </div> 
          <div className="waiterContainer">
            <div className="typeMenu">
              {/* <button type="submit" className="waiterMenu" >Desayunos</button>
              <button type="submit" className="waiterMenu" >Almuerzos</button> */}
            </div >
            <div className="menuConstainer">
              <div className="product">
                <div className="productName">Jugo de Frutas</div>
                <div className="productCost">S/.10.0</div>
                <div className="imgProduct">
                  {/* <img src={sanwich} alt="sanwich"></img> */}
                </div>
                <div className="buttonAñadir">+ Añadir</div>
              </div>
              <div className="product">
                  <div className="productName">Jugo de Frutas</div>
                  <div className="productCost">S/.10.0</div>
                  <div className="imgProduct">
                    {/* <img src={sanwich} alt="sanwich"></img> */}
                  </div>
                  <div className="buttonAñadir">+ Añadir</div>
              </div>
              <div className="product">
                  <div className="productName">Jugo de Frutas</div>
                  <div className="productCost">S/.10.0</div>
                  <div className="imgProduct">
                    {/* <img src={sanwich} alt="sanwich"></img> */}
                  </div>
                  <div className="buttonAñadir">+ Añadir</div>
              </div>
            </div> 
          </div> 
          <div className="waiterList">PEDIDO </div> 
        </div> 
      </div>
     );
}
 
// export default header;