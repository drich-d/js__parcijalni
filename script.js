import { attendees } from "./data/data.js";

let filteredResults = attendees;

const tableBodyEl = document.querySelector("tbody");
tableBodyEl.classList.add = ".table__body";

const InputFieldEl = document.querySelector(".input__field");

InputFieldEl.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value;

  filteredResults = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderAttendees();
});

function renderAttendees() {
  tableBodyEl.innerText = "";
  const table = document.querySelector(".table");
  const alertEl = document.querySelector(".alert");

  if (filteredResults.length) {
    alertEl.style.display = "none";

    table.appendChild(tableBodyEl);

    for (let i = 0; i < filteredResults.length; i++) {
      const row = document.createElement("tr");

      const cell1 = document.createElement("td");
      cell1.innerText = filteredResults[i].id;

      const cell2 = document.createElement("td");
      cell2.innerText = filteredResults[i].name;

      const cell3 = document.createElement("td");
      cell3.innerText = filteredResults[i].surname;

      const cell4 = document.createElement("td");
      cell4.innerText = filteredResults[i].age;

      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      row.appendChild(cell4);

      tableBodyEl.appendChild(row);
    }
  } else {
    alertEl.style.display = "block";
  }
}
renderAttendees();

function sortAttendees() {
  const sort = document.querySelector(".select");
  sort.addEventListener("change", (event) => {
    const sortValue = event.target.value;
    if (sortValue === "ascending")
      filteredResults.sort((a, b) => a.age - b.age);
    else if (sortValue === "descending") {
      filteredResults.sort((a, b) => b.age - a.age);
    } else {
      filteredResults.sort((a, b) => a.id - b.id);
    }
    renderAttendees();
  });
}

sortAttendees();

// if (sortValue === "ascending") attendees.sort((a, b) => a.age - b.age);
// else {
//   attendees.sort((a, b) => b.age - a.age);

// }
// });
// }
// Ovo gore radi ascending i descending, ali ne default

// ILI UMJESTO FORA
// attendees.forEach(attendee => {
//     attendee.name

//     const row = document.createElement("tr");

//     const cell1 = document.createElement("td");
//     cell1.innerText = attendee.id;

//     const cell2 = document.createElement("td");
//     cell2.innerText = attendee.name;

//     const cell3 = document.createElement("td");
//     cell3.innerText = attendee.surname;

//     const cell4 = document.createElement("td");
//     cell4.innerText = attendee.age;

//     row.appendChild(cell1)
//     row.appendChild(cell2)
//     row.appendChild(cell3)
//     row.appendChild(cell4)

//     tableBodyEl.appendChild(row)
// }
// )
