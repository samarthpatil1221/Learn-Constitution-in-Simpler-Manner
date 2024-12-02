import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import qBank from "./QuestionBank";
import Question from "./Question";
import Score from "./Score";
import "./Quiz.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
            wrongAnswers: [],
            difficulty: "",
            selectedQuestions: [],
        };
    }

    handleDifficultyChange = (difficulty) => {
        this.setState({
            difficulty,
            selectedQuestions: this.state.questionBank[difficulty],
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
            wrongAnswers: [],
        });
    };

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
        this.handleNextQuestion();
    };

    checkAnswer = () => {
        const { selectedQuestions, currentQuestion, selectedOption } = this.state;
        const correctAnswer = selectedQuestions[currentQuestion].answer;

        if (selectedOption === correctAnswer) {
            this.setState((prevState) => ({ score: prevState.score + 1 }));
        } else {
            const wrongAnswer = {
                question: selectedQuestions[currentQuestion].question,
                userAnswer: selectedOption,
                correctAnswer: correctAnswer,
            };
            this.setState((prevState) => ({
                wrongAnswers: [...prevState.wrongAnswers, wrongAnswer],
            }));
        }
    };

    handleNextQuestion = () => {
        const { selectedQuestions, currentQuestion } = this.state;
        if (currentQuestion + 1 < selectedQuestions.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            this.setState({ quizEnd: true });
        }
    };

    render() {
        const { currentQuestion, selectedOption, score, quizEnd, wrongAnswers, difficulty, selectedQuestions } =
            this.state;

        return (
            <div className="App d-flex flex-column align-items-center justify-content-center">
                <h1 className="app-title">Indian Constitution Quiz</h1>
                {!difficulty ? (
                    <div className="difficulty-selection">
                    <h2>Select Difficulty Level</h2>
                    <div className="difficulty-buttons">
                        <div className="difficulty-card easy" onClick={() => this.handleDifficultyChange("easy")}>
                            <h3>Easy</h3>
                            <p>Basic questions to get you started!</p>
                        </div>
                        <div className="difficulty-card medium" onClick={() => this.handleDifficultyChange("medium")}>
                            <h3>Medium</h3>
                            <p>Test your intermediate knowledge!</p>
                        </div>
                        <div className="difficulty-card hard" onClick={() => this.handleDifficultyChange("hard")}>
                            <h3>Hard</h3>
                            <p>Challenge yourself with advanced questions!</p>
                        </div>
                    </div>
                </div>
                
                ) : !quizEnd ? (
                    <div className="question-card">
                        <Question
                            question={selectedQuestions[currentQuestion]}
                            selectedOption={selectedOption}
                            onOptionChange={this.handleOptionChange}
                            onSubmit={this.handleFormSubmit}
                        />
                    </div>
                ) : (
                    <div className="score">
                        <Score score={score} totalQuestions={selectedQuestions.length} wrongAnswers={wrongAnswers} />
                        <button
                            className="play-again-button"
                            onClick={() => window.location.reload()}
                        >
                            Play Again
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
