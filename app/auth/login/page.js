"use client";

import CheckOtpForm from "@/components/auth/CheckOtpForm";
import LoginForm from "@/components/auth/LoginForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [step, setStep] = useState(0); // 0 -> loginform card  //1 -> otpform card
  const [otp, setOtp] = useState(null);
  useEffect(() => {
    if (otp) {
      //copied to clipboard automatically
      navigator.clipboard
        .writeText(otp)
        .then(() => {
          toast.success("کد تایید در کلیپبورد کپی شد");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
      alert(`کد تایید : ${otp}`);
    }
  }, [otp]);

  return (
    <section className="auth_section book_section">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            {/* <div className="card">
              <div className="card-body"> */}
            {/* <div className="form_container">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">ایمیل</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">رمز عبور</label>
                      <input type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-auth">
                      ورود
                    </button>
                  </form>
                </div> */}

            {/* <h6 className="mt-4">
                  در صورتی که حساب ندارید روی
                  <a href="register.html" style="color: #e69c00;">
                    عضویت
                  </a>
                  کلیک کنید
                </h6>
              </div>
            </div> */}
            <div className="card">
              {step === 0 && <LoginForm setStep={setStep} setOtp={setOtp} />}
              {step === 1 && <CheckOtpForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
