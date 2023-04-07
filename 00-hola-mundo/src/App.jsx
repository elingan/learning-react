import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const [name, setName] = useState('eduardo')
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='app'>
      <TwitterFollowCard followed={true} userName='midudev' name='Miguel' formatUserName={formatUserName}>
        <p>Frontend developer</p>
      </TwitterFollowCard>
      <TwitterFollowCard followed={false} userName='elingan' name='Eduardo' formatUserName={formatUserName}>
        <p>Frontend developer</p>
      </TwitterFollowCard>
      <TwitterFollowCard followed userName='elonmusk' name='Elon' formatUserName={formatUserName}>
        <p>CEO of SpaceX</p>
      </TwitterFollowCard>
      <TwitterFollowCard followed userName={name} name='Edu' formatUserName={formatUserName}>
        <p>Frontend developer</p>
      </TwitterFollowCard>
      <button onClick={() => setName('demo')}>Cambiame el nombre</button>
    </section>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
