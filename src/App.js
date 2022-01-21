import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer articulo="KIT CÁMARA" precio="$2300" stock={4}/>
      <ItemListContainer articulo="KIT SONIDO" precio="$3450" stock={5}/>
      <ItemListContainer articulo="COMBO LENTES" precio="$2300" stock={6}/>
      <ItemListContainer articulo="COMBO LUCES" precio="$2300" stock ={4}/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
