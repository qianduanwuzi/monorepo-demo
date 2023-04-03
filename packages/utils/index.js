import dayjs from "dayjs";
export const format = (time, f = "YYYY-MM-DD") => {
  return dayjs(time).format(f);
};
