var outputTarget = document.getElementById("outputTarget");
var cards = document.getElementsByClassName("card");
var inputField = document.getElementById("textInput");
var thisBio = [];
var famous = [
  {
    title: "Your Buddy",
    name: "Bonzi Buddy",
    bio: "BonziBuddy, stylized as BonziBUDDY, was a piece of adware distributed by Bonzi Software between 1999 and 2004. The software provided an on-screen software agent designed to help users surf the Internet by using Microsoft Agent technology. In 1999, the software used a green parrot called 'Peedy' licensed from Microsoft, and in later versions, a purple gorilla named Bonzi.",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Bonzi_Buddy.png",
    lifespan: {
      birth: 1999,
      death: 2004
    }
  },
  {
    title: "A Gentleman's Gentleman",
    name: "(Ask) Jeeves",
    bio: "Ask.com was originally known as Ask Jeeves, 'Jeeves' being the name of a 'gentleman's gentleman', or valet, fetching answers to any question asked. The character was based on Bertie Wooster's valet Jeeves, in the fictional works of P. G. Wodehouse.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cd/Jeeves-in-2009.jpg",
    lifespan: {
      birth: 1996,
      death: 2006
    }
  },
  {
    title: "It looks like you're writing my entry.",
    name: "Clippy",
    bio: "The default assistant in the English Windows version was named Clippit (though Clippy is a common nickname), after a paperclip. The character was designed by Kevan J. Atteberry. Clippy was the default and by far the most notable Assistant (partly because in many cases the setup CD was required to install the other assistants), which also led to it being called simply the Microsoft Paperclip.",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/Clippy-letter.PNG",
    lifespan: {
      birth: 1997,
      death: "pretty soon one would hope"
    }
  }
];
//set up initial cards
var init = function(){
  //create cards
  for (var i=0;i<famous.length;i++) {

    //prepare light blue background for odd numbered cards. light yellow for evens
    var evenOdd
    if (i % 2 === 0) {
      evenOdd = "odd"
    } else {
      evenOdd = "even"
    }

    cardString = "<person class='card "+evenOdd+"'> <header>"+famous[i].title+"<br>Name: "+famous[i].name+"</header> <section> <img src='"+famous[i].image+"'><br>Bio: <div class='bio'>"+famous[i].bio+"</div></section> <footer>B. "+famous[i].lifespan.birth+"<br> D. "+famous[i].lifespan.death+"</footer> </person>";
    outputTarget.innerHTML += cardString
  }
};

init();

//add event listener to .card class
for (var i=0;i<cards.length;i++) {
  cards[i].addEventListener("click", function(){

    //remove selected from all cards
    for (var j=0;j<cards.length;j++) {
      cards[j].classList.remove("selected");
    };

    //add selected to clicked card
    this.classList.add("selected");
    textInput.focus();

    // get reference to selected bio for editing
    thisBio = this.getElementsByClassName("bio");
  })
};



//add text entry event listener to input 
inputField.addEventListener("keyup", function(e){
  thisBio[0].innerHTML = inputField.value;
  console.log("e", e.code);
  if (e.code === "Enter") {
    inputField.value = "";
  }
})



