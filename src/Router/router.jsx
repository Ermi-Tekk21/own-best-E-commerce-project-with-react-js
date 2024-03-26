import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, PopularProducts, Hero, SignInPage, LogIn, LogedPopularProducts } from '../pages'
import RouteNotExist from '../pages/404/404'

function CustomRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' Component={Hero}/>
            <Route path='/about-us' Component={About}/>
            <Route path='/products' Component={PopularProducts}/>
            <Route path='/contact-us' Component={Contact}/>
            <Route path='/sign-in' Component={SignInPage}/>
            <Route path='/log-in' Component={LogIn}/>
            <Route path='/user-account' Component={LogedPopularProducts}/>
            
            <Route path="*" Component={RouteNotExist}/>
        </Routes>
    </div>
  )
}

export default CustomRouter