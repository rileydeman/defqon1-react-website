import './App.css'
import CounterRoot from "./components/counter-provider.tsx";
import Counter from "./components/counter.tsx";

function App() {
  return (
      <>
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
