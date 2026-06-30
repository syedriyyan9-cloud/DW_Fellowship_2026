const questions = 
[
    "Capital city of Pakistan is: ",
    "Currency of Pakistan is: ",
    "National dish of Pakistan: ",
    "National Animal of Pakistan: "
];

const answers = 
[
    ["Lahore", "Islamabad", "Karachi"],
    ["PKR", "USD", "GBP"],
    ["Biryani", "Karahi", "Nihari"],
    ["Markhor", "Chakor", "Billi"]
];
const correct_answer_index = [1, 0, 2, 0];

const container = document.querySelector(".container")
const q_container = document.querySelector(".questions")
let score = 0

for (let i = 0; i < questions.length; i++) 
{

    const render_question = document.createElement("p")
    render_question.textContent = questions[i]
    q_container.appendChild(render_question)

    const questionDiv = document.createElement("div")
    questionDiv.classList.add("question")
    q_container.appendChild(questionDiv)
    let answered = false

    for (let j = 0; j < answers[i].length; j++) 
    {

        const optionDiv = document.createElement("div")

        const all_answers = document.createElement("span")
        all_answers.textContent = answers[i][j]

        const button = document.createElement("button")
        button.textContent = "Select Answer"

        button.addEventListener("click", () => 
            {
                if (answered) 
                    return
                answered = true

                if (j === correct_answer_index[i]) 
                {
                    all_answers.style.color = "green"
                    score++
                } 
                else 
                {
                    all_answers.style.color = "red"
                    score--
                }
            const buttons = questionDiv.querySelectorAll("button")
            buttons.forEach(btn => btn.disabled = true)
            console.log("Score:", score)
        })
        optionDiv.appendChild(all_answers)
        optionDiv.appendChild(button)
        questionDiv.appendChild(optionDiv)
    }
}