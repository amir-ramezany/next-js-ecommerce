import CreateForm from "@/components/profile/addresses/CreateForm";

export default function AddressesPage() {
  return (
    <>
      <CreateForm />
      <hr />
      <div class="card card-body">
        <div class="row g-4">
          <div class="col col-md-6">
            <label class="form-label">عنوان</label>
            <input type="text" value="منزل" class="form-control" />
          </div>
          <div class="col col-md-6">
            <label class="form-label">شماره تماس</label>
            <input type="text" value="09111111111" class="form-control" />
          </div>
          <div class="col col-md-6">
            <label class="form-label">کد پستی</label>
            <input type="text" value="4586-2115" class="form-control" />
          </div>
          <div class="col col-md-6">
            <label class="form-label">استان</label>
            <select class="form-select">
              <option selected>تهران</option>
              <option value="1">اصفهان</option>
              <option value="2">فارس</option>
              <option value="3">یزد</option>
            </select>
          </div>
          <div class="col col-md-6">
            <label class="form-label">شهر</label>
            <select class="form-select">
              <option selected>تهران</option>
              <option value="1">اصفهان</option>
              <option value="2">شیراز</option>
              <option value="3">یزد</option>
            </select>
          </div>
          <div class="col col-md-12">
            <label class="form-label">آدرس</label>
            <textarea type="text" rows="5" class="form-control">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </textarea>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <button class="btn btn-primary">ویرایش</button>
          <button class="btn btn-dark">حذف</button>
        </div>
      </div>
      {/* <hr />
        <div class="card card-body">
          <div class="row g-4">
            <div class="col col-md-6">
              <label class="form-label">عنوان</label>
              <input type="text" value="محل کار" class="form-control" />
            </div>
            <div class="col col-md-6">
              <label class="form-label">شماره تماس</label>
              <input type="text" value="09000000000" class="form-control" />
            </div>
            <div class="col col-md-6">
              <label class="form-label">کد پستی</label>
              <input type="text" value="4586-2115" class="form-control" />
            </div>
            <div class="col col-md-6">
              <label class="form-label">استان</label>
              <select class="form-select">
                <option selected>تهران</option>
                <option value="1">اصفهان</option>
                <option value="2">فارس</option>
                <option value="3">یزد</option>
              </select>
            </div>
            <div class="col col-md-6">
              <label class="form-label">شهر</label>
              <select class="form-select">
                <option selected>تهران</option>
                <option value="1">اصفهان</option>
                <option value="2">شیراز</option>
                <option value="3">یزد</option>
              </select>
            </div>
            <div class="col col-md-12">
              <label class="form-label">آدرس</label>
              <textarea type="text" rows="5" class="form-control">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </textarea>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <button class="btn btn-primary">ویرایش</button>
            <button class="btn btn-dark">حذف</button>
          </div>
        </div> */}
    </>
  );
}
