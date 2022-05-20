const now = new Date();
const today = document.querySelector("#today");
const copyrightyear = document.querySelector("#copyrightyear");
const lastupdate = document.querySelector("#lastupdate");

today.textContent = new Intl.DateTimeFormat("en-UK", { dateStyle: "full",}).format(now);

copyrightyear.textContent = now.getFullYear();
lastupdate.textContent = document.lastModified;