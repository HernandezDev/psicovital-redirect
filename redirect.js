const keyValues = window.location.search;

const urlParams = new URLSearchParams(keyValues);

const _id = urlParams.get('_id');
const recoveryURL = urlParams.get('recoveryURL');

console.log(`${recoveryURL}/${_id}`);