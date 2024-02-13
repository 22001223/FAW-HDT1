const consultarPersonaje = async () => {

    let number = parseInt(document.getElementById('number').value);
    let title  = document.getElementById('title');
    let height = document.getElementById('height');
    let mass   = document.getElementById('mass');
    let hairColor = document.getElementById('hair_color');
    let skinColor = document.getElementById('skin_color');
    let eyeColor  = document.getElementById('eye_color');
    let birthYear = document.getElementById('birth_year');
    let gender = document.getElementById('gender');
    
    if(isNaN(number) || number <= 0) {
        alert('Debes ingresar un numero valido.');
    } else {
        const API = `https://swapi.dev/api/people/${number}`;
        fetch(API)
        .then(response => response.json())
        .then(character => {
            if(character.name === undefined) {
                title.innerHTML = 'Character not exist';
                height.innerHTML = '--';
                mass.innerHTML   = '--';
                hairColor.innerHTML = '--';
                skinColor.innerHTML = '--';
                eyeColor.innerHTML  = '--';
                birthYear.innerHTML = '--';
                gender.innerHTML = '--';
                return;
            }
            title.innerHTML  = character.name;
            height.innerHTML = character.height;
            mass.innerHTML   = character.mass;
            hairColor.innerHTML = character.hair_color;
            skinColor.innerHTML = character.skin_color;
            eyeColor.innerHTML  = character.eye_color;
            birthYear.innerHTML = character.birth_year;
            gender.innerHTML = character.gender;
            // result.innerHTML = JSON.stringify(character);
        }) 
    }

}