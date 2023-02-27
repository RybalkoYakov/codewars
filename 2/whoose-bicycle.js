const first = {
                'algebra': 7,
                'history': 8,
                'physics': 8,
                'geography': 9,
                'chemistry': 1
              }
const second = {
                'algebra': 8,
                'history': 7,
                'physics': 8,
                'geography': 9,
                'chemistry': 10
              }
const third = {
                'algebra': 6,
                'history': 5,
                'physics': 5,
                'geography': 9,
                'chemistry': 10
              }

function whoseBicycle(diary1, diary2, diary3) {
  const diaries = {...arguments};
  const marks = countDiariesMarks(diaries);

  const ageTable = {
    '0': 14,
    '1': 9,
    '2': 8,
  }

  const lookupTable = {
    '0': 'first',
    '1': 'second',
    '2': 'third',
  }

  function countDiaryMarks(diary) {
    let sum = 0;
    Object.keys(diary).forEach(subject => {
       sum += diary[subject];
    })
    return sum;
  }

  function countDiariesMarks(diaries) {
    const marks = [];
    Object.keys(diaries).forEach((diary,index) => {
      let result = {};
      result[`${index}`] = countDiaryMarks(diaries[diary]);
      marks.push(result);
    })
    return marks;
  }



  return marks;
}

console.log(whoseBicycle(first,second,third))