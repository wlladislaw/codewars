function getParticipants(handshakes) {
  let farmers = 0;
  while (handshakes > (farmers * (farmers - 1)) / 2) {
    farmers++;
  }
  return farmers;
}
// console.log(getParticipants(6));


function isIsogram(str){
  return Array.from(new Set(s.toLowerCase())).length === str.length ? true : false;
}


