"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
// import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function login(stateLogin, formData) {
  const phoneNumber = formData.get("cellphone");

  if (phoneNumber === "") {
    return {
      status: "error",
      message: "شماره موبایل الزامی است.",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(phoneNumber)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل معتبر نیست.",
    };
  }
  const data = await postFetch("/auth/login", { cellphone: phoneNumber });
  if (data.status === "success") {
    cookies().set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, //seconsds //1 week
    });
    return {
      status: data.status,
      message: "کد تایید با موفقیت ارسال شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

async function checkOtp(stateCheckOtp, formData) {
  const otp = formData.get("otp");
  if (otp === "") {
    return {
      status: "error",
      message: "ورود کد تایید الزامی است ",
    };
  }
  const pattern = /^[0-9]{6}$/;
  if (!pattern.test(otp)) {
    return {
      status: "error",
      message: "کد ورود معتبر نیست.",
    };
  }

  const loginToken = cookies().get("login_token");
  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی شما معتبر نیست. یکبار دیگر تلاش کنید",
    };
  }

  const data = await postFetch("/auth/check-otp", {
    otp,
    login_token: loginToken.value,
  });
  if (data?.status === "success") {
    cookies().delete("login_token");
    cookies().set({
      name: "token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, //seconsds //1 week
    });
    return {
      status: data.status,
      message: "با موفقیت وارد شدید.",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: "کد ورود صحیح نمی باشد .",
    };
  }
}

async function resendOtp(stateResendOtp, formData) {
  const loginToken = cookies().get("login_token");

  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی شما معتبر نیست. یکبار دیگر تلاش کنید",
    };
  }

  const data = await postFetch("/auth/resend-otp", {
    login_token: loginToken.value,
  });

  if (data.status === "success") {
    cookies().set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return {
      status: data.status,
      message: "کد ورود دوباره برای شما ارسال شد",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

async function me() {
  const token = cookies().get("token");
  if (!token) {
    return {
      error: "not authorized",
    };
  }
  const data = await postFetch(
    "/auth/me",
    {},
    { Authorization: `Bearer ${token.value}` }
  );
  if (data?.status === "success") {
    return {
      user: data.data,
    };
  } else {
    return {
      error: "User Forbidden",
    };
  }
}

async function logout() {
  const token = cookies().get("token");
  if (!token) {
    return {
      error: "not authorized",
    };
  }

  const data = await postFetch(
    "/auth/logout",
    {},
    { Authorization: `Bearer ${token.value}` }
  );
  if (data?.status === "success") {
    cookies().delete("token");
    return {
      status: data.status,
      message: "از حساب کاربری خود خارج شدید.",
    };
  } else {
    return {
      status: data.status,
      message: "User Forbidden",
    };
  }
}

export { login, checkOtp, me, logout, resendOtp };
