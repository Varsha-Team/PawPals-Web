import {Routes, Route} from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import Homepage from "./pages/Homepage"
import KomunitasPage from "./pages/KomunitasPage"
import Artikelpage from "./pages/Artikelpage"
import Kontakpage from "./pages/Kontakpage"

function App() {
  return <div>
    <NavbarComponent />


    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/homepage" Component={Homepage} />
      <Route path="/komunitaspage" Component={KomunitasPage} />
      <Route path="/artikelpage" Component={Artikelpage} />
      <Route path="/kontakpage" Component={Kontakpage} />
    </Routes>

    <FooterComponent />
  </div>
}

export default App
