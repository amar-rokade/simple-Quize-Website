const myQuestions = [
    
    {
      question: "Which tool can Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird? use to ensure code quality?",
      answers: {
        a: "Monkeys",
        b: "Lizards",
        c: "Hens",
        d: "Kites"
      },
      correctAnswer: "a"
    },
    {
      question: "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?",
      answers: {
        a: "P-cell",
        b: "D-Cell",
        c: "T-Cell",
        d: "Endothelial Cells"
      },
      correctAnswer: "c"
    },
    {
      question: "Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?",
      answers: {
        a: "BNT162",
        b: "PICOVACC",
        c: "Both A and B",
        d: "Neither A nor B"
      },
      correctAnswer: "a"
    },
    {
      question: "Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
      answers: {
        a: "Plasma Therapy",
        b: "Solidarity",
        c: "Remdesivir",
        d: "Hydroxychloroquine"
      },
      correctAnswer: "a"
    },
    {
      question: "How does Coronavirus transmit?",
      answers: {
        a: "When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.",
        b: "If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.",
        c: "If the distance is less than 1 meter from the infected person.",
        d: "All the above are correct."
      },
      correctAnswer: "d"
    },
    {
      question: "What happens to a person suffering from COVID-19?",
      answers: {
        a: "Around 80% of the people will require no treatment as such and will recover on their own.",
        b: "Around <20% or a small proportion may need hospitalisation.",
        c: "A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).",
        d: "All the above are correct"
      },
      correctAnswer: "d"
    },
    {
      question: "In which age group the COVID-19 spreads?",
      answers: {
        a: "COVID-19 occur in all age groups.",
        b: " Coronavirus infection is mild in children.",
        c: "Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.",
        d: " All the above are correct."
      },
      correctAnswer: "d"
    },
    {
      question: "What is Coronavirus?",
      answers: {
        a: "It is a large family of viruses.",
        b: "It belongs to the family of Nidovirus.",
        c: "Both A and B are correct.",
        d: "Only A is correct."
      },
      correctAnswer: "c"
    },
    {
      question: "The first case of novel coronavirus was identified in .....",
      answers: {
        a: "Beijing",
        b: "Shanghai",
        c: "Wuhan, Hubei",
        d: "Tianjin"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following diseases are related to coronavirus?",
      answers: {
        a: "MERS",
        b: "SARS",
        c: "Both A and B",
        d: "Neither A nor B"
      },
      correctAnswer: "c"
    },
];

function  Restart(){
  location.reload()
}

function make_question(a){
  currentQuestion = myQuestions[a]
  const output = [];
  var answers = []
  for(letter in currentQuestion.answers){
    //colsole.log(letter)
    // ...add an HTML radio button
    answers.push(
      `<label>
        <input type="radio" name="question${a}" onclick="Save_answer()" id="${letter}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label><br>`
    );
  }
  // add this question and its answers to the output
  output.push(
    `<div class="question"> ${currentQuestion.question} </div> <br>
    <div class="answers"> ${answers.join('')} </div>`
  );
  quizContainer.innerHTML = output.join('');
  back.setAttribute("data-catid",a)
  next.setAttribute("data-catid",a)
}

function is_user_alredy_answer(a){
  for (ans in user_answers) {
    console.log(ans)
    if (a == ans){
      const rbs = document.querySelectorAll(`input[name='question${a}']`);
            for (const rb of rbs){
                var u_ans = user_answers[a]
                 if (rb.value == u_ans){
                  document.getElementById(rb.value).checked = true;
                  break;
                 }   
                }
            }
    }
  }

 
//initialize dict of users answer
var user_answers ={}


//save user ans 
function Save_answer(){
  a = document.getElementById("next").getAttribute("data-catid");
  const rbs = document.querySelectorAll(`input[name='question${a}']`);
      let selectedValue;
      for (const rb of rbs) {
          if (rb.checked) {
              selectedValue = rb.value;
              user_answers[a] = selectedValue;
              break;
          }
      }
}

//next button
function Next_fn(){
  a = document.getElementById("next").getAttribute("data-catid");
  Save_answer()
  if (a == 9) {
    make_question(0);
  }
  else{
    make_question(parseInt(a) + 1);
  }
  is_user_alredy_answer(parseInt(a) + 1)
}

//back button
function Back_fn(){
  a = document.getElementById("back").getAttribute("data-catid");
  Save_answer()
  if (a == 0) {
    make_question(9);
  }
  else{
    make_question(parseInt(a) - 1);
  }
  is_user_alredy_answer(parseInt(a) - 1)
}

//submit quize
function showResults(){
  document.getElementById('quize_part').style.display = "none";
  document.getElementById('submit').style.display = "none";
  document.getElementById('final').style.visibility = "visible";
  document.getElementById('retry').style.visibility = "visible";
  document.getElementById('heading').innerHTML = "Thank You !";
  var score = 0
  for (ans in user_answers) {
    var re = user_answers[ans]
    if (re == myQuestions[ans].correctAnswer){
      score++
    }
    
   }
  document.getElementById("results").innerHTML= `${score} out of ${myQuestions.length}`;
}



const quizContainer = document.getElementById('quiz');
const next = document.getElementById('next');
const back = document.getElementById('back');
make_question(0) //on page load to show first questions
