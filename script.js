// TODO: add code here
window.addEventListener("load", function() {
  fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
    response.json().then(function(data) {
      //console.log(data);   
      const div = document.getElementById("container");
      div.textContent = `We have ${data.length} astronauts`;
      data.sort(function (a,b) {
          return b.hoursInSpace - a.hoursInSpace;
        });
      
      for(let i=0; i<data.length; i++){
        
        let activeClass = data[i].active ? 'active' : '';
        
        div.innerHTML += `
        <div class="astronaut">
          <div class="bio">
            <h3>${data[i].firstName} ${data[i].lastName}</h3>
            
            <ul>
              <li>Hours in Space: ${data[i].hoursInSpace}</li>
              <li class="${activeClass}">Active: ${data[i].active}</li>
              <li>Skills: ${data[i].skills.join(', ')}</li>
            </ul>
          </div>
          <img class="avatar" src="${data[i].picture}">
          
          </div>
          `  
      }
      
    });
  });
});
