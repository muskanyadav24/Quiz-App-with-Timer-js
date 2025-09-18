let quizData = {
    HTML: [
        { q: "1. Who invented HTML?", options: ["Tim Berners-Lee", "Bill Gates", "Elon Musk", "Steve Jobs"], correct: 0 },
        { q: "2. What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Tool Markup Language", "None"], correct: 1 },
        { q: "3. Largest heading tag?", options: ["&lt;head&gt;", "&lt;h6&gt;", "&lt;h1&gt;", "&lt;heading&gt;"], correct: 2 },
        { q: "4. Which tag is used for paragraph?", options: ["&lt;para&gt;", "&lt;p&gt;", "&lt;pg&gt;", "&lt;paragraph&gt;"], correct: 1 },
        { q: "5. Which tag inserts a line break?", options: ["&lt;br&gt;", "&lt;lb&gt;", "&lt;break&gt;", "&lt;newline&gt;"], correct: 0 },
        { q: "6. HTML is what type of language?", options: ["Programming", "Markup", "Scripting", "Network"], correct: 1 },
        { q: "7. Which tag is used for images?", options: ["&lt;image&gt;", "&lt;src&gt;", "&lt;img&gt;", "&lt;picture&gt;"], correct: 2 },
        { q: "8. Which tag creates hyperlink?", options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"], correct: 0 },
        { q: "9. Default extension of HTML?", options: [".htm", ".html", ".web", ".doc"], correct: 1 },
        { q: "10. HTML tables are created using?", options: ["&lt;tbl&gt;", "&lt;table&gt;", "&lt;tab&gt;", "&lt;tr&gt;"], correct: 1 },
        { q: "11. HTML list tag?", options: ["&lt;ol&gt;, &lt;ul&gt;", "&lt;list&gt;", "&lt;li&gt;, &lt;ls&gt;", "&lt;ulist&gt;"], correct: 0 },
        { q: "12. Which attribute sets image source?", options: ["href", "link", "src", "path"], correct: 2 },
        { q: "13. Which tag defines metadata?", options: ["&lt;meta&gt;", "&lt;data&gt;", "&lt;head&gt;", "&lt;info&gt;"], correct: 0 },
        { q: "14. Which attribute opens link in new tab?", options: ["open", "target='_blank'", "newtab", "link='_new'"], correct: 1 },
        { q: "15. HTML tag for checkbox?", options: ["&lt;input type='checkbox'&gt;", "&lt;checkbox&gt;", "&lt;check&gt;", "&lt;tick&gt;"], correct: 0 },
        { q: "16. Which tag is used for dropdown?", options: ["&lt;select&gt;", "&lt;dropdown&gt;", "&lt;optionbox&gt;", "&lt;list&gt;"], correct: 0 },
        { q: "17. Which attribute adds tooltip?", options: ["hint", "title", "alt", "tooltip"], correct: 1 },
        { q: "18. Which tag is used for forms?", options: ["&lt;form&gt;", "&lt;input&gt;", "&lt;action&gt;", "&lt;submit&gt;"], correct: 0 },
        { q: "19. Which tag for inline frame?", options: ["&lt;iframe&gt;", "&lt;frame&gt;", "&lt;window&gt;", "&lt;embed&gt;"], correct: 0 },
        { q: "20. Which tag highlights text?", options: ["&lt;highlight&gt;", "&lt;mark&gt;", "&lt;hl&gt;", "&lt;strong&gt;"], correct: 1 }
    ],
    CSS: [
        { q: "1. What does CSS stand for?", options: ["Creative Style System", "Colorful Style Sheet", "Cascading Style Sheets", "Computer Style Syntax"], correct: 2 },
        { q: "2. Which property changes text color?", options: ["text-align", "color", "font-style", "background"], correct: 1 },
        { q: "3. Which CSS property is used to change background color?", options: ["background", "bgcolor", "color", "background-color"], correct: 3 },
        { q: "4. Which property controls the size of text?", options: ["text-style", "font-size", "text-size", "font-weight"], correct: 1 },
        { q: "5. Which value of position makes an element stick to the viewport?", options: ["fixed", "absolute", "sticky", "relative"], correct: 0 },
        { q: "6. Which CSS property makes text bold?", options: ["font-style", "font-weight", "text-bold", "weight"], correct: 1 },
        { q: "7. Which property is used to set the spacing between letters?", options: ["word-spacing", "text-spacing", "letter-spacing", "spacing"], correct: 2 },
        { q: "8. How do you select an element with id='header' in CSS?", options: [".header", "#header", "header", "*header"], correct: 1 },
        { q: "9. How do you select all <p> elements inside a div?", options: ["div p", "p div", "div+p", "div.p"], correct: 0 },
        { q: "10. Which property controls the space inside the element border?", options: ["margin", "border", "padding", "spacing"], correct: 2 },
        { q: "11. Which property controls the space outside the element border?", options: ["margin", "spacing", "padding", "gap"], correct: 0 },
        { q: "12. Which CSS unit is relative to the parent element's font size?", options: ["em", "px", "rem", "%"], correct: 0 },
        { q: "13. Which CSS unit is relative to the root element's font size?", options: ["rem", "em", "px", "pt"], correct: 0 },
        { q: "14. Which property sets the order of flexible items?", options: ["align", "flex-order", "order", "z-index"], correct: 2 },
        { q: "15. Which property aligns text to the center?", options: ["text-style", "align", "text-align", "font-align"], correct: 2 },
        { q: "16. Which CSS property is used to make corners rounded?", options: ["border", "border-round", "border-radius", "corner"], correct: 2 },
        { q: "17. Which property specifies shadow effects for text?", options: ["box-shadow", "shadow", "font-shadow", "text-shadow"], correct: 3 },
        { q: "18. Which CSS property is used for transitions?", options: ["transform", "transition", "animate", "effect"], correct: 1 },
        { q: "19. Which CSS property controls the z-axis stacking of elements?", options: ["stack", "z-axis", "order", "z-index"], correct: 3 },
        { q: "20. Which display value is used to hide an element?", options: ["invisible", "none", "hidden", "block"], correct: 1 }
    ],
    JavaScript: [
        { q: "1. Who developed JavaScript?", options: ["Tim Berners-Lee", "Brendan Eich", "Guido van Rossum", "Bill Gates"], correct: 1 },
        { q: "2. Which symbol is used for single-line comments?", options: ["//", "/* */", "#" ], correct: 0 },
        { q: "3. Which keyword is used to declare a variable in ES6?", options: ["var", "let", "define", "new"], correct: 1 },
        { q: "4. Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Oracle", "Sun Microsystems"], correct: 0 },
        { q: "5. Which of the following is NOT a JavaScript data type?", options: ["String", "Boolean", "Float", "Undefined"], correct: 2 },
        { q: "6. Which function is used to print output in the console?", options: ["print()", "console.log()", "echo()", "log.print()"], correct: 1 },
        { q: "7. Which symbol is used for strict equality?", options: ["=", "==", "===", "!="], correct: 2 },
        { q: "8. Which method is used to parse a string to integer?", options: ["parseInt()", "toInteger()", "int()", "parse()"], correct: 0 },
        { q: "9. How do you create a function in JavaScript?", options: ["function = myFunc()", "def myFunc()", "function myFunc()", "func myFunc()"], correct: 2 },
        { q: "10. Which object is used for math operations?", options: ["Calc", "Math", "Number", "Operator"], correct: 1 },
        { q: "11. Which event occurs when a user clicks on an element?", options: ["onmouseclick", "onmouseover", "onclick", "onpress"], correct: 2 },
        { q: "12. Which operator is used to assign a value?", options: ["==", "=", "===", ":"], correct: 1 },
        { q: "13. Which method removes the last element of an array?", options: ["pop()", "remove()", "shift()", "delete()"], correct: 0 },
        { q: "14. Which method adds a new element at the end of an array?", options: ["push()", "append()", "add()", "insert()"], correct: 0 },
        { q: "15. Which keyword is used to stop a loop?", options: ["exit", "stop", "break", "end"], correct: 2 },
        { q: "16. Which operator is used to combine conditions?", options: ["&&", "||", "!", "&"], correct: 0 },
        { q: "17. Which keyword is used to handle errors?", options: ["error", "catch", "throw", "try"], correct: 3 },
        { q: "18. Which function is used to convert JSON string to object?", options: ["JSON.stringify()", "JSON.parse()", "parse.JSON()", "JSON.convert()"], correct: 1 },
        { q: "19. Which loop executes at least once even if the condition is false?", options: ["for", "while", "do...while", "foreach"], correct: 2 },
        { q: "20. Which method joins array elements into a string?", options: ["concat()", "join()", "combine()", "toString()"], correct: 1 }
    ],
    GK: [
        { q: "1. Who is the father of Computer?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], correct: 1 },
        { q: "2. National animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], correct: 1 },
        { q: "3. Which is the largest planet in our Solar System?", options: ["Earth", "Jupiter", "Saturn", "Mars"], correct: 1 },
        { q: "4. Who wrote the Indian National Anthem?", options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Subhash Chandra Bose"], correct: 1 },
        { q: "5. Which country is known as the Land of Rising Sun?", options: ["China", "Japan", "Thailand", "Korea"], correct: 1 },
        { q: "6. Who was the first Prime Minister of India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"], correct: 1 },
        { q: "7. Which is the smallest continent?", options: ["Europe", "Australia", "Antarctica", "South America"], correct: 1 },
        { q: "8. Who discovered Gravity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: 1 },
        { q: "9. Which is the longest river in the world?", options: ["Nile", "Amazon", "Ganga", "Yangtze"], correct: 0 },
        { q: "10. Which is the national sport of Japan?", options: ["Sumo Wrestling", "Judo", "Karate", "Baseball"], correct: 0 },
        { q: "11. Which is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], correct: 1 },
        { q: "12. Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"], correct: 0 },
        { q: "13. Which country hosted the 2016 Olympics?", options: ["China", "Brazil", "UK", "Russia"], correct: 1 },
        { q: "14. Which planet is called the Red Planet?", options: ["Mars", "Venus", "Mercury", "Jupiter"], correct: 0 },
        { q: "15. Who was the first woman Prime Minister of India?", options: ["Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi", "Pratibha Patil"], correct: 0 },
        { q: "16. What is the currency of USA?", options: ["Dollar", "Pound", "Euro", "Peso"], correct: 0 },
        { q: "17. Which organ purifies our blood?", options: ["Heart", "Kidney", "Lungs", "Liver"], correct: 1 },
        { q: "18. Which is the highest mountain in the world?", options: ["K2", "Mount Everest", "Kanchenjunga", "Makalu"], correct: 1 },
        { q: "19. Who was known as the Iron Man of India?", options: ["Mahatma Gandhi", "Subhash Chandra Bose", "Sardar Patel", "Bhagat Singh"], correct: 2 },
        { q: "20. Which is the national bird of India?", options: ["Sparrow", "Parrot", "Peacock", "Eagle"], correct: 2 }
    ]
};

let selectedCategory = null;
let selectedCount = 0;
let currentIndex = 0;
let timerInterval;
let correctCount = 0;
let wrongCount = 0;

document.querySelectorAll("#option-category button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll("#option-category button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const txt = btn.innerText.trim().toLowerCase();
        if (txt === "gk" || txt === "general knowledge") selectedCategory = "GK";
        else if (txt === "html") selectedCategory = "HTML";
        else if (txt === "css") selectedCategory = "CSS";
        else if (txt === "javascript" || txt === "js") selectedCategory = "JavaScript";
    });
});

document.querySelectorAll("#question-category button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll("#question-category button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedCount = parseInt(btn.innerText);
    });
});

document.querySelector(".btn-outline-success").addEventListener("click", () => {
    if (!selectedCategory || !selectedCount) return;
    startQuiz();
});

const startQuiz = () => {
    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    loadQuestion();
};

const loadQuestion = () => {
    if (currentIndex >= selectedCount || currentIndex >= quizData[selectedCategory].length) {
        clearInterval(timerInterval);
        showResult();
        return;
    }

    const qObj = quizData[selectedCategory][currentIndex];
    let optionsHTML = "";
    qObj.options.forEach((opt, i) => {
        optionsHTML += `<button class="btn btn-outline-primary w-100 my-2 text-white" onclick="checkAnswer(${i})">${opt}</button>`;
    });

    document.querySelector(".quiz-box").innerHTML = `
        <div class="d-flex justify-content-between mb-3 text-white">
            <h5>${selectedCategory} Quiz</h5>
            <div><span id="time">15</span>s</div>
        </div>
        <h4 class="text-white">${qObj.q}</h4>
        <div class="mt-4">${optionsHTML}</div>
    `;

    startTimer(15);
};

const checkAnswer = (selected) => {
    const qObj = quizData[selectedCategory][currentIndex];
    if (selected === qObj.correct) correctCount++;
    else wrongCount++;
    currentIndex++;
    loadQuestion();
};

const startTimer = (seconds) => {
    clearInterval(timerInterval);
    let timeLeft = seconds;
    if (document.getElementById("time")) {
        document.getElementById("time").innerText = timeLeft;
    }

    timerInterval = setInterval(() => {
        timeLeft--;
        if (document.getElementById("time")) {
            document.getElementById("time").innerText = timeLeft;
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            wrongCount++;
            currentIndex++;
            loadQuestion();
        }
    }, 1000);
};

const showResult = () => {
    document.querySelector(".quiz-box").innerHTML = `
        <div class="text-center">
            <h3 class="text-white">🎉 Quiz Completed!</h3>
            <div class="alert alert-success fs-5">✔ Correct Answers: ${correctCount}</div>
            <div class="alert alert-danger fs-5">✘ Wrong Answers: ${wrongCount}</div>
            <div class="alert alert-info fs-5">📊 Score: ${(correctCount / (correctCount + wrongCount) * 100).toFixed(2)}%</div>
            <button class="btn btn-primary mt-3 me-2" onclick="startQuiz()">Restart Quiz</button>
            <button class="btn btn-secondary mt-3" onclick="goBack()">Back</button>
        </div>
    `;
};

const goBack = () => {
    location.reload();
};
