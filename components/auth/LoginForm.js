"use client";
import { login } from "@/actions/auth";
import SubmitButton from "@/components/SubmitButton";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function LoginForm({ setStep, setOtp }) {
  const [stateLogin, formActionLogin] = useFormState(login, {});
  const loginInputRef = useRef(null);
  useEffect(() => {
    loginInputRef.current?.focus();
  }, []);

  useEffect(() => {
    toast(stateLogin?.message, { type: stateLogin?.status });
    if (stateLogin?.status === "success") {
      setStep(1);
      setOtp(stateLogin?.otp);
    }
  }, [stateLogin]);
  return (
    <div className="card-body">
      <div className="form_container">
        <form action={formActionLogin}>
          <div className="mb-3">
            <label className="form-label">شماره موبایل</label>
            <input
              ref={loginInputRef}
              name="cellphone"
              type="text"
              className="form-control"
            />
          </div>
          <SubmitButton title="ورود" style="btn btn-primary btn-auth" />
        </form>
      </div>
    </div>
  );
}
