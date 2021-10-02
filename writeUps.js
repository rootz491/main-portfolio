const writeupCover = document.querySelector(".writeups");
const writeupTemplate = document.getElementById("writeupTemp");

const writeups = [
    {
        title: "How to find that BadAss IDOR",
        about: "Hey there, my name is karan sharma. And i’m back with a story of IDOR and why i think you should know about it.",
        url: "https://karansh491.medium.com/how-to-find-that-badass-idor-ddeed06195b0"
    },
    {
        title: "JWT and Session based authentication",
        about: "In this blog post, we'll discuss JsonWebToken and Sessions based Authentication; And why I prefer JWT over sessions.",
        url: "https://karansh491.hashnode.dev/jwt-and-session"
    },
    {
        title: "My first bounty (stored-xss)",
        about: "Hi i’m Karan sharma. My first bounty was based on stored-xss, let’s talk about it.",
        url: "https://karansh491.medium.com/my-first-bounty-stored-xss-96dea41fd9cf"
    },
    {
        title: "Let's firebase everything",
        about: "In this article, we will understand what's Firebase and But more importantly why and when you should use it.",
        url: "https://karansh491.hashnode.dev/lets-firebase-everything"
    }
]

writeups.forEach(writeup => {
    const node = document.importNode(writeupTemplate.content, true);
    const title = node.querySelector('.w-title');
    title.innerText = writeup.title;
    const about = node.querySelector('.w-about');
    about.innerText = writeup.about;
    const url = node.querySelector('.w-url');
    url.href = writeup.url;
    writeupCover.appendChild(node);
})

