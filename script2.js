function process(rawText) {
    let text = rawText.toLowerCase();
    let response = null;

    if (text.includes("what is the name of this company?")) {
        response = "Aquapro";
    } else if (text.includes("can you give me a quote")){
        response = "Prices start at 40 AUD, but please phone our number 0401 623 558 for a specific price! We will respond ASAP"
    }   
    else if (text.includes("how can i contact aquapro?")){
        response = "Call 0401 623 558!"
    }
    else if(text.includes("hello")){
        response = "Hello!!"
    }
    else{
        response= "I'm sorry, I don't know how to answer that. I can only help with Aquapro inquiries"
    }

    return response;
}

document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const query = document.getElementById('query').value;
    const responseOutput = document.getElementById('response-output');
    const response = process(query);
    responseOutput.textContent = response;
});