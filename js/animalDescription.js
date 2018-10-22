const animal = new URL(window.location).searchParams.get('animal');
const replaceRegex = /\${animal}/g;

document.body.innerHTML = document.body.innerHTML.replace(replaceRegex, animal);