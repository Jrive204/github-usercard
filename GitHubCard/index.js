/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
function usercard (d){
  //variables
  const bigDiv = document.createElement('div');
  const userImg = document.createElement('img');
    userImg.src = d.avatar_url
  const cardInfo = document.createElement('div');
  const nameHead = document.createElement('h3');
    nameHead.textContent = d.name
  const userName = document.createElement('p');
    userName.textContent = d.login
  const location = document.createElement('p');
    location.textContent = `location: ${d.location}`

  const profile = document.createElement('p');
    profile.textContent = `Profile:`
  const profa = document.createElement(`a`)
    profa.href = d.url
    // check later var = link name
  const followers = document.createElement('p');
    followers.textContent = d.followers
  const following = document.createElement('p');
    following.textContent = d.following
  const biography = document.createElement('p');
    biography.textContent = `Bio: ${d.bio}`
  //class list add
  bigDiv.classList.add('card');
  cardInfo.classList.add('card-info');
  nameHead.classList.add('name');
  userName.classList.add('username');
  //append
  bigDiv.appendChild(userImg);
  bigDiv.appendChild(cardInfo);
  cardInfo.appendChild(nameHead);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profa)
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(biography);
 
  return bigDiv;
  }





axios.get(`https://api.github.com/users/Jrive204`)
.then(response => {
  console.log(response)
    let data =  response.data 
     for ( let item in data => {
       console.log(`Hello`)
      // let cardss = document.getElementsByClassName(`cards`);
      // const newCards = usercard(item)
      // cardss.appendChild(newCards);
  })

    
  })

// .catch( err => {
//   console.log(`Error`,err);
// })
