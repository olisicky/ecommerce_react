'use client'
import React from 'react'
import {useState, useEffect} from 'react'
// https://tw-elements.com/docs/standard/components/carousel/


const SaleCarousel = () => {

    // obrázky, ze kterých budu měnit podle indexu?
    const images = [
        {
            id: "1",
            image: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(30).jpg",
            label: "First slide label",
            text: "Some representative placeholder content for the first slide.",
            href: "/men"
        },
        {
            id: "2",
            image: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
            label: "Second slide label",
            text: "Some representative placeholder content for the first slide.",
            href: "/women"
        },
        {
            id: "3",
            image: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(20).jpg",
            label: "Third slide label",
            text: "Some representative placeholder content for the first slide.",
            href: "/about"
        },
    ]

    const [index, setIndex] = useState(images.length > 3 ? images.length - 1 : 2);
    const [right, setRight] = useState(1);
    const [current, setCurrent] = useState(0);
    const [left, setLeft] = useState(-1);

// trackování stavů při nakliknutí doleva (prev) nebo doprava (next)
    const next = () => {
        setCurrent(current === index ? 0 : current+1)   // dívám se, zda je current rovno indexu. Pokud ano, tak vracím 0, jinak (:) přidám current+1
        setRight(right === index ? 0 : right+1)
        setLeft(left === index ? 0 : left+1)
    }

    const prev = () => {
        setCurrent(current === 0 ? index : current-1)
        setRight(right === 0 ? index : right-1)
        setLeft(left === 0 ? index : left-1)
    }
// automatic change of carousel
    useEffect(() => {
        setTimeout(() => {
            setCurrent(current === index ? 0 : current+1)
            setRight(right === index ? 0 : right+1)
            setLeft(left === index ? 0 : left+1)
        }, 5000);
    }, [current]);

  return (
    <div
        id="carouselCaptions"
        className="relative">
        <div
            className="absolute bottom-20 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
            {/* Lower buttons */}
            <a href={images[current].href}>
                <button
                    type="button"
                    className="w-20 h-10 md:dark:bg-gray-100 md:dark:hover:text-gray-100 hover:dark:bg-blue-500 md:hover:text-blue-700 md:p-0 md:dark:text-blue-500 font-bold py-2 px-4 rounded">
                
                Find out</button>
            </a>
        </div>

        <div
            className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                <img
                    src={images[current].image}
                    className="block w-full"
                    alt="..." />
                <div
                    className="absolute inset-x-[15%] bottom-40 hidden py-5 text-center text-white md:block">
                    <h5 className="text-6xl">{images[current].label}</h5>
                    <p className="text-xl pt-10">
                        {images[current].text}
                    </p>
                </div>
            </div>

        </div>
        {/* Carousel controls - prev item */}
        <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={prev}>
            <span className="inline-block h-8 w-8">
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Previous
            </span>

        </button>
        {/* Carousel controls - next item */}
        <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={next}>
            <span className="inline-block h-8 w-8">
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next
            </span>

        </button>
    </div>
  )
}

export default SaleCarousel