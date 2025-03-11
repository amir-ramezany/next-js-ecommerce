"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Paginate({ links }) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePage(page) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {links.slice(1, -1).map((link, index) => (
          <li
            key={index}
            className={link.active ? "page-item active" : "page-item"}
          >
            <button
              onClick={() => handlePage(link.label)}
              className="page-link"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
