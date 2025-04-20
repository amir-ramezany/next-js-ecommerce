"use client";

import { logout } from "@/actions/auth";
import { authConext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function Layout({ children }) {
  const [stateLogout, logoutAction] = useFormState(logout, {});
  const { logoutContext } = useContext(authConext);
  const router = useRouter();
  const formRef = useRef(null);

  function handleClick() {
    // if (stateLogout?.status === "success") {

    //   toast.success(stateLogout?.message);
    // } else {
    //   toast.error(stateLogout?.message);
    // }
    toast.success("از حساب کاربری خود خارج شدید. ");
    formRef.current?.requestSubmit();
    logoutContext();
    router.push("/");
  }

  return (
    <section className="profile_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Link href="/profile">اطلاعات کاربر</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/addresses">آدرس ها</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/orders">سفارشات</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/transactions">تراکنش ها</Link>
              </li>
              <li className="list-group-item">
                <a href="#" onClick={handleClick}>
                  خروج
                </a>
              </li>
            </ul>
          </div>
          <form ref={formRef} action={logoutAction} className="d-none"></form>
          <div className="col-sm-12 col-lg-9">{children}</div>
        </div>
      </div>
    </section>
  );
}
