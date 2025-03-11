"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoriesList({ categories }) {
  //   const categorieName = categories.map((categories) => categories.name);

  //   return (
  //     <div class="filter-list">
  //       <div class="form-label">دسته بندی</div>
  //       <ul>
  //         {categorieName.map((name, index) => (
  //           <li key={index} class="my-2 cursor-pointer filter-list-active">
  //             {name}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleCategory(id) {
    const params = new URLSearchParams(searchParams);
    params.set("category", id);
    params.delete("page");
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      <ul>
        {categories.map((category) => (
          <li
            onClick={() => handleCategory(category.id)}
            key={category.id}
            className={
              searchParams.has("category") &&
              searchParams.get("category") == category.id
                ? "my-2 filter-list-active cursor-pointer"
                : "my-2 cursor-pointer"
            }
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
