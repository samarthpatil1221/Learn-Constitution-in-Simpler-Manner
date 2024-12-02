import React from "react";

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <h2 className="question">{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <label key={index} className={`option-label ${selectedOption === option ? "selected" : ""}`}>
                        <input
                            type="radio"
                            name="answer"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                            style={{ display: "none" }}
                        />
                        {option}
                    </label>
                ))}
            </div>
            <button type="submit" className="submit-button">
                Submit
            </button>
        </form>
    );
};

export default Question;
