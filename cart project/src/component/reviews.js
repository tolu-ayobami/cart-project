import React from "react";


const Reviews = ({handle, page}) =>{


    return(

        <div className="all">

           <h1 className="add">Products</h1>

              {page.map((tour, index) =>{
                  return(
                    <div className="allcontent" key={index}>
                     <img src={tour.img} alt={tour.title} />
                     <div className="tit">
                     <h1>{tour.price}</h1>
                     <button className="btn" onClick={() => handle( tour)}><b>Add to cart</b></button>
                     </div>
                    </div>

                  );
              })};

              <div className="tolu">
                  <p>@Tolu ayobami</p>
              </div>

                      
               

           </div>

    );
}

export default Reviews;