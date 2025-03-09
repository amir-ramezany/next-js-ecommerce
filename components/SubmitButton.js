"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ title, style }) {
  const { pending } = useFormStatus();

  return (
    <div className="btn_box">
      <button type="submit" disabled={pending} className={style}>
        {title}
      </button>
      {pending && <div className="spinner-border spinner-border-sm ms-2"></div>}
    </div>
  );
}
