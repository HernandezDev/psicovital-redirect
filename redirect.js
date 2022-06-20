const keyValues = window.location.search;

const urlParams = new URLSearchParams(keyValues);

// const _id = urlParams.get('_id');
const appURL = urlParams.get('appURL');


window.location.replace(`${appURL}`);
