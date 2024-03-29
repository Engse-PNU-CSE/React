import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouteNav from './RouteNav'

export default function RouterEx() {
    const routeMain = () => {
        return (
            <BrowserRouter>
                <main className="container">
                    <RouteNav />
                    <Routes>
                    </Routes>
                </main>
            </BrowserRouter>
        )
    }
  return (
    <div>
      
    </div>
  )
}
