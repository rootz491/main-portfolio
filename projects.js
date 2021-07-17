const projectCover = document.querySelector(".projects");
const projectTemplate = document.getElementById("projectTemp");

const projects = [
    {
        name: "Perky Poetry",
        about: "It is a web application, for my sister so she can post her poems & others can like/comment on it. It's full-stack project, powered by expressJs and firebase & hosted on Heroku;",
        project: "https://perky-poetry.herokuapp.com",
        github: null,
        img: "./img/perky.png"
    },
    {
        name: "Connect",
        about: "Connect is a simple app where user can login and post their thoughts, created while learning Firebase.",
        project: "https://connect-491.web.app",
        github: "https://github.com/rootz491/connect-491",
        img: "./img/connect491.png"
    },
    {
        name: "Note That",
        about: "It is a note keeping app, from when i was learning Django Framework and basically how to use (CRUD) thru database!",
        project: "https://note-that.herokuapp.com/",
        github: "https://github.com/rootz491/notes-django",
        img: "./img/notes.png"
    },
    {
        name: "Sountron",
        about: "Online music player implementation, build upon vanilla Javascript.",
        project: "https://soundtron2.netlify.app",
        github: "https://github.com/rootz491/soundtron-v2",
        img: "./img/soundtron.png"
    },
    {
        name: "More Side-Projects",
        about: "While learning the web, I've create many more website and webapp; Here's the list of ones that are deployed. Others can be found either on my Github 🕸 or on Localhost 💻",
        project: "https://linktr.ee/rootz491",
        github: "https://github.com/rootz491",
        img: "./img/linktree.png"
    },
]

projects.forEach(pr => {
    const node = document.importNode(projectTemplate.content, true);
    const name = node.querySelector('.p-name');
    name.innerText = pr.name;
    const about = node.querySelector('.p-about');
    about.innerText = pr.about;
    const project = node.querySelector('.p-project');
    pr.project ?
    project.href = pr.project :
    pr.remove();
    const github = node.querySelector('.p-github');
    pr.github ? 
    github.href = pr.github :
    github.remove();
    const img = node.querySelector('.p-img');
    img.src = pr.img;
    projectCover.appendChild(node);
});