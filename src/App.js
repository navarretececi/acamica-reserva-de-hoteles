import './App.css';
import { Header } from './components/header/header';
import { Filter } from './components/filter/filter';
import { Card } from './components/card/card';
import { Footer } from './components/footer/footer';
import { hotelsData } from './components/data/data';
import { useState } from 'react';


function App() {

const [dateFrom, setDateFrom] = useState("")
const [dateTo, setDateTo] = useState("")
const [country, setCountry] = useState("all")
const [price, setPrice] = useState("all")
const [size, setSize] = useState("all")

function formatDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

const handlerDateFrom = (e) => {
  if (new Date (e.target.value) < new Date(formatDate())) {
      alert(`La fecha no puede ser anterior al ${formatDate()}`)
  } else if (dateTo && (new Date (e.target.value) > new Date(dateTo))) {
    alert(`La fecha no puede ser posterior al ${dateTo}`)
  } else {
    setDateFrom(e.target.value)
  }
}
const handlerDateTo = (e) => {
  if (new Date (e.target.value) < new Date(formatDate())) {
    alert(`La fecha no puede ser anterior al ${formatDate()}`)
  } else if (dateFrom && (new Date (e.target.value) < new Date(dateFrom))) {
    alert(`La fecha no puede ser anterior al ${dateFrom}`)
  } else setDateTo(e.target.value)
}
const handlerCountry = (e) => setCountry(e.target.value)
const handlerPrice = (e) => setPrice(e.target.value)
const handlerSize = (e) => setSize(e.target.value)
const handlerReset = () => {  
      setDateFrom("")
      setDateTo("")
      setCountry("all")
      setPrice("all")
      setSize("all")
}   

const filterHotelData = hotelsData.filter((hotel) => {
  return (country === "all" ? true : hotel.country === country) &&
         (price ==="all" ? true:
                                price === "1" ? hotel.price === 1 :
                                price === "2" ? hotel.price === 2 :
                                price === "3" ? hotel.price === 3 :
                                hotel.price === 4) &&
         (size === "all" ? true : 
                                  size === "Chico" ? hotel.rooms < 11 : 
                                  size === "Mediano" ? hotel.rooms > 10 && hotel.rooms < 21 : 
                                  hotel.rooms > 20) &&
        (!dateFrom || !dateTo ? true:
                                  dateFrom ? hotel.availabilityFrom >= new Date(dateFrom).valueOf() &&
                                  hotel.availabilityFrom <= new Date(dateTo).valueOf() :
                                  dateTo ? hotel.availabilityTo <= new Date(dateTo).valueOf() : true)
        
         
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

// Tabla con las fechas disponibles de los hoteles
const disponibilidad = []
filterHotelData.map((hotel) =>
    disponibilidad.push( {"nombre:": hotel.name,
                   "desde:": new Date(hotel.availabilityFrom),
                   "hasta:": new Date(hotel.availabilityTo)}
              )
  )
  console.table(disponibilidad)
// fin tabla de fechas

  return (
    <div className="App">
        <Header 
        dateFrom={dateFrom}
        dateTo={dateTo}
        country={country} 
        price={price}
        size={size}  
        handlerReset={handlerReset}
        />

        <Filter 
        dateFrom={dateFrom}
        handlerDateFrom={handlerDateFrom}
        dateTo={dateTo}
        handlerDateTo={handlerDateTo}
        country={country} 
        handlerCountry={handlerCountry}
        price={price}
        handlerPrice={handlerPrice}
        size={size}  
        handlerSize={handlerSize}
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
