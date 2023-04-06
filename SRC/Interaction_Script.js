alert('Hallo');
const voornaam = prompt ("Wat is uw naam?");
alert(voornaam)
const isAccepted = confirm("Accepteert u cookies?");
if (isAccepted){
  document.body.innerHTML += `<p> cookies geaccepteerd </p> `;
}else{ 
  document.body.innerHTML += `<p> cookies niet geaccepteerd  </p> `;
}
const myCity = 'Den Haag';
alert('Ik woon in ' + myCity);
    