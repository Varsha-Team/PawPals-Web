import {Routes, Route} from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import Homepage from "./pages/Homepage"
import Komunitaspage from "./pages/KomunitasPage"
import Artikelpage from "./pages/Artikelpage"
import Kontakpage from "./pages/Kontakpage"
import Detailkomunitaspage from "./pages/DetailKomunitaspage"
import Loginpage from "./pages/Loginpage"
import Registerpage from "./pages/Registerpage"
import ArtikelSatu from "./pages/ArtikelSatu";

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
      <Route path="/loginpage" Component={Loginpage} />
      <Route path="/registerpage" Component={Registerpage} />
      <Route path="/artikelsatu" Component={ArtikelSatu} />
    </Routes>

    <FooterComponent />
  </div>
}

export default App
