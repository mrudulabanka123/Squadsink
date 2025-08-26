const bootstrapIteam=document.createElement("li");
bootstrapIteam.innerHTML= '<a href:"https://getbootstrap.com/">Bootstrap</a>';

const tailwindIteam=document.createElement("li");
tailwindIteam.innerText="TailwindCSS";

const reactIteam=document.createElement("li");
reactIteam.textContent="ReactJs";

console.log("create Elements:",bootstrapIteam,tailwindIteam,reactIteam);

const courseList=document.getElementById("courseList");
const jsListIteam=document.getElementById("jsListIteam");

courseList.prepend(bootstrapIteam);
courseList.append(tailwindIteam);

courseList.appendChild(reactIteam);

const javaIteam=document.createElement("li");
javaIteam.innerText="java";
// console.log("crate Elements:",javaIteam);
courseList.insertBefore(javaIteam,jsListIteam);

const pythonIteam=document.createElement("li");
pythonIteam.innerText="python";
// console.log("create Elemnts:",pythonIteam)
jsListIteam.insertAdjacentElement("beforebegin",pythonIteam);

jsListIteam.textContent="javaScript ES6";
tailwindIteam.textContent="Tailwind";
reactIteam.textContent="ReactJs";

const Java8Iteam=document.createElement("li");
Java8Iteam.innerText="java 8";
 courseList.replaceChild(Java8Iteam,javaIteam);

//  pythonIteam.textContent="TypeScript"
 pythonIteam.replaceWith("TypeScript");