import React from 'react'
import logo from '/@/assets/logo.png'

function App() {
    return (
        <div
            className="h-screen w-screen flex flex-col space-y-6 items-center justify-center overflow-hidden bg-white"
            data-wails-drag
        >
            <img src={logo} className="object-contain w-[20rem] animate-pulse" />
            <p className="text-4xl">Wails + React + Typescript + Vite + Tailwind CSS</p>
        </div>
    )
}

export default App
