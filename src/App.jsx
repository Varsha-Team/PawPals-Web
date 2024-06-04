import {Routes, Route} from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import Homepage from "./pages/Homepage"
import Komunitaspage from "./pages/Komunitaspage"
import Artikelpage from "./pages/Artikelpage"
import Kontakpage from "./pages/Kontakpage"
import Detailkomunitaspage from "./pages/DetailKomunitaspage"

function App() {
  return <div>
    <NavbarComponent />


    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/homepage" Component={Homepage} />
      <Route path="/komunitaspage" Component={Komunitaspage} />
      <Route path="/artikelpage" Component={Artikelpage} />
      <Route path="/kontakpage" Component={Kontakpage} />
      <Route path="/detailkomunitaspage" Component={Detailkomunitaspage} />
    </Routes>

    <FooterComponent />
  </div>
}

export default App
