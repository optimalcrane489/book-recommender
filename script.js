const recommendations = {
    "fiction": ["The Great Gatsby", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Catcher in the Rye"],
    "non-fiction": ["Sapiens", "Educated", "Becoming", "The Immortal Life of Henrietta Lacks", "The Wright Brothers"],
    "mystery": ["Gone Girl", "The Girl with the Dragon Tattoo", "Big Little Lies", "In the Woods", "The Da Vinci Code"],
    "science-fiction": ["Dune", "Ender's Game", "The Hitchhiker's Guide to the Galaxy", "Neuromancer", "Snow Crash"],
    "fantasy": ["Harry Potter and the Sorcerer's Stone", "The Hobbit", "The Name of the Wind", "A Game of Thrones", "The Way of Kings"],
    "romance": ["Pride and Prejudice", "Jane Eyre", "The Notebook", "Me Before You", "Outlander"]
};

function getRecommendations() {
    const form = document.getElementById('interestsForm');
    const checkboxes = form.elements['interests'];
    const selectedInterests = [];
    
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedInterests.push(checkboxes[i].value);
        }
    }

    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';
    
    let allRecommendations = [];

    selectedInterests.forEach(interest => {
        if (recommendations[interest]) {
            allRecommendations = allRecommendations.concat(recommendations[interest]);
        }
    });

    allRecommendations = allRecommendations.slice(0, 10);

    allRecommendations.forEach(book => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        const imageName = book.split(' ').join('_') + '.jpg';
        img.src = 'images/' + imageName;
        img.alt = book;

        const text = document.createElement('span');
        text.textContent = book;

        li.appendChild(img);
        li.appendChild(text);
        booksList.appendChild(li);
    });
}
