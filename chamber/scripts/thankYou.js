

const getString = window.location.search;
const information = new URLSearchParams(getString);
// console.log(information)

document.querySelector('#i').innerHTML = `
<p>Name: ${ information.get('firstname') } ${ information.get('lastname') }</p>

<p> ${ information.get('organizational-title') } of ${ information.get('organization-name') } </p>
<p>Email: ${ information.get('email') } </p>
<p> Phone: ${ information.get('phone') } </p>
<p> Membership Level: ${ information.get('product') } </p>
<p> Description: ${ information.get('description') }</p>
<p> Date: ${ information.get('dateOfLoad') }</p>
<p> Date: ${ information.get('numberOfVisits') }</p>

`

let numberOfVisits = document.getElementById("visit");

let visits = Number(window.localStorage.getItem('store'));

if (visits != 0) {
    numberOfVisits.textContent = visits;
}
    else {
            numberOfVisits.textContent = "First Visitor"
        }
visits ++ ;
localStorage.setItem('store', visits);