import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Logo" />

            <ul>
                {navLinks.map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-3">
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <img src="/search.svg" alt="Search" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}
export default Navbar