const allItems = document.querySelectorAll(".item");


const amountAllLiEl = allItems.length;
console.log("Number of categories:", amountAllLiEl);

allItems.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.children[1].children.length);
});















// allItems.forEach(item => {
//     console.log('Elements:', item.children[1].children.length);
// })

//practise//
// const findItemsLi = document.querySelector('.item')

// const child = findItemsLi.firstChild;
// console.log('firstChild:', child);

// const childs = findItemsLi.firstElementChild;
// console.log('firstElementChild:',  childs);

// const parent = findItemsLi.parentNode;
// console.log('parentNode:', parent);

// const childN = findItemsLi.childNodes;
// console.log('childNodes:',childN);

// const childrenss = findItemsLi.children;
// console.log('children:',childrenss);
