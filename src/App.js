import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer articulo="KIT CÁMARA" precio="$2300"/>
      <ItemListContainer articulo="KIT SONIDO" precio="$3450"/>
      <ItemListContainer articulo="COMBO LENTES" precio="$2300"/>
      <ItemListContainer articulo="COMBO LUCES" precio="$2300"/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
