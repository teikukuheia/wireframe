const stories = document.getElementById("stories");

stories.addEventListener("click", goToStories);

function goToStories(){
    location.href = "stories.html";
}