var outputTarget = document.getElementById("outputTarget");
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
    title: "Looks like you're writing my entry.",
    name: "Clippy",
    bio: "The default assistant in the English Windows version was named Clippit (though Clippy is a common nickname), after a paperclip. The character was designed by Kevan J. Atteberry. Clippy was the default and by far the most notable Assistant (partly because in many cases the setup CD was required to install the other assistants), which also led to it being called simply the Microsoft Paperclip.",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/Clippy-letter.PNG",
    lifespan: {
      birth: 1997,
      death: "pretty soon one would hope"
    }
  }
];

var init = function(){
  for (var i=0;i<famous.length;i++) {
  cardString = "<article class='card'> <h3>"+famous[i].title+"</h3> <img src='"+famous[i].image+"'> <h6>B. "+famous[i].lifespan.birth+"<br> D. "+famous[i].lifespan.death+"</h6> <h3>Name: "+famous[i].name+"</h3> <h3>Bio: "+famous[i].bio+"</h3> </article>";
  outputTarget.innerHTML += cardString
  }
};

init();