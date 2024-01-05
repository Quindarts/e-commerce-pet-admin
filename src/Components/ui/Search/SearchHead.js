import React, { useState, useEffect, useRef } from 'react'
import 'tailwindcss/tailwind.css'
import { APP_ICON } from '../../../Utils/Constants'

function SearchHead({ placeholder, onSearch, isOpen, setIsOpen }) {
    const [query, setQuery] = useState('')
    const inputRef = useRef(null)
    const buttonRef = useRef(null)

    const handleSearch = (event) => {
        event.stopPropagation() // Prevent event from bubbling up to the document
        onSearch(query)
    }

    const handleClear = () => {
        setQuery('')
        inputRef.current.focus()
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false)
                handleClear()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            className={`flex h-12 w-full items-center rounded-lg border-2 border-gray-400 bg-white shadow-lg transition-all duration-300 ${
                isOpen ? 'h-12' : 'h-0 overflow-hidden'
            }`}
        >
            <input
                type="text"
                value={query}
                placeholder={placeholder}
                onChange={(event) => setQuery(event.target.value)}
                className="h-full flex-1 rounded-lg px-2 outline-none"
                ref={inputRef}
            />
            <button
                ref={buttonRef}
                className="mr-2 flex h-8 cursor-pointer items-center justify-center rounded bg-blue-500 px-3 text-white"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    )
}

export default SearchHead
