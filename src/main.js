// Search Query

const search = prompt("Search With Name & Board :");

// Matching Data

const result = studentsInfo.filter(
  (item) =>
    item.name === search ||
    item.regNo === search ||
    item.rollNo === search ||
    item.board === search
);

const matchFound = [];

result.forEach((prop, index) => {
  matchFound.push(
    `Name = ${prop.name}, Bangla = ${prop.markPerSub.ban}, GPA = ${
      getResult(prop.markPerSub.ban).gpa
    }, Grade = ${getResult(prop.markPerSub.ban).grade}
    English = ${prop.markPerSub.eng}, GPA = ${
      getResult(prop.markPerSub.eng).gpa
    }, Grade = ${getResult(prop.markPerSub.eng).grade}
    Math = ${prop.markPerSub.math}, GPA = ${
      getResult(prop.markPerSub.math).gpa
    }, Grade = ${getResult(prop.markPerSub.math).grade}
    Science = ${prop.markPerSub.science}, GPA = ${
      getResult(prop.markPerSub.science).gpa
    }, Grade = ${getResult(prop.markPerSub.science).grade}
    Social Science = ${prop.markPerSub.socialScience}, GPA = ${
      getResult(prop.markPerSub.socialScience).gpa
    }, Grade = ${getResult(prop.markPerSub.socialScience).grade}
    Religion = ${prop.markPerSub.religion}, GPA = ${
      getResult(prop.markPerSub.religion).gpa
    }, Grade = ${getResult(prop.markPerSub.religion).grade}`
  );
});

console.log(matchFound);
