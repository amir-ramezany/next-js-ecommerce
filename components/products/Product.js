import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";

export default function Product({ product }) {
  const { name, description, primary_image, is_sale, price, sale_price } =
    product;
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
            <h5>{name}</h5>
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
              <a href="">
                <i className="bi bi-cart-fill text-white fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
