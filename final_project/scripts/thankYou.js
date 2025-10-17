

const getString = window.location.search;
const information = new URLSearchParams(getString);

document.querySelector('#i').innerHTML = `
<p>Name: ${ information.get('firstname') } ${ information.get('lastname') }</p>;

<p> ${ information.get('organizational-title') } of ${ information.get('organization-name') } </p>;
<p>Email: ${ information.get('email') } </p>;
<p> Phone: ${ information.get('phone') } </p>;
<p> Membership Level: ${ information.get('product') } </p>;
<p> Description: ${ information.get('description') }</p>;
<p> Date: ${ information.get('dateOfLoad') }</p>;
`