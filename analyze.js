function averager(array) {
  let arrayItems = [...array];
  let runningCount = 0;
  arrayItems.forEach((item) => {
    runningCount += item;
  });
  return runningCount / arrayItems.length;
}

function minFinder(array) {
  let arrayItems = [...array];
  let minNumber = arrayItems[0];
  arrayItems.forEach((item) => {
    if (item < minNumber) {
      minNumber = item;
    }
  });
  return minNumber;
}

function maxFinder(array) {
  let arrayItems = [...array];
  let maxNumber = arrayItems[0];
  arrayItems.forEach((item) => {
    if (item > maxNumber) {
      maxNumber = item;
    }
  });
  return maxNumber;
}

function analyze(array) {
  return {
    average: averager(array),
    min: minFinder(array),
    max: maxFinder(array),
    length: array.length,
  };
}

export default analyze;
