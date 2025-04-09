export default function CreateForm() {
  return (
    <form>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        ایجاد آدرس جدید
      </button>
      <div class="collapse mt-3" id="collapseExample">
        <div class="card card-body">
          <div class="row g-4">
            <div class="col col-md-6">
              <label class="form-label">عنوان</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col col-md-6">
              <label class="form-label">شماره تماس</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col col-md-6">
              <label class="form-label">کد پستی</label>
              <input type="text" class="form-control" />
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
              <textarea type="text" rows="5" class="form-control"></textarea>
            </div>
          </div>
          <div>
            <button class="btn btn-primary mt-4">ایجاد</button>
          </div>
        </div>
      </div>
    </form>
  );
}
