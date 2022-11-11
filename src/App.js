import './App.css';
import { useEffect } from "react";
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';



function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  });


  return (

    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
