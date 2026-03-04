let btn = document.querySelector(".main-content");
let qt = document.querySelector(".quote");
let person = document.querySelector('.person');
let img = document.querySelector('#img');

const quotes = [
    {
        quote: "We choose to go to the Moon and do those other things, not because they are easy, but because they are hard.",
        author: "John F. Kennedy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Jfk2.jpg/800px-Jfk2.jpg"
      },
      {
        quote: "The best part is no part.",
        author: "Elon Musk",
        image: "http://static4.businessinsider.com/image/51def664ecad04384c00000a/elon-musk-the-hyperloop-design-is-coming-august-12.jpg"
      },
      {
        author: "Abraham Lincoln",
        quote: "Things may come to those who wait, but only the things left by those who hustle.",
        image: "http://upload.wikimedia.org/wikipedia/commons/1/1b/Abraham_Lincoln_November_1863.jpg"
      },
      {
        author: "Adam Smith",
        quote: "The great secret of education is to direct vanity to proper objects.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adam_Smith_The_Muir_portrait.jpg"
      },
      {
        author: "Alain de Botton",
        quote: "It’s not that travel just broadens your mind, rather it enables you to see how narrow your oppressor’s minds are.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alain_de_Botton.jpg/330px-Alain_de_Botton.jpg"
      },
      {
        author: "Alan Watts",
        quote: "A person who never made a mistake never tried anything new.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png"
      },
      {
        author: "Alan Watts",
        quote: "Better to have a short life that is full of what you like doing than a long life spent in a miserable way.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png"
      },
      {
        author: "Alan Watts",
        quote: "Life is a musical thing and you are supposed to dance and sign while it's being played.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png"
      },
      {
        author: "Alan Watts",
        quote: "Omnipotence is not knowing how everything is done; it's just doing it.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png"
      },
      {
        author: "Albert Camus",
        quote: "It is not humiliating to be unhappy. Physical suffering is sometimes humiliating, but the suffering of being cannot be, it is life.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Albert_Camus,_gagnant_de_prix_Nobel,_portrait_en_buste,_pos%C3%A9_au_bureau,_faisant_face_%C3%A0_gauche,_cigarette_de_tabagisme.jpg"
      },
      {
        author: "Albert Einstein",
        quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Albert Einstein",
        quote: "The secret to creativity is knowing how to hide your sources.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Albert Einstein",
        quote: "The true sign of intelligence is not knowledge but imagination.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Albert Einstein",
        quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Albert Einstein",
        quote: "When facts don't fit the theory, change the facts.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Amar Bose",
        quote: "Creativity never comes under emotional stress or tension. The real creativity comes when the mind finally relaxes and is quiet and then can focus.",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Amar_Bose_india_times.jpg"
      },
      {
        author: "Amar Bose",
        quote: "If you think something is impossible, don't disturb the person doing it.",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Amar_Bose_india_times.jpg"
      },
      {
        author: "Amar Bose",
        quote: "What is bad is not that men live and die, but what dies within a man while he lives. Perhaps the most important thing that is within a man while he lives is his imagination. The thing that keeps you going and keeps you creative is never to loose your imagination. Always dream of things that are better, and think about ways to reach them",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Amar_Bose_india_times.jpg"
      },
      {
        author: "Antoine de Saint-Exupery",
        quote: "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
        image: "http://www.canalacademie.com/IMG/jpg/saint_exupery.jpg"
      },]

      btn.addEventListener('click',function(){
        let random = Math.floor(Math.random()* quotes.length);

        qt.innerText  = quotes[random].quote;
        person.innerText = quotes[random].author;
        img.src= quotes[random].image;
      })