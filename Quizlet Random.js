a = $$(".SetPageTerm-inner");
ff = () => {
    console.log("calling ff")

  b = random(a);

  wordText = b.querySelector(".SetPageTerm-wordText");

  wordText.style.opacity = 1;
  definitionText = b.querySelector(".SetPageTerm-definitionText");
  definitionText.style.opacity = 0;
  setTimeout(show, 8000);
  function show() {
    definitionText.style.opacity = 1;
  }
  function random(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  definitionText.scrollIntoView({ block: "center", inline: "nearest" });
};
var NextB;
NextB ??= document.createElement("button");
document.body.append(NextB);

NextB.innerText = "Next";
NextB.type = "button";
NextB.style.padding = "2em 3em";
NextB.style.position = "fixed";
NextB.style.bottom = "10em";
NextB.style.left = "10em";
NextB.onclick = () => ff();
