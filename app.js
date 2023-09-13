const email = document.querySelector("#email");
const password = document.querySelector("#password");
const div = document.querySelector("div");

const newArr = [];

function render() {
  email.value = "";
  password.value = "";
  div.innerHTML = "";

  for (let i = 0; i < newArr.length; i++) {
    div.innerHTML += `<div class="main">
        <p>Email===> ${newArr[i].email}</p>
        <p>Password===> ${newArr[i].password}</p>
        <button onclick="editBtn(${i})">Edit</button>
        <button onclick="deleteBtn(${i})">Delete</button>
        </div>`;
  }
}

function addValue(e) {
  e.preventDefault();

  newArr.push({
    email: email.value,
    password: password.value,
  });
  // console.log(newArr);

  render();
}

function deleteBtn(index) {
  newArr.splice(index, 1);
  render();
}

function editBtn(index) {
  const editEmail = prompt("Put Edit Email", newArr[index].email);
  const editPassword = prompt("Put Edit Email", newArr[index].password);
  newArr[index].email = editEmail;
  newArr[index].password = editPassword;
  render();
  console.log("Edit Button Called");
}
