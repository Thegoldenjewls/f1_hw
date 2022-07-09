async function getRaceInfo(season,round){
    try{
        let res = await fetch(`https://ergast.com/api/f1/${season}/${round}`)
        let data = await res.json()
        return data[0]
    } catch(err) {
        console.error(err)
    }
}

function buildRaceCard(raceObj){
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = countryObj.flags.png;
    
    card.append(image);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const countryTitle = document.createElement('h5');
    countryTitle.className = 'card-title'
    countryTitle.innerHTML = countryObj.name.official;

    const population = document.createElement('p');
    population.className = 'card-text'
    population.innerHTML = `Population: ${countryObj.population.toLocaleString('en-US')}`;

    cardBody.append(countryTitle);
    cardBody.append(population);

    card.append(cardBody);

  
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3'

    col.append(card)

    const countryDisplay = document.getElementById('countryDisplay');

   
    countryDisplay.append(col);
}
}