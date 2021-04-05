export const TimeStamp = (date) => {
  var m = new Date(date);
  var dateString =
    m.getFullYear() +
    "-" +
    ("0" + (m.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + m.getDate()).slice(-2);

  return dateString;
};
