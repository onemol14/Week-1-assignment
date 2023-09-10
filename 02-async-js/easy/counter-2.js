function printCount(count) {
  console.clear();
  console.log(count);
  setTimeout(() => {
    printCount(count+1);
  }, count*1000);
}

printCount(1);