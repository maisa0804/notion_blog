// This function is for converting date into string
const dateConvertorToLocalTime = (date: string) => {
  const dateToConvert = new Date(date);
  const formatedDate = dateToConvert.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    timeZone: "Asia/Tokyo",
  });
  return formatedDate
};

export default dateConvertorToLocalTime;