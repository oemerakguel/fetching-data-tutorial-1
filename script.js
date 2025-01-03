//console.log("Script loaded");
//console.log("Das ist der zweite Aufruf");
const userlist = document.getElementById('user-list');
const imageList = document.getElementById('image-list');
const albumList = document.getElementById('album-list');


// Define an array for users
let users = []; 
let images = []; // to be filled with images from api endpoint https://jsonplaceholder.typicode.com/photos
let albums = [];

// define async function to fetch users data
async function fetchUserData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(typeof(response);
        usersData = await response.json();
        // console.log(usersData);
        users = usersData;
        //console.log(users);
        renderUsers();
        
    } catch (error) {
        console.log("Wir bekommen beim Aufruf der Users-APi den folgenden Fehler", error);
    }
}


// define async function to fetch image data
async function fetchImageData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        imageData = await response.json();
        images = imageData.slice(0, 10);
        // console.log(images);
        renderImages();
    } catch (error) {
        console.log("Wir bekommen beim Fetching der Image API folgenden Fehler: ", error)
    }
    
}

async function fetchAlbumData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=10');
        albumData = await response.json();
        albums = albumData;
        // console.log(images);
        renderAlbums();
    } catch (error) {
        console.log("Wir bekommen beim Fetching der Album API folgenden Fehler: ", error)
    }
    
}
fetchUserData();
fetchImageData();
fetchAlbumData();

function renderUsers(){
    users.forEach((user) => {
        const userItem = document.createElement('li');
        userItem.innerHTML = user.name;
        //console.log(user);

        userlist.appendChild(userItem);
    });
}

function renderImages(){
    images.forEach((image) => {
        const imageItem = document.createElement('img');
        //console.log(imageItem);
        imageItem.setAttribute('src', image.url)
        imageItem.setAttribute('width', '200')
        imageList.appendChild(imageItem)

    });
}

function renderAlbums(){
    albums.forEach((album) => {
        const albumItem = document.createElement('li');
        albumItem.innerHTML = album.id + '. ' + album.title
        console.log(albumItem.innerHTML)
        albumList.appendChild(albumItem)

    });
}

// showUsers();
