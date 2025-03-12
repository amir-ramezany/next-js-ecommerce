"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sort() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  function handleSort(type) {
    const params = new URLSearchParams(searchParams);
    params.set("sort", type);
    params.delete("page");
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div>
      <label className="form-label">مرتب سازی</label>
      <div className="form-check my-2">
        <input
          onChange={() => handleSort("max")}
          checked={
            searchParams.has("sort") && searchParams.get("sort") == "max"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">بیشترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
          onChange={() => handleSort("min")}
          checked={
            searchParams.has("sort") && searchParams.get("sort") == "min"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">کمترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
          onChange={() => handleSort("bestseller")}
          checked={
            searchParams.has("sort") && searchParams.get("sort") == "bestseller"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">پرفروش ترین</label>
      </div>
      <div className="form-check my-2">
        <input
          onChange={() => handleSort("sale")}
          checked={
            searchParams.has("sort") && searchParams.get("sort") == "sale"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">با تخفیف</label>
      </div>
    </div>
  );
}
