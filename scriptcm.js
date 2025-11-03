const addListBtn = document.getElementById('add-list-btn');
const container = document.getElementById('lists-container');

const dummyItems = [
  "Top 5 Times We Barely Survived mids",
  "Most Legendary bache in class",
  "Unsolved Mysteries of the Canteen cult",
  "People Who will get choka",
  "Weirdest Questions by huzz bhai"
];

addListBtn.addEventListener('click', () => {
  const title = prompt("Enter your list title:")?.trim() || "Untitled List";

  const listDiv = document.createElement('div');
  listDiv.classList.add('list');

  const heading = document.createElement('h3');
  heading.textContent = title;

  const ul = document.createElement('ul');
  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = dummyItems[Math.floor(Math.random() * dummyItems.length)];
    ul.appendChild(li);
  }

  listDiv.appendChild(heading);
  listDiv.appendChild(ul);
  container.appendChild(listDiv);

  listDiv.scrollIntoView({ behavior: 'smooth' });
});

