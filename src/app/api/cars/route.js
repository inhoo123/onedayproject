import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const carHistoryCreate = async (car) => {
  const result = await db.car_history.create({ data: car });
  return result;
};

// 애플리케이션 종료 시 연결 해제
process.on("exit", async () => {
  await db.$disconnect();
});
