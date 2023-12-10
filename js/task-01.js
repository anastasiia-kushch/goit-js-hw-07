const liElements = document.querySelectorAll('.item');
console.log('Number of categories: ', liElements.length);

liElements.forEach((element) => {
  console.log('Category: ', element.firstElementChild.textContent);

  const categoryList = element.lastElementChild;
  console.log('Elements: ', categoryList.children.length);
});
