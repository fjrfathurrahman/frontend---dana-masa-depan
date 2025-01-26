import moment, { locale } from "moment";
import "moment/locale/id";

locale("id-ID");

function formatedCurrency(value: number) {
  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}

function formattedDate(value: string): string {
  const now = moment(); // Waktu saat ini
  const inputTime = moment(value); 
  const duration = moment.duration(now.diff(inputTime));
  
  if (duration.asSeconds() < 60) {
    return `${Math.floor(duration.asSeconds())} detik yang lalu`;
  } else if (duration.asMinutes() < 60) {
    return `${Math.floor(duration.asMinutes())} menit yang lalu`;
  } else if (duration.asHours() < 24) {
    return `${Math.floor(duration.asHours())} jam yang lalu`;
  } else if (duration.asDays() < 2) {
    return `Kemarin, ${inputTime.format("HH:mm")}`;
  } else {
    return inputTime.format("dddd, D MMM"); 
  }
}

function formattedDateOnly(value: string): string {
  const inputTime = moment(value); 
  return inputTime.format("dddd, D MMM YYYY"); 
}


export { formatedCurrency, formattedDate, formattedDateOnly };