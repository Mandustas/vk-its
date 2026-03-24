import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SchemaOrg from './components/SchemaOrg'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Compare from './pages/Compare'
import Solutions from './pages/Solutions'
import Cases from './pages/Cases'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Documents from './pages/Documents'
import Support from './pages/Support'
import Knowledge from './pages/Knowledge'
import Answers from './pages/Answers'
import Resources from './pages/Resources'
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SchemaOrg />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/about" element={<About />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/support" element={<Support />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/answers" element={<Answers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
