import React from 'react'
import Login from './Components/Login';
import { FaTrophy, FaUsers } from "react-icons/fa";

const App = () => {
  const [isLoginMode, setisLoginMode] = React.useState(true);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-gradient-to-br from-blue-600 to-cyan-400">

      {/*Left */}
      <div className="flex flex-col justify-between p-10 md:p-20">
        <div className="mt-20">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            {isLoginMode ? "Bienvenu!" : "Welcome!"}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Rejoignez l'élite des défis techniques
          </p>
        </div>

        <div className="flex gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl flex flex-col justify-between w-48 h-40 text-white border border-white/30 shadow-lg">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-2">
              <FaTrophy className="text-2xl" />
            </div>
            <div>
              <p className="text-4xl font-bold">32</p>
              <p className="text-sm opacity-90">Compétitions actives</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl flex flex-col justify-between w-48 h-40 text-white border border-white/30 shadow-lg">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-2">
              <FaUsers className="text-2xl" />
            </div>
            <div>
              <p className="text-4xl font-bold">122</p>
              <p className="text-sm opacity-90">Participants actifs</p>
            </div>
          </div>
        </div>
      </div>

      {/*Right */}
      <div className="flex justify-center items-center p-10">
        <Login isLoginMode={isLoginMode} setisLoginMode={setisLoginMode} />
      </div>

    </div>
  )
}

export default App
