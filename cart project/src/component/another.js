import React  from 'react';



const Addcart = ({cart, tera, handle, remove}) =>{

  const tot = cart.reduce((a, b) => a + b.price * b.amount, 0);

    return(

        <div>

        <h1 className="add">carts</h1>
            <div className="cat">
        {cart.map((tour, index) =>{
                  return(
                    <div className="allcontent" key={index}>
                     <img src={tour.img} alt={tour.title} />
                     <div className="tit">
                     <h1>{tour.price}</h1>
                     <p>{tour.amount}</p>
                     <div className="oi">
                     <button className="btn"  onClick={() =>remove(tour)}><b>-</b></button>
                     <button  className="btn" onClick={() =>handle(tour)}><b>+</b></button>
                     </div>

                     <button className="btn" onClick={() =>tera(tour.id)}><b>remove</b></button>
                     </div>
                    </div>

                  );
              })};
              </div>



              <div className="total">

                         
                         <h1>Total</h1>
                        <p><b>${tot}</b></p>
                        

              </div>




       </div>
      
    );
}

export default Addcart;
