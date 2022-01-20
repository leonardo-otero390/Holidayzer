export const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

export function isTodayHoliday() {
  const today = new Date();
  return holidays.find(
    (holiday) => holiday.date === today.toLocaleDateString()
  );
}

export function getHolidayByMonth(month) {
  const monthHolidays = holidays.filter((holiday) => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getMonth() +1 === month;
  });
  return monthHolidays;
}

console.log(getHolidayByMonth(1));
console.log(getHolidayByMonth("1"));
console.log(getHolidayByMonth("a"));
