'use strict';

const body = document.querySelector('body');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const listSalary = document.querySelector('tbody').children;

const TITLES = {
  Salary: 4,
  Age: 3,
  Office: 2,
  Position: 1,
  Name: 0,
};

class Form {
  constructor(className) {
    this.form = document.createElement('form');
    this.className = className;
    this.btn = document.createElement('button');
  }

  createForm(...cls) {
    this.form.className = this.className;

    cls.forEach((el) => {
      const label = document.createElement('label');

      label.textContent = `${el.dataQa.slice(0, 1).toUpperCase() + el.dataQa.slice(1)}:`;
      label.appendChild(el.randerIt());

      this.form.appendChild(label);
    });

    this.btn.textContent = 'Save to table';
    this.form.appendChild(this.btn);

    body.appendChild(this.form);
  }
}

class Input {
  constructor(inName, type, dataQa) {
    this.elem = document.createElement('input');
    this.inName = inName;
    this.dataQa = dataQa;
    this.type = type;
  }

  randerIt() {
    this.elem.type = this.type;
    this.elem.dataset.qa = this.dataQa;

    return this.elem;
  }
}

class Select {
  constructor(dataQa) {
    this.element = document.createElement('select');

    this.cities = [
      'Tokyo',
      'Singapore',
      'London',
      'New York',
      'Edinburgh',
      'San Francisco',
    ];
    this.dataQa = dataQa;
  }

  randerIt() {
    this.element.dataset.qa = this.dataQa;

    this.cities.forEach((city) => {
      const option = document.createElement('option');

      option.textContent = city;

      this.element.appendChild(option);
    });

    return this.element;
  }
}

const form = new Form('new-employee-form');

const inpName = new Input('name', 'text', 'name');
const inpPosition = new Input('position', 'text', 'position');
const office = new Select('office');
const inpAge = new Input('age', 'number', 'age');
const inpSalary = new Input('salary', 'number', 'salary');

form.createForm(inpName, inpPosition, office, inpAge, inpSalary);

// const selctform = document.querySelector('form');
const newEmploee = {
  name: '',
  position: '',
  office: office.cities[0],
  age: 0,
  salary: 0,
};

document.querySelectorAll('label').forEach((item) => {
  item.children[0].addEventListener('focus', (eveFocus) => {
    eveFocus.target.addEventListener('input', (eveInput) => {
      newEmploee[eveFocus.target.dataset.qa] = eveInput.target.value;
    });
  });
});

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();

  const CONDITION_AGE = +newEmploee.age >= 18 && +newEmploee.age <= 90;
  const CONDITION_NAME = newEmploee.name.length > 3;

  newEmploee.salary = formatCurrency(newEmploee.salary);

  if (CONDITION_AGE && CONDITION_NAME) {
    const tr = document.createElement('tr');

    Object.values(newEmploee).forEach((val) => {
      const td = document.createElement('td');

      td.textContent = val;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  } else {
  }
});

thead.addEventListener('click', (e) => {
  const targetName = e.target.textContent;
  const elem = e.target;

  const listOfTitle = thead.children[0].children;

  Array.from(listOfTitle).forEach((title) => {
    if (targetName === title.textContent) {
      title.classList.toggle('asc');
    } else {
      title.classList = '';
    }
  });

  refreshList(targetName, elem.classList[0]);
});

function refreshList(triger, className) {
  const sortedAscList = sortListAsc(listSalary, TITLES[triger]);
  const sortedAgeList = sortListDesc(listSalary, TITLES[triger]);

  if (className) {
    tbody.innerHTML = '';

    sortedAscList.forEach((elm) => {
      tbody.appendChild(elm);
    });
  } else {
    tbody.innerHTML = '';

    sortedAgeList.forEach((elm) => {
      tbody.appendChild(elm);
    });
  }
}

function sortListAsc(colect, indx) {
  const out = Array.from(colect).sort((a, b) => {
    if (!isNaN(cleanCurrency(a.children[indx].textContent))) {
      return (
        cleanCurrency(a.children[indx].textContent) -
        cleanCurrency(b.children[indx].textContent)
      );
    }

    return a.children[indx].textContent.localeCompare(
      b.children[indx].textContent,
    );
  });

  return out;
}

function sortListDesc(colect, indx) {
  const out = Array.from(colect).sort((a, b) => {
    if (!isNaN(cleanCurrency(a.children[indx].textContent))) {
      return (
        cleanCurrency(b.children[indx].textContent) -
        cleanCurrency(a.children[indx].textContent)
      );
    }

    return b.children[indx].textContent.localeCompare(
      a.children[indx].textContent,
    );
  });

  return out;
}

function cleanCurrency(input) {
  return +input.replace(/[$,]/g, '');
}

function formatCurrency(amount) {
  if (isNaN(amount)) {
    return amount;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

tbody.addEventListener('click', (e) => {
  Array.from(tbody.children).forEach((row) => {
    row.className = '';

    if (row === e.target.parentElement) {
      row.className = 'active';
    }
  });
});

// selctform.addEventListener('click', (evt) => {
// addValue(evt);
// });

// function addValue(e) {
//   const prop = e.target.dataset.qa;

//   if (newEmploee.hasOwnProperty(prop)) {
//     if (!e.target.initialized) {
//       if (prop !== 'office') {
//         e.target.addEventListener('input', (ev) => handleEvent(ev, prop));
//       } else {
//         e.target.addEventListener('change', (ev) => handleEvent(ev, prop));
//       }
//       e.target.initialized = true;
//     }
//   }
// }

// function handleEvent(e, prop) {
//   if (e.type === 'input' || e.type === 'change') {
//     newEmploee[prop] = e.target.value;
//   }
// }
