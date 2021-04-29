import './App.css';
import { Header } from './components/Header/Header';
import { Filter } from './components/Filter/Filter';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { hotelsData, today } from './components/Data/data';


function App() {
  return (
    <div className="App">
     <Header />
     <Filter /> 
     
     <div className="container-cards">
   {
    hotelsData.map(
       hotel =>
       <Card
        name={hotel.name}
        photo={hotel.photo}
        description={hotel.description}
       />
     ) 
    }
    </div>
     
    <Footer />
    </div>
  );
}

export default App;
