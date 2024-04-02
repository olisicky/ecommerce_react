import SaleCarousel from "./components/SaleCarousel";
import Pagination from "./components/Pagination";
import Data from "./assets/Data";

type Params = {
  searchParams: {[key: string]: string | string[] | undefined},
}

export default function Home({searchParams}: Params) {
  return (
    <main>
      <SaleCarousel />
      <div className="p-10">
        <p className="text-5xl" id="products:/" >Doporučujeme</p>
      </div>
        <Pagination searchParams={searchParams} data={Data.PRODUCTS} n_items={4}/>
      <div className="p-10">
        <p className="text-5xl">Novinky</p>
      </div>
    </main>
  );
}
