import logo from "./logo.svg";
import "./App.css";
import Jatekter from "./components/Jatekter";
import { useState } from "react";

function App() {
  //a lista írja le a program állapotát
  // ha a lista változik, akkor a képernyő megfelelő tartalma is változik
  //react STATE ehhez useState hook-ot használat - spec fv amelyhez megadjuk h egyes változót milyen fgvvel változtathatunk meg
  //visszatérési értéke egy lista, első paraméter változó neve, második a fgv amivel a változót változtathatjuk

  //const lista = ["X", "X", "", "O", "", "", "", "", "",]

  const [lista, setLista] = useState(["X", "X", "", "O", "", "", "", "", ""]);

  const [lepes, setLepes] = useState(0);

  function katt(adat) {
    console.log("app-ban", adat);
    //lista[adat] = "X" így nem változtathatjuk meg a state értékét
    //csak a setterén/beállítófgvényén keresztül
    //1. készíts egy másolatot a változóról
    //2. változtasd meg az értékét
    //3. beállítófgven keresztül változtasd meg az eredeti változót

    const sl = [...lista];
    if (lepes % 2 == 0) {
      sl[adat] = "X";
    } else {
      sl[adat] = "O";
    }

    setLista([...sl]); //értékadás történik a háttérben: lista = sl
    let sLepes = lepes + 1
    setLepes(sLepes)
    //setLepes(lepes+1) - megtehetm
    //setLepes(lepes+=1) - nem tehetem meg, közvetlen változtatnám az értékét, de én azt csak a fgven keresztül tehetem meg
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TIC-TAC-TOE</h1>
      </header>
      <article>
        <div className="jatekter">
          <Jatekter lista={lista} katt={katt} />
        </div>
      </article>
      <footer>Massányi Csilla</footer>
    </div>
  );
}

export default App;
