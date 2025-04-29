import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          Accueil
        </Route>
        <Route path="/portfolio" element={<FicheArtisan />}>
          Portfolio
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
