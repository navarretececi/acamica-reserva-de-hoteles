import './App.css';
import { Header } from './components/header/header';
import { Filter } from './components/filter/filter';
import { Card } from './components/card/card';
import { Footer } from './components/footer/footer';
import { hotelsData, today } from './components/data/data';
import { useState } from 'react';


function App() {

const [country, setCountry] = useState("all")
const [size, setSize] = useState("all")
const [price, setPrice] = useState("all")

console.log(price)

const handleCountry = (e) => setCountry(e.target.value)
const handleSize = (e) => setSize(e.target.value)
const handlePrice = (e) => setPrice(e.target.value)



const filterHotelData = hotelsData.filter((hotel) => {
  return (country === "all" ? true : hotel.country === country) &&
         (size === "all" ? true : 
                              size === "Chico" ? hotel.rooms < 11 : 
                              size === "Mediano" ? hotel.rooms > 10 && hotel.rooms < 21 : 
                              hotel.rooms > 20
         ) &&
         (price ==="all" ? true:
                                price === "1" ? hotel.price === 1 :
                                price === "2" ? hotel.price === 2 :
                                price === "3" ? hotel.price === 3 :
                                hotel.price === 4)
         
      //   (
      //     if (size === "Chico"){ 
      //       hotel.rooms < 11
      //     } else if (size === "Mediano"){
      //       hotel.rooms > 10 && hotel.rooms < 21
      //     } else if (size === "Grande") {
      //       hotel.rooms >= 21
      //     } else {
      //       true
      //     }
      //  )
})


  return (
    <div className="App">
     <Header />
     <Filter 
     country={country} 
     handleCountry={handleCountry}
     size={size}  
     handleSize={handleSize}
     price={price}
     handlePrice={handlePrice}
     /> 
     
    <div className="container-cards">
   
   { 
    filterHotelData.map((hotel,index) =>
       <Card
        key={index}
        name={hotel.name}
        photo={hotel.photo}
        description={hotel.description}
        rooms= {hotel.rooms}
        city={hotel.city}
        country={hotel.country}
        price={hotel.price}
       />
     ) 
    }
    </div>
    
    <Footer />
    </div>
  );
}

export default App;
