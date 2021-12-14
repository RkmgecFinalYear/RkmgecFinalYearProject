const question =document.querySelector('#question');
const choise =Array.from(document.querySelectorAll('choice-text'));
const  progressText=document.querySelector('#prgressText');
const scoreText =document.querySelector('#score');
const progressBarfull= document.querySelector('#progressBarfull');

let currentQuestion ={}
let acceptingAnswers =true
let score=0
let questionCounter=0
let availbleQuestion =[]

const questions = [ 
    {
    //image:"./images/pink-panther.png",
     question:"which is the panther's color?",
     choise1:"Yellow",
     choise2:"Blue",
     choise3:"Pink",
     choise4:"Orange",
     answer:"pink",
    },

    {
       //image:"A:\react project\my-app\public\img",
      question: "what is my color?",
      choise1:"Yellow",
      choise2:"Red",
      choise3:"Blue",
      choise4:"Green",
      answer: "red",
    },
    {
      //image:"A:\react project\my-app\public\img",
      question: "what is my color?",
      choise1:"yellow",
      choise2:"Green",
      choise3:"red",
      choise4:"blue",
      answer:"green",
    
    },
    {
      //image:"A:A:\react project\my-app",
      question: "what is the bird's color?",
      choise1:"red",
      choise2:"green",
      choise3:"yellow",
      choise4:"blue",
      answer:"blue",
     
    }
  ]
  const SCORE_POINT=100
  const MAX_QUESTION =4


 StartGame=()=>{
    questionCounter=0
    score=0
    availbleQuestion=[...questions]
    getNewQuestion()

  }


getNewQuestion =() =>{
  if( acceptingAnswers.length === 0 ||questionCounter>MAX_QUESTION) {
      localStorage.setItem;{'mostRecentScore',score}
      return window.location.assign;{'/end.html'}


    }
    questionCounter++
    progressText.innerText='Question ${questionCounter} of ${MAX_QUESTION} '
    progressBarfull.style.width = '${(questionCounter/max_QESTIONS)*100}%'


    const questionIndex=math.floor(math.random() * availableQestion.length)
    currentQuestion=availbleQuestion[questionIndex]
    question.innerText=currentQuestion.question

    choise.forEach(choise=>{
      const number =choise.dataset['number']
      choise.innerText=currentQuestion['chice'+number]
    })

    availbleQuestion.splice(questionIndex,1)

    acceptingAnswers = true
  }
 
  choise.forEach(choise=>{
    choise.addEventListener('click',e=>{
      if(!acceptingAnswers)return
      acceptingAnswers=false
      const selectedChoise=e.target
      const selectedAnswer = selectedChoise.dataset['number']

      let ClassToApply=selectedAnswer==currentQuestion.answer? 'correct': 'incorrect'


      if(ClassToApply==='correct'){
        incrementScore(SCORE_POINT)
      }

      selectedChoise.parentelement.classList.add(ClassToApply)
      setTimeout( ()=>{
          selectedChoise.parentelement.classList.remove(ClassToApply)
          getNewQuestion()

      },100)
    })
  })

  incrementScore=num =>{
      score +=num
      scoreText.innerText=score
  }
  StartGame()

