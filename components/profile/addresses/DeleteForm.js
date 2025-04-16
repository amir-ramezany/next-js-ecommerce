"use client";

import { deleteAddress } from "@/actions/profile";
import SubmitButton from "@/components/SubmitButton";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function DeleteForm({ addressId }) {
  const [stateDelete, formActionDelete] = useFormState(deleteAddress, {});
  function handleToast() {
    toast.error("حذف شد ");
  }
  useEffect(() => {
    toast(stateDelete?.message, { type: `${stateDelete?.status}` });
    // handleToast(); //if we use in effect it would called if we createform too cause we use revalidate in create action too
  }, [stateDelete]);

  return (
    <div onClick={handleToast}>
      <form action={formActionDelete} className="form-delete-address">
        <input type="hidden" name="address_id" value={addressId} />
        <SubmitButton title="حذف" style="btn btn-dark" />
      </form>
    </div>
  );
}
