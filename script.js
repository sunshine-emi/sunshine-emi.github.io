function toggleAbout() {
    let about = document.getElementById("txt-about");
    let seeAbout = document.getElementById("seeMore");
    
    if(about.classList == 'hidden') {
        about.classList.remove("hidden");
        seeAbout.innerHTML = 'See less...';
    }
    else {
        about.classList.add("hidden");
        seeAbout.innerHTML = 'See more...';        
    }
}

function toggleCareer() {
    let career = document.getElementById("txt-career");
    let seeCareer = document.getElementById("seeMore2");

    if(career.classList == 'hidden') {
        career.classList.remove("hidden");
        seeCareer.innerHTML = 'See less...';
    }
    else {
        career.classList.add("hidden");
        seeCareer.innerHTML = 'See more...';        
    }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function showScore() {
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let q4 = document.getElementById("q4").value;
    let resultDiv = document.getElementById("result");
    let resetButton = document.getElementById("reset");
    
    resultDiv.classList.remove("hidden");
    score = 0;
    
    
    if(q1 == "<img>"){
        score++;
        resultDiv.innerHTML += "<p>Question 1 - Correct</p>";
    }else{
        resultDiv.innerHTML += "<p>Question 1 - Incorrect</p>";
    }
    
    if (q2 == "href"){
        score++;
        resultDiv.innerHTML += "<p>Question 2 - Correct</p>";
    }else{
        resultDiv.innerHTML += "<p>Question 2 - Incorrect</p>";
    }
    
    if(q3 == "document.getElementById"){
        score++;
        resultDiv.innerHTML += "<p>Question 3 - Correct</p>";
    }else{
        resultDiv.innerHTML += "<p>Question 3 - Incorrect</p>";
    }
    
    if (q4 =="margin:"){
        score++;
        resultDiv.innerHTML += "<p>Question 4 - Correct</p>";
    }else{
        resultDiv.innerHTML += "<p>Question 4 - Incorrect</p>";
    }
    
    resultDiv.innerHTML += "<p>You scored " + score + " pts out of 4 pts!</p>";
    
    resetButton.classList.remove("hidden");
}

function resetQuiz() {
    let resultDiv = document.getElementById("result");
    let resetButton = document.getElementById("reset");
    let q1 = document.getElementById("q1");
    let q2 = document.getElementById("q2");
    let q3 = document.getElementById("q3");
    let q4 = document.getElementById("q4");
    
    resultDiv.innerHTML = "";
    
    resetButton.classList.add("hidden");

    q1.innerHTML="<option>Select...</option><option>&lt;a&gt;</option><option>&lt;img&gt;</option><option>&lt;button&gt;</option><option>&lt;em&gt;</option>";
    q2.innerHTML="<option>Select...</option><option>href</option><option>src</option><option>link</option><option>for</option>";
    q3.innerHTML="<option>Select...</option><option>document.getElementByClass</option><option>doc.getElemById</option><option>document.getElementById</option><option>document.getelementbyid</option>";
    q4.innerHTML="<option>Select...</option><option>padding:</option><option>margin:</option><option>display:</option><option>givemespace:</option>";
}