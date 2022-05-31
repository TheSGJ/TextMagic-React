import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const handleUpSc = () => {
        window.scrollTo(0, 0);   
    }
  return (
    <footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="/" onClick={handleUpSc} class="hover:underline">TextMagic</Link>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/about" onClick={handleUpSc} class="mr-4 hover:underline md:mr-6 ">About us</Link>
        </li>
    </ul>
    </footer>
  )
}
