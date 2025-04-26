"use server";

import { getFetch, postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { cookies } from "next/headers";

async function checkCoupon(state, formData) {
  const code = formData.get("code");
  if (code === "") {
    return {
      status: "error",
      message: "وارد کردن کد کوپن الزامی است",
    };
  }
  const token = cookies().get("token");
  const data = await postFetch(
    "/check-coupon",
    { code },
    { Authorization: `Bearer ${token.value}` }
  );

  if (data.status === "success") {
    return {
      status: data.status,
      message: "کد تخفیف شما اعمال شد",
      percent: data.data.percentage,
      code,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

async function getAddresses() {
  const token = cookies().get("token");
  const data = await getFetch("/user/addresses", {
    Authorization: `Bearer ${token.value}`,
  });
  return data;
}

export { checkCoupon, getAddresses };
