import styles from "./page.module.css";
import WritePage from "./write/page";
import HistoryPage from "./histoy/page";
export default async function Home() {
  return (
    <>
      <div className="title">
        <h1>자동차 기록부</h1>
        <p>박원화의 원데이 프로젝트</p>
      </div>
      <main>
        <WritePage />
        <HistoryPage />
      </main>
      <footer></footer>
    </>
  );
}
