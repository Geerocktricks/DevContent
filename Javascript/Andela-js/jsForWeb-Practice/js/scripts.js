// Transversing the elements i need in the DOM
const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');
const addPost = document.getElementById('add-post');
const removePost = document.getElementById('remove-post');
const section = document.querySelector('section');

// color change event listeners
blueButton.addEventListener('click', () => {
    header.classList.remove('green-background', 'text-white' , 'brown-background');
    header.classList.add('blue-background', 'text-white');
});

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background', 'text-white');
    header.classList.add('brown-background', 'text-white');
  });

greenButton.addEventListener('click', () => {
  header.classList.remove('blue-background', 'text-white' , 'brown-background');
  header.classList.add('green-background', 'text-white');
});

noneButton.addEventListener('click', () => {
  header.classList.remove('blue-background', 'green-background', 'text-white' , 'brown-background');
});
header.style.padding = '20px'; // just trying to apply some styling

// Test to see if i'm targeting the buttons correctly
addPost.addEventListener('click', () => {
    console.log('Should add an article');
    const newPost = createNewPost()
    section.appendChild(newPost);
});

removePost.addEventListener('click', () => {
    console.log('Should remove the last article');
    const articleCount = section.childElementCount;
    console.log(articleCount);
    if(articleCount > 1){
      section.remove(section.children[articleCount -1]);
    }
});

// page functions
var createNewPost = function(){
    // create new elements
  let newArticle = document.createElement('article');
  let newArticleHeader = document.createElement('h5');
  let newArticleParagrap = document.createElement('p');

// creating the text content
newArticleHeader.textContent = 'Another Blog Post';
newArticleParagrap.textContent = '“Protect your good image from the eyes of negative viewers, who may look at your good appearance with an ugly fiendish eye, and ruin your positive qualities with their chemical infested tongues.”';

// Appending child to parent
newArticle.appendChild(newArticleHeader);
newArticle.appendChild(newArticleParagrap);

// add class list to the new article
newArticle.classList.add('list-group-item');

return newArticle;

};