import moment from 'moment-timezone';

// Fungsi format waktu untuk chat
export function formaterTimeChat(isoDate: any) {
  const now = moment();
  const date = moment.utc(isoDate); // Menggunakan waktu UTC dari ISO date
  if (now.diff(date, 'days') < 1) {
    return date.local().format('HH:mm'); // Mengonversi ke waktu lokal
  } else {
    return date.local().format('HH:mm, DD MMMM YYYY ');
  }
}

// Fungsi format waktu untuk daftar chat
export function formaterTimeChatList(isoDate: any) {
  const now = moment();
  const date = moment.utc(isoDate); // Menggunakan waktu UTC dari ISO date
  if (now.diff(date, 'days') < 1) {
    return date.local().format('HH:mm'); // Mengonversi ke waktu lokal
  } else {
    return date.local().format('DD MMM YYYY ');
  }
}

// Fungsi format waktu relatif
// export function formatRelativeTime(isoDate: any) {
//   const now = moment();
//   const date = moment.utc(isoDate); // Menggunakan waktu UTC dari ISO date
//   if (now.diff(date, "days") < 1) {
//     return date.local().startOf("hour").fromNow(); // Mengonversi ke waktu lokal
//   } else {
//     return date.local().format("LL"); // Mengonversi ke waktu lokal
//   }
// }

export function formatRelativeTime(isoDate: any) {
  const now = moment();
  const date = moment.utc(isoDate);
  const diffInMinutes = Math.floor((now - date) / (1000 * 60));
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)} hours ago`;
  } else {
    return date.local().format('DD MMMM YYYY');
  }
}
