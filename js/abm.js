let sectionABM = document.getElementById('abm');
let inputFirstName = document.getElementById('first-name');
let inputLastName = document.getElementById('last-name');
let tableUser = document.getElementById('table-users');
let btnAdd = document.getElementById('btn-add');
let btnDelete = document.getElementById('btn-delete');
let btnEdit = document.getElementById('btn-edit');

let regex_words = /^[a-zA-Z]/i;
let regex_trId = /tr-\d+/g;

let empty = document.createElement('p');

const CHECK_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>';

const CLOSE_ICON_S =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';

const CLOSE_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>';

const ADD_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/></svg>';

const EDIT_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';

const TRASH_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>';

const EMPTY_STRING = '';
const EMPTY_TABLE =
  '<p class="col-10 col-md-5 text-center">There are no users to show you</p>';
empty.innerHTML = EMPTY_TABLE;
const ERROR_INPUT = 'Fill the input ';
const IS_INVALID = 'is-invalid';

let nextSelection = 0;

let listUsers = new Array();
let listUserSelections = new Array();

if (tableUser.childNodes.length === 0) {
  sectionABM.appendChild(EMPTY_TABLE);
}

function clearInputs() {
  inputFirstName.value = EMPTY_STRING;
  inputLastName.value = EMPTY_STRING;
}
function isValidateInput(input, nameTitle) {
  if (input.value === EMPTY_STRING || !regex_words.test(input.value)) {
    input.classList.add(IS_INVALID);
    input.setAttribute('title', ERROR_INPUT + nameTitle);
    return false;
  }
  input.setAttribute('title', nameTitle);
  return true;
}

function renderUsers(user = {}) {
  let tr = document.createElement('tr');
  listUsers.push(user);
  tr.id = `tr-${listUsers.length}`;
  Object.values(user).map((value) => {
    let td = document.createElement('td');

    td.id = `${tr.id}-td-${
      typeof value === 'string' ? value.replace(' ', '-') : value
    }`;
    td.innerHTML = value;
    tr.appendChild(td);
  });
  tableUser.appendChild(tr);
}

function removeSelections(selection) {
  selection.classList.remove('selection');
  listUserSelections.splice(listUserSelections.indexOf(selection), 1);
}

function addSelections(selection) {
  selection.classList.add('selection');
  listUserSelections.push(selection);
}

function createUsers(id, name, lastName) {
  return { id, name, lastName };
}

function deleteUsers(user) {}

function updateUsers(user) {}

function changeIcons(icon, element, success = true) {
  element.innerHTML = success ? CHECK_ICON : CLOSE_ICON;
  success
    ? element.classList.add('animate__animated', 'animate__rubberBand')
    : element.classList.add('animate__animated', 'animate__shakeX');
  setTimeout(function () {
    element.innerHTML = icon;
    success
      ? element.classList.remove('animate__animated', 'animate__rubberBand')
      : element.classList.remove('animate__animated', 'animate__shakeX');
  }, 500);
}

function clickTable(event) {
  const trId = event.target.id.match(regex_trId);
  const trSelection = document.getElementById(trId);
  if (nextSelection !== 0) nextSelection = 0;
  if (trSelection.classList.contains('selection')) {
    removeSelections(trSelection);
  } else {
    addSelections(trSelection);
  }
}

btnAdd.onclick = () => {
  if (
    isValidateInput(inputFirstName, 'First Name') ||
    isValidateInput(inputLastName, 'Last Name')
  ) {
    inputFirstName.classList.remove(IS_INVALID);
    inputLastName.classList.remove(IS_INVALID);

    renderUsers(
      createUsers(
        listUsers.length + 1,
        inputFirstName.value,
        inputLastName.value
      )
    );
    changeIcons(ADD_ICON, btnAdd);
    clearInputs();
    tableUser.addEventListener('click', clickTable);
  } else {
    changeIcons(ADD_ICON, btnAdd, false);
  }
};
function handlerClickEdit() {
  if (
    inputFirstName.value !== EMPTY_STRING &&
    inputLastName.value !== EMPTY_STRING &&
    listUserSelections.length !== 0
  ) {
    listUserSelections[nextSelection].children[1].innerText =
      inputFirstName.value;
    listUserSelections[nextSelection].children[2].innerText =
      inputLastName.value;
    removeSelections(listUserSelections[nextSelection]);
    clearInputs();
    btnAdd.removeAttribute('disabled');
    tableUser.addEventListener('click', clickTable);
    handlerClickEdit();
  } else if (listUserSelections.length > 0) {
    listUserSelections[nextSelection];
    inputFirstName.value =
      listUserSelections[nextSelection].children[1].innerText;
    inputLastName.value =
      listUserSelections[nextSelection].children[2].innerText;
    btnAdd.setAttribute('disabled', 'disabled');
    tableUser.removeEventListener('click', clickTable);
  }
}
btnEdit.onclick = () => {
  changeIcons(EDIT_ICON, btnEdit, listUserSelections.length > 0);
  handlerClickEdit();
};

function handlerClickDelete() {
  if (listUserSelections.length === 0) {
    btnAdd.removeAttribute('disabled');
    btnEdit.removeAttribute('disabled');
    tableUser.addEventListener('click', clickTable);
  } else if (listUserSelections.length > 0) {
    btnAdd.setAttribute('disabled', 'disabled');
    btnEdit.setAttribute('disabled', 'disabled');
    tableUser.removeEventListener('click', clickTable);
    tableUser.removeChild(listUserSelections[nextSelection]);
    removeSelections(listUserSelections[nextSelection]);
    handlerClickDelete();
  }
}
btnDelete.onclick = () => {
  changeIcons(TRASH_ICON, btnDelete, listUserSelections.length > 0);
  handlerClickDelete();
};
