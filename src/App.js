import './App.css';
import { useEffect } from "react";
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';



function App() {
  const { onToogleButton, tg } = useTelegram;

  useEffect(() => {
    tg.ready();
  });


  return (

    <div className="App">
      <Header />

      <button onClick={onToogleButton}>toogle</button>
    </div>
  );
}

export default App;
