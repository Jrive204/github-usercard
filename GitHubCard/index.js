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

// const followersArray = [];

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

  // console.log(response)
  //   let data =  response.data       

  //    for ( let item in data) {
  //      console.log(`Hello`)
  //     cardss.appendChild(newCards);    
  //     const newCards = usercard(item)

  // }

    
  // })




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
    profa.setAttribute(`href`, d.html_url)
    profa.textContent = `${d.html_url}`
    // check later var = link name
  const followers = document.createElement('p');
    followers.textContent = `followers: ${d.followers}`
  const following = document.createElement('p');
    following.textContent = `following: ${d.following}`
  const biography = document.createElement('p');
    biography.textContent = `Bio: ${d.bio}`

  const calanderdiv = document.createElement(`div`)
    calanderdiv.classList.add(`calender`)
    calanderdiv.textContent = `\u25BC`

  const scrip = document.createElement(`script`)
  // scrip.textContent =     `new GitHubCalendar(".calendar", "Jrive204", { responsive: true });`
 
  // scrip.textContent = `${cal}`

  //class list add
  bigDiv.classList.add('card');
  cardInfo.classList.add('card-info');
  nameHead.classList.add('name');
  userName.classList.add('username');
  //append
  bigDiv.appendChild(userImg);
  bigDiv.appendChild(cardInfo);
  bigDiv.appendChild(calanderdiv);
  calanderdiv.appendChild(scrip)
  cardInfo.appendChild(nameHead);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profa)
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(biography);

   
  let calanderall = document.querySelectorAll(`.calender`)
  calanderall.forEach(ele =>{
    console.log(`hello`)
    ele.style.color = `red`
    // ele.calanderdiv.textContent = `\u25BC`
    // ele.createElement(`div`).classList.add(`Calander`)
    // ele.createElement(`div`)
    // ele.classList.add(`Calander`)

  })
 

  return bigDiv;
  }
let cardss = document.querySelector(`.cards`);

 let calander = document.querySelector(`.card`)
  let calanderdiv = document.createElement(`div`)  
  


axios.get(`https://api.github.com/users/Jrive204`)
.then(response => {  
  cardss.appendChild(usercard(response.data))
  // let calander = document.querySelector(`.card`)
  // let calanderdiv = document.createElement(`div`)
  // calanderdiv.classList.add(`Calender`)
  // calanderdiv.textContent = `\u25BC`
  // calander.appendChild(calanderdiv)

  // usercard(response.data)
    // console.log(response.data)
  })
  
axios.get(`https://api.github.com/users/Jrive204/followers`)
.then(response => {
  response.data.forEach(item => {
    // console.log(item)  
    let logininfo = item.login;
    let https = `https://api.github.com/users/${logininfo}`
    axios.get(https).then(result => {
      cardss.appendChild(usercard(result.data))
      
    //   let calanderall = document.querySelectorAll(`.card`)
    // calanderall.forEach(ele =>{
    //   console.log(`hello`)
    //   ele.createElement(`div`).classList.add(`Calander`)
    //   // ele.createElement(`div`)
    //   // ele.classList.add(`Calander`)

    // })
    }) 
   
  
    
  }) 
    

})

.catch( err => {
  console.log(`Error`,err);
})

  // let calander = document.querySelector(`.card`)

  // let calanderdiv = document.createElement(`div`)
  // calanderdiv.classList.add(`Calender`)
  // calanderdiv.textContent = `hello`
  // monkey.appendChild(calanderdiv)
