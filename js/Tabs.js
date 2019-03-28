'use strict';


const asTabs=node=> {
  const tabs = [];

  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    if (child.nodeType == document.ELEMENT_NODE)
      tabs.push(child);
  }

  const tabList = document.createElement("div");
  tabs.forEach((tab, i)=> {
    const button = document.createElement("button");
    button.textContent = tab.getAttribute("data-tabname");
    button.addEventListener("click", () => { selectTab(i); });
    tabList.appendChild(button);
  });
  node.insertBefore(tabList, node.firstChild);

  const selectTab= (n)=> {
    tabs.forEach(function(tab, i) {
      if (i === n)
        tab.style.display = "";
      else
        tab.style.display = "none";
    });
    for (let i = 0; i < tabList.childNodes.length; i++) {
      if (i === n)
        tabList.childNodes[i].style.background = "white";
      else
        tabList.childNodes[i].style.background = "";
    }
  };
  selectTab(0);
}
asTabs(document.querySelector("tab-panel"));