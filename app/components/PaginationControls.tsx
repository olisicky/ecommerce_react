'use client'
import React from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'

// Tohle bude ovládat stránky na straně uživatel

type PaginationControlaProps = {
    hasNextPage: boolean,
    hasPrevPage: boolean,
    dataTotal: number,
    n_items: number
}

const PaginationControls = ({hasNextPage, hasPrevPage, dataTotal, n_items}: PaginationControlaProps) => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const location = usePathname();

    const page = searchParams.get('page') ?? '1'    // stejné defaulty jako u Pagination
    const per_page = searchParams.get('per_page') ?? n_items
  
    return (
    <div className="flex gap-10 justify-center mb-10">
        {/* Podle kliknutí na tlačítko se mi mění page a per_page, takže bude přerenderován podle nových dat */}
        <button
            className='flex items-center justify-center h-20 w-40 text-lg font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-md hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            disabled={!hasPrevPage}    // Kontrola, zda má nebo nemá další stránku k zobrazení
            onClick={() => {    // anonym function
                router.push(`${location}?page=${Number(page) - 1}&per_page=${Number(per_page)}#products:${location}`)    // zde definuji, co bude v url
            }}>
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            prev
        </button>

        <div className="flex items-center justify-center text-lg">
            {page} / {Math.ceil(Number(dataTotal) / Number(per_page))}
        </div>
        
        <button
            className='flex items-center justify-center h-20 w-40 text-lg font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-md hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            disabled={!hasNextPage}
            
            onClick={() => {    // anonym function
                router.push(`${location}?page=${Number(page) + 1}&per_page=${Number(per_page)}#products:${location}`)    // zde definuji, co bude v url
            }}>
            next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>


    </div>
  )
}

export default PaginationControls