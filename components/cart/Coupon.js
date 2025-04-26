"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { checkCoupon } from "@/actions/cart";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Coupon({ setCoupon }) {
  const [state, formAction] = useFormState(checkCoupon, {});

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` });
    if (state.status === "success") {
      setCoupon({
        code: state?.code,
        percent: state?.percent,
      });
    }
  }, [state, setCoupon]);
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
        </div>
      </div>
    </form>
  );
}
