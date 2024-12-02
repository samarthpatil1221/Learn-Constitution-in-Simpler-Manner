import React from "react";
import "./TypesOfConstitution.css";
import image11 from '../images/img1.jpg'; // Replace with actual paths
import image12 from '../images/img2.jpg'; // Replace with actual paths
import image13 from '../images/img3.jpg'; // Replace with actual paths
import image14 from '../images/img4.jpg'; // Replace with actual paths


const TypesOfConstitution = () => {
    const types = [
        {
            title: "Written Constitution",
            description: [
                "Codified into a single formal document.",
                "Serves as the supreme law of the land.",
                "Defines the roles of government branches.",
                "Examples: United States, India.",
            ],
            image: image11, // Local image
        },
        {
            title: "Unwritten Constitution",
            description: [
                "Not codified into a single document.",
                "Evolves through traditions, precedents, and statutes.",
                "Highly flexible and adaptable to societal changes.",
                "Example: United Kingdom.",
            ],
            image: image12, // Local image
        },
        {
            title: "Rigid Constitution",
            description: [
                "Difficult to amend, requiring special procedures.",
                "Provides stability and protects core principles.",
                "Ensures fundamental laws are preserved.",
                "Example: United States.",
            ],
            image: image13, // Local image
        },
        {
            title: "Flexible Constitution",
            description: [
                "Can be amended through regular legislative processes.",
                "Allows quick adaptation to new circumstances.",
                "Promotes legislative flexibility.",
                "Example: United Kingdom.",
            ],
            image: image14, // Local image
        },
    ];

    return (
        <div className="constitution-container">
            <h2 className="constitution-title">Types of Constitutions</h2>
            <div className="constitution-grid">
                {types.map((type, index) => (
                    <div key={index} className="constitution-card">
                        <img
                            src={type.image}
                            alt={type.title}
                            className="constitution-card-image"
                        />
                        <h3 className="constitution-card-title">{type.title}</h3>
                        <ul className="constitution-card-description">
                            {type.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TypesOfConstitution;
