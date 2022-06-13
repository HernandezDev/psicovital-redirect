const keyValues = window.location.search;

const urlParams = new URLSearchParams(keyValues);

// const _id = urlParams.get('_id');
const recoveryURL = urlParams.get('recoveryURL');


window.location.replace(`${recoveryURL}`);