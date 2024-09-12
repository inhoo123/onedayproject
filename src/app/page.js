import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/dist/server/api-utils";
import { carHistoryCreate } from "./api/cars/route";
export default function Home() {
  const inputTags = {
    car_start_time: "carStartTime",
    car_end_time: "carEndTime",
    car_current_distance: "carCurrnetDistance",
    car_required_items: "carRequiredItems",
    car_location: "carLocation",
  };

  const createCarHistory = async (formData) => {
    "use server";
    const rawFormData = {
      car_start_time: formData.get(inputTags.car_start_time),
      car_end_time: formData.get(inputTags.car_end_time),
      car_current_distance: formData.get(inputTags.car_current_distance),
      car_required_items: formData.get(inputTags.car_required_items),
      car_location: formData.get(inputTags.car_location),
    };
    await carHistoryCreate(rawFormData);
    redirect("/");
  };

  return (
    <div className={styles.page}>
      <h1>자동차 기록부</h1>
      <main className={styles.main}></main>
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
          <button type="submit">전송</button>
        </span>
      </form>
      <table>
        <thead>
          <th>NO</th>
          <th>구분</th>
          <th>시작일시</th>
          <th>종료일시</th>
          <th>소요비용</th>
          <th>장소</th>
        </thead>
        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tbody>
      </table>
      <footer className={styles.footer}></footer>
    </div>
  );
}
