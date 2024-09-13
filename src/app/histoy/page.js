import { historySellectAll } from "../api/cars/route";
import styles from "../page.module.css";
const HistoryPage = async () => {
  const historys = await historySellectAll();

  const historyList = historys.map((history) => (
    <div>
      <li>{history.car_no}</li>
      <li>{new Date(history.car_start_time).toLocaleDateString()}</li>
      <li>{new Date(history.car_end_time).toLocaleDateString()}</li>
      <li>{history.car_current_distance}</li>
      <li>{history.car_required_items}</li>
      <li>{history.car_location}</li>
    </div>
  ));
  return (
    <>
      <ul className="history_title">
        <li>NO</li>
        <li>구분</li>
        <li>시작일시</li>
        <li>종료일시</li>
        <li>소요비용</li>
        <li>장소</li>
      </ul>
      <ul className="history_list">{historyList}</ul>
    </>
  );
};

export default HistoryPage;
