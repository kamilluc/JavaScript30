// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn15thCentaury = inventors.filter(person => {
  return person.year > 1500 && person.year < 1601;
});
// console.log(bornIn15thCentaury);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsFirstLastName = inventors.map(person => {
  return { fistName: person.first, lastName: person.last };
});
// console.log(inventorsFirstLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((p1, p2) => {
  return p1.year - p2.year;
});
// sortedInventors.forEach(e => console.log(e.year));
// console.log(sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const sumInventorsAge = inventors.reduce((acc, person) => {
  return (acc += person.passed - person.year);
}, 0);
// console.log(sumInventorsAge);

// 5. Sort the inventors by years lived
const inventorsSortedByAgeSpan = inventors.sort((p1, p2) => {
  return p1.passed - p1.year - (p2.passed - p2.year);
});
// console.log(inventorsSortedByAgeSpan);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise (mod by Me to be more difficult)
// Sort the people alphabetically by **first** name
const sortedPeople = people
  .map(person => {
    const splitArr = person.split(", ");
    return (
      "" + splitArr[1] + ", " + splitArr[0].split(0, splitArr[0].length - 2)
    );
  })
  .sort();
// console.log(sortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

function sumInstances(data) {
  const tmpArr = [];
  const tmpArr2 = [];
  data.forEach(element => {
    if (tmpArr.includes(element)) {
      tmpArr2[tmpArr.indexOf(element)]++;
    } else {
      tmpArr.push(element);
      tmpArr2.push(1);
    }
  });
  const result = [];
  tmpArr.forEach((key, index) => {
    result.push({ key: key, count: tmpArr2[index] });
  });
  return result;
}
// console.log(sumInstances(data));
