"use client";

import { login } from "@/actions/auth";
import SubmitButton from "@/components/SubmitButton";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [stateLogin, formActionLogin] = useFormState(login, {});

  useEffect(() => {
    toast(stateLogin?.message, { type: stateLogin?.status });
  }, [stateLogin]);

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
              <div className="card-body">
                <div className="form_container">
                  <form action={formActionLogin}>
                    <div className="mb-3">
                      <label className="form-label">شماره موبایل</label>
                      <input
                        name="cellphone"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <SubmitButton
                      title="ورود"
                      style="btn btn-primary btn-auth"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
