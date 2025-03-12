import CategoriesList from "@/components/menu/CategoriesList";
import Loading from "@/components/menu/Loading";
import ProductList from "@/components/menu/ProductList";
import Search from "@/components/menu/Search";
import Sort from "@/components/menu/Sort";
import { getFetch } from "@/utils/fetch";
import { Suspense } from "react";

export default async function MenuPage({ searchParams }) {
  const categories = await getFetch("/categories");
  const params = new URLSearchParams(searchParams);

  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <Search />
            <hr />
            <CategoriesList categories={categories} />
            <hr />
            <Sort />
          </div>
          <div className="col-sm-12 col-lg-9">
            <div className="row gx-3">
              <Suspense key={params.toString()} fallback={<Loading />}>
                <ProductList params={params.toString()} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
