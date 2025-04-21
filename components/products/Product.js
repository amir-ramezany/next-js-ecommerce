"use client";

import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Product({ product }) {
  const { name, description, primary_image, is_sale, price, sale_price, slug } =
    product;

  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(removeFromCart(product.id)); // argument of our reducers is action payload
    dispatch(addToCart({ product, qty: 1 }));
    toast.success("محصول به سبد خرید اضافه شد");
  }

  return (
    <div className="col-sm-6 col-lg-4">
      <div className="box">
        <div>
          <div className="img-box">
            <Image
              src={primary_image}
              width="100"
              height="65"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="product-image"
              placeholder="blur"
              blurDataURL={getBlurDataURL()}
            />
          </div>
          <div className="detail-box">
            <h5>
              <Link href={`products/${slug}`}>{name}</Link>
            </h5>
            <p>{description}</p>
            <div className="options">
              {is_sale ? (
                <h6>
                  <span>{numberFormat(sale_price)} تومان</span>
                  <del className="me-1">{numberFormat(price)} تومان</del>
                </h6>
              ) : (
                <>
                  <span>{numberFormat(price)} تومان</span>
                </>
              )}
              <button onClick={() => handleAddToCart(product)}>
                <i className="bi bi-cart-fill text-white fs-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
