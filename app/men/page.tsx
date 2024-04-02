import React from 'react'
import Pagination from '../components/Pagination'
import Data from "../assets/Data";

type Params = {
  searchParams: {[key: string]: string | string[] | undefined},
}

const Men = ({ searchParams }: Params) => {

  return (
    <div>
        <div className="p-10">
          <p className="text-5xl" id="products:/men">Pro muže</p>
        </div>
        <Pagination searchParams={searchParams} data={Data.PRODUCTS} n_items={8}/>
    </div>
  )
}

export default Men