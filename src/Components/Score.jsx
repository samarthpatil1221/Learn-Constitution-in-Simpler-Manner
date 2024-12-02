import React from "react";

const Score = ({ score, totalQuestions, wrongAnswers }) => {
    return (
        <div>
            <h2>Your Score: {score}/{totalQuestions}</h2>
            {wrongAnswers.length > 0 && (
                <div>
                    <h3>Review Your Answers</h3>
                    <ul>
                        {wrongAnswers.map((item, index) => (
                            <li key={index}>
                                <strong>Question:</strong> {item.question} <br />
                                <strong>Your Answer:</strong> {item.userAnswer || "Not Answered"} <br />
                                <strong>Correct Answer:</strong> {item.correctAnswer}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Score;
