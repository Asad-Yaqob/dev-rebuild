const orders = [
  { id: 1, item: "Keyboard", price: 3500, status: "delivered" },
  { id: 2, item: "Mouse", price: 1200, status: "pending" },
  { id: 3, item: "Monitor", price: 15000, status: "delivered" },
  { id: 4, item: "Webcam", price: 4500, status: "delivered" },
  { id: 5, item: "Headset", price: 800, status: "pending" },
];

// Filters to only "delivered" orders
// Maps that result to just the item names (an array of strings)
// Separately, calculates the total price of all delivered orders using reduce
// Using destructuring, pull out item and price from orders[0] into two standalone variables in one line
// Create a shallow copy of the orders array using spread, then explain (in a comment) what would happen if you mutated
// copy[0].price — would it affect orders[0].price? Why?

const deliveredOrders = orders.filter((order) => order.status === "delivered");
const itemNames = deliveredOrders.map((order) => order.item);

const initialValue = 0;

function reducer(acc, curr) {
  return acc + curr.price;
}

const totalPrice = deliveredOrders.reduce(reducer, initialValue);
const { item, price } = orders[0];

const copy = [...orders];
copy[0].price = 999;

// Explanation:
// On mutating  copy[0].price will mutate the orders[0].price also, spread operator creates a
// shallow copy means it have array top level architecture not the nested object, it just has the reference of item,
// here both copy and orders sharing the reference for each orders object.

// console.log("deliveredOrders: ", deliveredOrders);
// console.log("itemNames: ", itemNames);
// console.log("totalPrice: ", totalPrice);
// console.log("Destructuring of item and name: ");
// console.log(item);
// console.log(price);

// console.log(orders[0]);
// console.log(copy[0]);

const students = [
  { id: 1, name: "Ahmed", marks: { math: 85, science: 78, english: 90 } },
  { id: 2, name: "Sara", marks: { math: 45, science: 60, english: 55 } },
  { id: 3, name: "Bilal", marks: { math: 92, science: 88, english: 79 } },
  { id: 4, name: "Hina", marks: { math: 38, science: 42, english: 50 } },
  { id: 5, name: "Usman", marks: { math: 70, science: 65, english: 72 } },
];

// Tasks to implement

// 1. calculate a single student's average across all 3 subjects (use Object.values() + reduce)
// 2. return a new array of { name, average } for every student (use map, calling your getAverage function inside it)
// 3. return only students whose average is 50+ (use filter, reusing getAverage)
// 4. return the single student with the highest average (use reduce to find a max, not just averages)
// 5. return true/false, does the whole class have an average of 50+ (use every)
// 6. isAnyoneFailing(students) — return true/false (use some)
// 7. findStudentByName(students, name) — return one student object matching a name (use find)
// 8. getSubjectToppers(students) — an object like { math: "Bilal", science: "Bilal", english: "Ahmed" } —
// the top scorer per subject (harder — combine reduce + object building)
// 9. updateStudentMarks(student, newMarks) — return a new student object (don't mutate!) with marks merged/updated using spread —
// test that the original students array stays untouched afterward
// 10. getStudentSummary(student) — using destructuring (including nested), return a formatted string like
// "Ahmed scored 85 in math" pulling values out via destructuring, not dot notation.

// Task# 1: Solution.
function getAverage(student) {
  let subjects = Object.values(student.marks);
  let sumOfAllSubjects = subjects.reduce((acc, curr) => acc + curr, 0);

  let totalSubjects = subjects.length;
  let average = sumOfAllSubjects / totalSubjects;

  return average;
}

const average = getAverage(students[0]);
// console.log(average);

// Task# 2: Solution.
function getAllAverages(students) {
  const studentsNamesAndAverages = students.map((student) => {
    let average = getAverage(student);

    return {
      name: student.name,
      average,
    };
  });

  return studentsNamesAndAverages;
}

const averages = getAllAverages(students);
// console.log(averages);

// Task# 3: Solution.

function getPassingStudents(students) {
  const studentWith50PlusAverage = students.filter(
    (student) => getAverage(student) >= 50,
  );

  return studentWith50PlusAverage;
}

const passingStudents = getPassingStudents(students);
// console.log(passingStudents);

// Task# 4: Solution.

function getTopper(students) {
  return students.reduce((topper, currentStudent) => {
    let topperAverage = getAverage(topper);
    let currentStudentAverage = getAverage(currentStudent);

    if (topperAverage > currentStudentAverage) {
      return topper;
    } else {
      return currentStudent;
    }
  });
}
const topper = getTopper(students);

// console.log(topper);

// Task# 5: Solution.
function didEveryonePass(students) {
  return students.every((student) => getAverage(student) >= 50);
}

const isEveryonePassed = didEveryonePass(students);

// console.log(isEveryonePassed);

// Task# 6: Solution.

function isAnyoneFailing(students) {
  return students.some((student) => getAverage(student) < 50);
}

const isSomeoneFailed = isAnyoneFailing(students);

// console.log(isSomeoneFailed);

// Task# 7: Solution.

function findStudentByName(students, name) {
  return students.find((student) => student.name === name);
}

const student = findStudentByName(students, "Hina");
// console.log(student);

// Task# 8: Solution.
function getSubjectToppers(students) {
  return students.reduce(
    (toppers, currentStudent) => {
      let updatedToppers = { ...toppers }; // start with a copy of current toppers

      if (currentStudent.marks.math > updatedToppers.math.score) {
        updatedToppers.math = {
          name: currentStudent.name,
          score: currentStudent.marks.math,
        };
      }

      if (currentStudent.marks.science > updatedToppers.science.score) {
        updatedToppers.science = {
          name: currentStudent.name,
          score: currentStudent.marks.science,
        };
      }

      if (currentStudent.marks.english > updatedToppers.english.score) {
        updatedToppers.english = {
          name: currentStudent.name,
          score: currentStudent.marks.english,
        };
      }

      return updatedToppers; // ONE return, after all three checks have run
    },
    {
      math: { name: students[0].name, score: students[0].marks.math },
      science: { name: students[0].name, score: students[0].marks.science },
      english: { name: students[0].name, score: students[0].marks.english },
    },
  );
}
const toppers = getSubjectToppers(students);
// console.log(toppers);

function updateStudentMarks(student, newMarks) {
  return { ...student, marks: newMarks };
}

const updatedAhmedMarks = updateStudentMarks(students[0], {
  math: 65,
  science: 98,
  english: 70,
});

// console.log(updatedAhmedMarks);
// console.log(students[0]);

function getStudentSummary(student) {
  const {
    name,
    marks: { math, science, english },
  } = student;
  return `${name} scored ${math} in math, ${science} in science, and ${english} in english.`;
}

const summary =  getStudentSummary(students[0]);
// console.log(summary);

