function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(person => {
	  let name = document.createElement("h1");
    content.appendChild(name);
    name.innerText = person.name;
    let job = document.createElement("h2");
    content.appendChild(job);
    job.innerText = person.job;
  });
}


let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];


console.log(listOfNames)
listOfNames(people);
