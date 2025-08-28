//Create an Elements:
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

  const nodejs=document.createElement("li");
  nodejs.innerText="Nodejs";
  courseList.append(nodejs);
  courseList.insertBefore(nodejs,tailwindIteam);
  reactIteam.insertAdjacentElement("beforeend",nodejs);
  nodejs.textContent="Node.js";
  
  courseList.insertBefore(bootstrapIteam,tailwindIteam);
   const bootstrapIteamjs=document.createElement("li");
   bootstrapIteamjs.innerText="bootstrapjs";
  courseList.replaceChild(bootstrapIteamjs,bootstrapIteam);
  bootstrapIteamjs.replaceWith("bootstrapIteam");
//create a profile picture Element
  const profilePicture=document.createElement("img");
  profilePicture.setAttribute("src","https://images.pexels.com/photos/33511055/pexels-photo-33511055.jpeg");
  profilePicture.setAttribute("alt","profile Imge");
//class Manipulations
  profilePicture.className="profilePicture";
  profilePicture.classList.add("ceoImage");
  profilePicture.classList.remove("ceoImage");
  profilePicture.classList.toggle("highlight");
  //Append profile picture to contaner
  const profileContainer=document.getElementById("container");
  profileContainer.append(profilePicture);

  const navelink=document.createElement("a");
  navelink.href="https://www.achiversit.com";
  navelink.innerText="Visit AchiversIT";
//   navelink.target="_blank";
  profileContainer.append(navelink);


  const getExistingpath=document.getElementById("container");
  console.log(getExistingpath);

  console.log(getExistingpath.getAttribute("smallContainer"))
