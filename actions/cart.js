async function checkCoupon(state, formData) {
  const code = formData.get("code");
  if (code === "") {
    return {
        status: "error",
        message: "وارد کردن کد کوپن الزامی است"
    }
  }
}

export { checkCoupon };
