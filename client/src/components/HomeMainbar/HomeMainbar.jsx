import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './HomeMainbar.css'

const HomeMainbar = () => {

   var questionsList = [{ 
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
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
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]



  const location = useLocation()
    return (
        <div>
          <div>
            {
              location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
            }
          </div>
        </div>
    )
}

export default HomeMainbar