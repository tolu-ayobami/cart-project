import React, {useState}  from "react";
import Reviews from "./reviews";
import "./App.css";
import Navbar from "./navbar";
import data from "./data";
import Addcart from "./another";





function App() {


  const [cart, setCart] = useState([]);

  const [page, setPage] = useState(data);

  const [count, setCount]= useState(false);


  const oya = () =>{ 
    setCount(!count);
  }



  
    
  const handleClick = (product) =>{
     const edit = cart.find((ok) => ok.id === product.id);
     if(edit){
       setCart(cart.map((oya) => oya.id === product.id ? {...edit, amount:edit.amount + 1} : oya));
     }else{
      setCart([...cart, { ...product, amount:1 }]);
     }
    
     
  }


  
  const remove = (product) =>{
    const edit = cart.find((ok) => ok.id === product.id);
    if(edit.amount === 1){
      setCart(cart.filter((oya) => oya.id !== product.id ));
      
    }else{
      setCart(cart.map((oya) => oya.id === product.id ?  {...edit, amount:edit.amount - 1} : oya));
    }
   
    
 }


  const tera = (id) =>{
    setCart(cart.filter((ma) => ma.id !== id));
  }
 
return(
  <div className="section"> 

  <Navbar cart={cart} oya={oya} />
 

<div className={count? "gty lov": "gty"}>

<Addcart cart={cart} tera={tera} remove={remove} handle={handleClick}/>

</div>
 

 {count ? "" :<Reviews  handle={handleClick} cart={cart} page={page}/>}
 
  </div>
);

}
export default App;  