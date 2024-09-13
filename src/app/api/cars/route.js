import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const carHistoryCreate = async (rawFormData) => {
  try {
    const startDate = new Date(rawFormData.car_start_time);
    const endDate = new Date(rawFormData.car_end_time);
    const result = await db.car_history.create({
      data: {
        car_start_time: startDate,
        car_end_time: endDate,
        car_current_distance: parseInt(rawFormData.car_current_distance),
        car_required_items: rawFormData.car_required_items,
        car_location: rawFormData.car_location,
      },
    });
    db.$disconnect(); // 웬만하면 애플리케이션 종료 시 한 번만 호출하는 게 좋음
    return result;
  } catch (error) {
    console.log(error);
    db.$disconnect;
  }
};
export const historySellectAll = async () => {
  const historys = await db.car_history.findMany();
  console.log("historys", historys);
  return historys;
};
