import { HeaderTest } from './components/Header/header.component';
import IssData from './components/IssData/IssData.component';
import { MapIss } from './components/MapIss/MapIss.component';
import { Country } from './components/Country/country.component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderTest/>
      <IssData/>
      <MapIss/>
      <Country/>
    </div>
  );
}

export default App;
