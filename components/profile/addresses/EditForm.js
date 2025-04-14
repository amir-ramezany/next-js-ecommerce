"use client";

import { editAddress } from "@/actions/profile";
import SubmitButton from "@/components/SubmitButton";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function EditForm({ address, cities, provinces }) {
  const [citiesFilter, setCitiesFilter] = useState(
    cities.filter((city) => city.province_id === provinces[0].id)
  );
  const [stateEdit, formActionEdit] = useFormState(editAddress, {});

  useEffect(() => {
    toast(stateEdit?.message, { type: `${stateEdit?.status}` });
  }, [stateEdit]);

  function changeProvince(e) {
    setCitiesFilter(
      cities.filter((city) => city.province_id === +e.target.value)
    ); //province_id is number
  }
  return (
    <>
      <form action={formActionEdit} className="card card-body mt-3">
        <div className="row g-4">
          <div className="col col-md-6">
            <label className="form-label">عنوان</label>
            <input
              name="title"
              type="text"
              defaultValue={address.title}
              className="form-control"
            />
          </div>
          <div className="col col-md-6">
            <label className="form-label">شماره تماس</label>
            <input
              name="cellphone"
              type="text"
              defaultValue={address.cellphone}
              className="form-control"
            />
          </div>
          <div className="col col-md-6">
            <label className="form-label">کد پستی</label>
            <input
              name="postal_code"
              type="text"
              defaultValue={address.postal_code}
              className="form-control"
            />
          </div>
          <div className="col col-md-6">
            <label className="form-label">استان</label>
            <select
              name="province_id"
              defaultValue={address.province_id}
              className="form-select"
              onChange={changeProvince}
            >
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col col-md-6">
            <label className="form-label">شهر</label>
            <select
              name="city_id"
              defaultValue={address.city_id}
              className="form-select"
            >
              {citiesFilter.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col col-md-12">
            <label className="form-label">آدرس</label>
            <textarea
              name="address"
              defaultValue={address.address}
              rows="5"
              className="form-control"
            ></textarea>
          </div>
          <input type="hidden" name="address_id" value={address.id} />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <SubmitButton title="ویرایش" style="btn btn-primary mt-4" />
          <button type="submit" className="btn btn-dark mt-4">
            حذف
          </button>
        </div>
      </form>
    </>
  );
}
