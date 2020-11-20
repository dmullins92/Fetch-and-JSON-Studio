// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function (json) {
            // console.log(json);
            let container = document.getElementById('container');
            let astronautCount = 0;
            json.sort(function (a,  b) {
                return a.hoursInSpace - b.hoursInSpace;
            });                       
            for (astronaut in json) {
                astronautCount++
                let activeColor = 'black';                
                if (json[astronaut].active) {
                    activeColor = 'green';
                }
                container.innerHTML +=
               `<div class="astronaut">
                <div class="bio">
                    <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[astronaut].hoursInSpace}</li>
                        <li style="color:${activeColor}">Active: ${json[astronaut].active}</li>
                        <li>Skills: ${json[astronaut].skills.join(', ')}</li>
                        <li>Astronaut Count: ${astronautCount}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[astronaut].picture}">
            </div>`;
            }            
        });
    });
});