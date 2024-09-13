import { redirect } from "next/dist/server/api-utils";
import { carHistoryCreate } from "../api/cars/route";
import styles from "../page.module.css";
const WritePage = () => {
  const inputTags = {
    car_start_time: "carStartTime",
    car_end_time: "carEndTime",
    car_current_distance: "carCurrentDistance",
    car_required_items: "carRequredItems",
    car_location: "carLocation",
  };

  const createCarHistory = async (formData) => {
    "use server";
    console.log("formData", formData);
    const rawFormData = {
      car_start_time: formData.get(inputTags.car_start_time),
      car_end_time: formData.get(inputTags.car_end_time),
      car_current_distance: formData.get(inputTags.car_current_distance),
      car_required_items: formData.get(inputTags.car_required_items),
      car_location: formData.get(inputTags.car_location),
    };
    await carHistoryCreate(rawFormData);
    console.log("폼데이터", rawFormData);
    redirect("/"); //이거왜안됨
  };

  return (
    <div>
      <form action={createCarHistory} method="POST">
        <span>
          <input
            type="date"
            placeholder="시작일시"
            name={inputTags.car_start_time}
          />
        </span>
        <span>
          <input
            type="date"
            placeholder="종료일시"
            name={inputTags.car_end_time}
          />
        </span>
        <span>
          <input
            type="text"
            placeholder="현재거리"
            name={inputTags.car_current_distance}
          />
        </span>
        <span>
          <input
            type="text"
            placeholder="소요비용"
            name={inputTags.car_required_items}
          />
        </span>
        <span>
          <input type="text" placeholder="장소" name={inputTags.car_location} />
        </span>
        <span>
          <input type="submit" value="보내기" />
        </span>
      </form>
    </div>
  );
};
export default WritePage;
