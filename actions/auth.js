"use server";

function login(stateLogin, formData) {
  const phoneNumber = formData.get("cellphone");

  if (phoneNumber === "") {
    return {
      status: "error",
      message: "شماره موبایا الزامی است.",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(phoneNumber)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل معتبر نیست.",
    };
  }
}

export { login };
