import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux';


const HomeMainbar = () => { 

  const location = useLocation()
  const user = 1;
 
  //const user = useSelector(state => state.user);
  
  const navigate = useNavigate();
  
  const questionsList = useSelector(state => state.questionsReducer)
 //console.log(questionsList)

 
  /*var questionsList = [{
    _id: '1',
    upVote: 3,
    downVote: 2,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "mongo-db"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [{
        answerBody: "Answer",
        userAnswered: 'kumar',
        answeredOn: "jan 2",
        userId: 2,
    }]
  },{
    _id: '2',
    upVote: 3,
    downVote: 2,
    noOfAnswer: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano",
    userId: 2,
    askedOn: "jan 1",
    answer: [{
        answerBody: "Answer",
        userAnswered: 'kumar',
        answeredOn: "jan 2",
        userId: 2,
    }]
  },{
    _id: '3',
    upVote: 3,
    downVote: 2,
    noOfAnswer: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "R", "mongo-db"],
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 3,
    answer: [{
        answerBody: "Answer",
        userAnswered: 'kumar',
        answeredOn: "jan 2",
        userId: 2,
    }]
  }] */


  
 

 const checkAuth = () => {
      if(user === null){
       
      //console.log("user is null");
        alert("login or signup to ask a question")
      navigate('/Auth')
    
      }else{
      // console.log("user is not null");
        navigate('/AskQuestion')
     
      }
  } 
  
  
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions </h1> : <h1>All Questions</h1>
        }
       
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
       
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
            

          </>
        }
      </div>

      
    </div>
  )
}

export default HomeMainbar
