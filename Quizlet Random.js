a = $$(".SetPageTerm-inner");
ff = () => {
    console.log("calling ff")

  b = random(a);
  b.querySelector('.SetPageTerm-smallSide').style.width = '60%';
  b.querySelector('.SetPageTerm-largeSide').style.width = '40%';
  wordText = b.querySelector(".SetPageTerm-wordText");

  wordText.style.opacity = 1;
  definitionText = b.querySelector(".SetPageTerm-definitionText");
  // definitionText.style.opacity = 0;
  setTimeout(show, 8000);
  function show() {
    definitionText.style.opacity = 1;
  }
  function random(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  b.scrollIntoView({ block: "center", inline: "center" });
};
var NextB;
NextB ??= document.createElement("button");
document.body.append(NextB);
NextB.className = "AssemblyButtonBase AssemblySecondaryButton AssemblySecondaryButton--filled AssemblyButtonBase--large"
NextB.innerText = "Next";
NextB.type = "button";
NextB.style.padding = "2em 3em";
NextB.style.position = "fixed";
NextB.style.bottom = "10em";
NextB.style.left = "10em";
NextB.onclick = () => ff();
