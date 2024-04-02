import React from 'react'
import ProductList from './ProductList';
import PaginationControls from './PaginationControls';

type Data = {
    image: string;
    description: string;
    brand: string;
    formattedPrice: number;
}

type Params = {
    searchParams: {[key: string]: string | string[] | undefined},
    data: Data[],
    n_items: number
}

const Pagination = ( {searchParams, data, n_items}: Params ) => {

    // definování logiky práce s daty a zobrazování určité části dat
    const page = searchParams['page'] ?? '1'    // set default page no to page 1
    const per_page = searchParams['per_page'] ?? n_items   // set default 5 items per page

    const start = (Number(page) - 1) * Number(per_page)    // podle čísla stránky skipnu nějaké data (pro první stránku nic neskippuji)
    const end = start + Number(per_page)    // definuji si konec počtu dat, která budu rozbrazovat

    // když bych měl databízi, tak vybírím data z ní
    const entries = data.slice(start, end)

    const total = data.length

  return (
    <div>
        {/* První si nechám zobrazit produkty v ProductList */}
        <ProductList products={entries}/>
        {/* A k nim budu mít ovládací prvek dalších stránek */}
        <PaginationControls 
            hasNextPage = {end < data.length} 
            hasPrevPage = {start > 0}
            dataTotal = {total}
            n_items = {n_items}/>
            
    </div>
  )
}

export default Pagination