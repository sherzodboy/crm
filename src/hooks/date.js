export const months = [
  { short: 'Jan', full: 'January' },
  { short: 'Feb', full: 'February' },
  { short: 'Mar', full: 'March' },
  { short: 'Apr', full: 'April' },
  { short: 'May', full: 'May' },
  { short: 'Jun', full: 'June' },
  { short: 'Jul', full: 'July' },
  { short: 'Aug', full: 'August' },
  { short: 'Sep', full: 'September' },
  { short: 'Oct', full: 'Octobek' },
  { short: 'Nov', full: 'November' },
  { short: 'Dec', full: 'December' },
];

export const weeks = [
  { full: 'Sunday', short: 'Su' },
  { full: 'Monday', short: 'Mo' },
  { full: 'Thuesday', short: 'Thu' },
  { full: 'Wednesday', short: 'We' },
  { full: 'Thursday', short: 'Thr' },
  { full: 'Friday', short: 'Fr' },
  { full: 'Saturday', short: 'Sa' },
];

function getMinusDate(number) {
  let date = new Date(new Date().setDate(new Date().getDate() - number));
  return date;
}
function getPlusDate(number) {
  let date = new Date(new Date().setDate(new Date().getDate() + number));
  return date;
}

const useDate = () => {
  const d = new Date();
  let day = weeks[d.getDay()];
  let date = d.getDate();
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let week = (count) => [
    getMinusDate(3 - count),
    getMinusDate(2 - count),
    getMinusDate(1 - count),
    getMinusDate(0 - count),
    getPlusDate(1 + count),
    getPlusDate(2 + count),
    getPlusDate(3 + count),
  ];

  return { year, day, month, date, week };
};

export default useDate;
