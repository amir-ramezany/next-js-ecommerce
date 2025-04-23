"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { checkCoupon } from "@/actions/cart";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Coupon() {
  const [state, formAction] = useFormState(checkCoupon, {});

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` });
  }, [state]);
  return (
    <form action={formAction} className="col-12 col-md-6">
      <div className="input-group mb-3">
        <input
          name="code"
          type="text"
          className="form-control"
          placeholder="کد تخفیف"
        />
        <div className="h-100">
          <SubmitButton title="اعمال کد تخفیف" style="input-group-text" />
          {/* <button className="input-group-text" type="submit">
            اعمال کد تخفیف
          </button> */}
        </div>
      </div>
    </form>
  );
}
