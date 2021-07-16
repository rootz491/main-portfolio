const writeupCover = document.querySelector(".writeups");
const writeupTemplate = document.getElementById("writeupTemp");

const writeups = [
    {
        title: "How to find that BadAss IDOR",
        about: "Hey there, my name is karan sharma. And i’m back with a story of IDOR and why i think you should know about it.",
        url: "https://karansh491.medium.com/how-to-find-that-badass-idor-ddeed06195b0"
    },
    {
        title: "My first bounty (stored-xss)",
        about: "Hi i’m Karan sharma. My first bounty was based on stored-xss, let’s talk about it.",
        url: "https://karansh491.medium.com/my-first-bounty-stored-xss-96dea41fd9cf"
    },
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

