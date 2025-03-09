import { getFetch } from "@/utils/fetch";
import Product from "../products/Product";
import Paginate from "./Paginate";

export default async function ProductList({ params }) {
  const data = await getFetch(`/menu?${params}`);

  return (
    <>
      {data.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Paginate links={data.meta.links} />
    </>
  );
}
