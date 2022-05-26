const stories = document.getElementById("stories");

stories.addEventListener("click", goToStories);

function goToStories(){
    location.href = "stories.html";
}

const becomeHost = document.getElementById("become-a-host");

becomeHost.addEventListener("click", becomeAnHost);

function becomeAnHost(){
    location.href = "host.html";
}