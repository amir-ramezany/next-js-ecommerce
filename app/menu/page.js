import CategoriesList from "@/components/menu/CategoriesList";
import Loading from "@/components/menu/Loading";
import ProductList from "@/components/menu/ProductList";
import Search from "@/components/menu/Search";
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
            <div>
              <label className="form-label">مرتب سازی</label>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  بیشترین قیمت
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  checked
                />
                <label className="form-check-label cursor-pointer">
                  کمترین قیمت
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  پرفروش ترین
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  با تخفیف
                </label>
              </div>
            </div>
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
