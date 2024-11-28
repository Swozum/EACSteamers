document.addEventListener("DOMContentLoaded",function(){
    function getRandomImage(){
        const randomIndex = Math.floor(Math.random() * photos.length);
        return '<img id="welcome" src="'+photos[randomIndex]+'" alt=""></img>';
    }
    function displayCards(){
        const cardsDisplay = cards[0];
        return '<div id="card" class="card"><h3>'+cardsDisplay.name+'</h3><img id="cardImage" src="'+cardsDisplay.photo+'"></img><h4>'+cardsDisplay.text.title+'</h4><h5>'+cardsDisplay.text.subtitle+'</h5><p>'+cardsDisplay.text.text+'</p></div>';
    }
    document.getElementById('photo-container').innerHTML = getRandomImage();
    //document.getElementById('cards-container').innerHTML = displayCards();
});

