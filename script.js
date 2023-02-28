import { attendees } from "./data/data.js";

const tableBodyEl = document.querySelector("tbody");
tableBodyEl.classList.add = ".table__body";

const InputFieldEl = document.querySelector(".input__field");

InputFieldEl.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value;

  const filteredResults = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderAttendees(
    filteredResults,
    "There are no attendees according to the entered term"
  );
});

function renderAttendees(attendees) {
  tableBodyEl.innerText = "";
  const table = document.querySelector(".table");
  const alertEl = document.querySelector(".alert");

  if (attendees.length) {
    alertEl.style.display = "none";

    table.appendChild(tableBodyEl);

    for (let i = 0; i < attendees.length; i++) {
      const row = document.createElement("tr");

      const cell1 = document.createElement("td");
      cell1.innerText = attendees[i].id;

      const cell2 = document.createElement("td");
      cell2.innerText = attendees[i].name;

      const cell3 = document.createElement("td");
      cell3.innerText = attendees[i].surname;

      const cell4 = document.createElement("td");
      cell4.innerText = attendees[i].age;

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
renderAttendees(attendees);

function sortAttendees(attendees) {
  const sort = document.querySelector(".select");
  sort.addEventListener("change", (event) => {
    const sortValue = event.target.value;
    if (sortValue === "ascending") attendees.sort((a, b) => a.age - b.age);
    else if (sortValue === "descending") {
      attendees.sort((a, b) => b.age - a.age);
    } else {
      attendees.sort((a, b) => a.id - b.id);
    }
    renderAttendees(attendees);
  });
}

sortAttendees(attendees);

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
