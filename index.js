let family = [
  { name: "moolchand", age: calculate_age(new Date(1971, 4, 23)) },
  { name: "taravati", age: calculate_age(new Date(1972, 1, 1)) },
  { name: "kavita", age: calculate_age(new Date(1990, 2, 16)) },
  { name: "guru", age: calculate_age(new Date(1992, 8, 11)) },
  { name: "dushyant", age: calculate_age(new Date(1995, 10, 8)) },
  { name: "harsh", age: calculate_age(new Date(2000, 10, 21)) },
];

function searchMember() {
  // Get the input name
  let name = document.getElementById("input").value;

  // Filter the family
  let res = family.filter(
    (item) => item.name.indexOf(name.toLowerCase()) !== -1
  );

  // Put the resultant arrray
  const list = document.getElementById("list");
  list.innerHTML = res
    .map(
      (item, i) =>
        `<div class='list-item'>${i + 1}. ${item.name} - ${item.age}</div><br/>`
    )
    .join("");
}

//dob

function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
//   console.log(calculate_age(new Date(1995, 10, 8)));
// let dushy = calculate_age(new Date(1995, 10, 8));
