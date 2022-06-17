async function getRaceInfo(season,round){
    try{
        let res = await fetch(`https://ergast.com/api/f1/${season}/${round}`)
        let data = await res.json()
        return data[0]
    } catch(err) {
        console.error(err)
    }
}

// Function that will create country card and add to country display div
function buildRaceCard(raceObj){
    // Create the card div
    const card = document.createElement('div');
    card.className = 'card';

    // Create a top image
    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = countryObj.flags.png;
    // Add image as a child to the card div
    card.append(image);

    // Create card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create country name and population elements
    const countryTitle = document.createElement('h5');
    countryTitle.className = 'card-title'
    countryTitle.innerHTML = countryObj.name.official;

    const population = document.createElement('p');
    population.className = 'card-text'
    population.innerHTML = `Population: ${countryObj.population.toLocaleString('en-US')}`;

    // Append title and population to card body
    cardBody.append(countryTitle);
    cardBody.append(population);

    // Add card body to card div
    card.append(cardBody);

    // Create our column for the row
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3'

    // Add the card to the column
    col.append(card)

    // Get the country display row
    const countryDisplay = document.getElementById('countryDisplay');

    // Add the new column to our display
    countryDisplay.append(col);
}
}