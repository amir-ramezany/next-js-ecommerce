"use client";

import { checkOtp } from "@/actions/auth";
import SubmitButton from "@/components/SubmitButton";
import { authConext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import ResendOtpButton from "./ResendOtpButton";
export default function CheckOtpForm() {
  const [stateOtp, formActionOtp] = useFormState(checkOtp, {});
  const checkOtpInputRef = useRef(null);
  const { loginContext } = useContext(authConext);
  const router = useRouter();

  useEffect(() => {
    toast(stateOtp?.message, { type: stateOtp?.status });
    if (stateOtp?.status === "success") {
      loginContext(stateOtp.user);
      router.push("/");
    }
    checkOtpInputRef.current?.focus();
  }, [stateOtp]);

  return (
    <div className="card-body ">
      <div className="form_container  position-relative ">
        <form action={formActionOtp}>
          <div className="mb-3">
            <label className="form-label"> کد تایید </label>
            <input
              ref={checkOtpInputRef}
              name="otp"
              type="text"
              className="form-control"
            />
          </div>

          <SubmitButton title="تایید" style="btn btn-primary btn-auth" />
        </form>
        <ResendOtpButton />
      </div>
    </div>
  );
}
