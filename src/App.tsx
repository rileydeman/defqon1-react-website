import CounterRoot from "./components/counter-provider.tsx";
import Counter from "./components/counter.tsx";
import Header from "./components/header.tsx";

function App() {
  return (
      <>
          <Header/>
          <CounterRoot>
              <div>
                  <h1>This is my CounterApp</h1>
                  <Counter></Counter>
              </div>
          </CounterRoot>
      </>
  )
}

export default App
