const FormatDate = () => {
  const date = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const monthOfYear = monthsOfYear[date.getMonth()];
  const dayOfMonth = date.getDate();
  let daySuffix = "th";

  if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
    daySuffix = "st";
  } else if (dayOfMonth === 2 || dayOfMonth === 22) {
    daySuffix = "nd";
  } else if (dayOfMonth === 3 || dayOfMonth === 23) {
    daySuffix = "rd";
  }

  const formattedDate = `${dayOfWeek} ${monthOfYear} ${dayOfMonth}${daySuffix}`;
  return formattedDate;
};
export default FormatDate;
