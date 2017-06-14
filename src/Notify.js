//__способы экспортировать:

//__1.
// export default (message) {
//   alert(message);
// }


//__2.
// export function notify(message) {
//   alert(message);
// }
//
// export function log(message) {
//   console.log(message);
// }


//__3.
function announce(message) {
  alert(message);
}

function log(message) {
  console.log(message);
}

export default {
  announce: announce,
  log: log
}
