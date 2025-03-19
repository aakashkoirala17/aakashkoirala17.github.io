const responses = {
    "hello": "Hi there! Ask me anything about Aakash's CV. 😊",
    "who are you": "I am Aakash's personal chatbot, here to provide CV details!",
    "what is your name": "My name is Aakash Koirala.",
    "tell me about yourself": "Aakash Koirala is a Lab Instructor with a Bachelor's in Computer Engineering, skilled in hands-on learning and technical training.",
    "education": "Aakash completed his Bachelor's in Computer Engineering from Himalaya College of Engineering (2016 - 2021).",
    "experience": "Aakash has worked as a Data Specialist at Cloud Factory (2021) and is currently a Lab Instructor at Saraswati Niketan Higher Secondary School (2022 - Running).",
    "skills": "Aakash is skilled in HTML, CSS, JavaScript, ReactJS, Python, Google Cloud, and WordPress.",
    "projects": "Aakash developed an Image Captioning System using CNN and LSTM models to generate accurate captions for images.",
    "contact": "You can contact Aakash at 9807374413 or email at aakashkoirala17@gmail.com.",
    "location": "Aakash is based in Kapan, Kathmandu.",
    "linkedin": "Aakash's LinkedIn profile is currently unavailable.",
    "resume": "You can download Aakash's CV here: [Your Resume Link]",
    "bye": "Goodbye! Have a great day. 😊"
};

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let userText = inputField.value.trim().toLowerCase();
    if (userText === "") return;

    addMessage(userText, "user-message");

    setTimeout(() => {
        let botResponse = responses[userText] || "Sorry, I don't understand that. Try asking something else!";
        addMessage(botResponse, "bot-message");
    }, 500);

    inputField.value = "";
}

function addMessage(text, className) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
