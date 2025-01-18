import { useState } from 'react'
import './App.css'
import AppRouter from './navigations/AppRouter'
import { AuthProvider } from './context/AuthContext'
function App() {


   return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
 )
}

export default App
