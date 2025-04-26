"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { payment } from "@/actions/cart";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Payment({ cart, coupon, addressId }) {
  const [paymentState, formAction] = useFormState(payment, {});
  const router = useRouter();
  useEffect(() => {
    toast(paymentState?.message, { type: `${paymentState?.status}` });
    if (paymentState?.status === "success") {
      router.push(paymentState.url);
    }
  }, [paymentState, router]);

  return (
    <form action={formAction}>
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      {/* we tranform cart array to string cause in input values we cant use array in input values use the string form instead */}
      <input type="hidden" name="coupon" value={coupon} />
      <input type="hidden" name="address_id" value={addressId} />
      <SubmitButton title="پرداخت" style="user_option btn-auth mt-4" />
    </form>
  );
}
