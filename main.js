const baseUrl = 'https://kaamelott.reiter.tf';

const elements = {
    randomQuote: document.querySelector('#random-quote blockquote'),
    randomQuoteCharacter: document.querySelector('#random-quote p'),
    quoteList: document.querySelector('#all-quotes ul')
};

document.querySelector('#random-quote button').addEventListener('click', () => {
    // Envoi d'une requête vers l'API
    fetch(`${baseUrl}/quote/random`).then(response => response.json()).then(response => {
        // Code exécuté quand la réponse au format JSON a été reçue
        elements.randomQuote.textContent = response.citation;
        elements.randomQuoteCharacter.textContent = response.infos.personnage;
    });
});

document.querySelector('#all-quotes button').addEventListener('click', () => {
    fetch(`${baseUrl}/quotes`).then(response => response.json()).then(response => {
        elements.quoteList.innerHTML = response.map(quote => {
            return `
                <li>
                    <blockquote>${quote.citation}</blockquote>
                    <p>${quote.infos.personnage} (${quote.infos.saison} - ${quote.infos.episode})</p>
                </li>
            `;
        }).join('');
    });
});
