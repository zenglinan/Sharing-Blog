
export default function (date) { 
  let newDate = new Date(date)
  return {
    day: newDate.getDate(),
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    hour: newDate.getHours(),
    minute: newDate.getMinutes()
  }
}