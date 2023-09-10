setInterval(() => {
  let currentTime = new Date();
  console.clear();
  console.log(currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds());
}, 1000);