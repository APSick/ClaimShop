import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Product store</span>
            <ul className='nav'>
                <li>about</li>
                <li>contacts</li>
                <li>account</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
