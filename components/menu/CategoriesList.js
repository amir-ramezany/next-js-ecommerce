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
  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="my-2 cursor-pointer">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
