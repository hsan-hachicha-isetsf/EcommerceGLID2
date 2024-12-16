import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listarticles from "./components/articles/Listarticles"
import Listcategories from "./components/categories/Listcategories"
import Listscategories from "./components/scategories/Listscategories"
import Menu from "./components/Menu"
import Insertarticle from "./components/articles/Insertarticle"
import Editarticle from "./components/articles/Editarticle"
import Listarticlecard from "./components/client/Listarticlecard"
import { CartProvider } from "use-shopping-cart"
import Cart from "./components/client/Cart"
import Listarticlestable from "./components/articles/Listarticlestable"

const App = () => {
  return (
    <div>
<CartProvider>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/articles/add" element={<Insertarticle/>}/>
        <Route path="/articles/edit/:id" element={<Editarticle/>}/>
        <Route path="/client" element={<Listarticlecard/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/listarticlestable" element={<Listarticlestable/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </div>
  )
}

export default App
