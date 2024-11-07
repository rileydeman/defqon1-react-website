import Header from "./components/core/header.tsx";
import Main from "./components/core/main.tsx";
import Footer from "./components/core/footer.tsx";
import Counter from "./components/counter.tsx";
import CounterRoot from "./components/counter-provider.tsx";


function App() {
  return (
      <>
          <Header/>
          <Main/>
          <Footer/>
          <CounterRoot>
              <Counter/>
          </CounterRoot>
      </>
  )
}

export default App;
