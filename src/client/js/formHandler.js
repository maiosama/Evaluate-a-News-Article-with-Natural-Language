import isUrlValid from './checkURL'

async function urlEntry(url = '', data = {}) {
    const request = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const newEntry = await request.json();
        return newEntry;
    } catch (error) {
        console.log("Error", error)
    };
};

export const handleSubmit = async () => {

    //   Get Value of the input for URL     
    let formInput = document.getElementById("article-url").value;
    // Client.checkForName(formInput)
    //   Check if it's URL or not
    if (isUrlValid(formInput)) {
        // if yes send it to the backend
        console.log("::: Form Submitted :::")
        var data = await urlEntry('http://localhost:8080/sentiment', {
            url: formInput
        });
        document.getElementById('agreement').innerHTML = data.agreement.toLowerCase;
        document.getElementById('subjectivity').innerHTML = data.subjectivity.toLowerCase;
        document.getElementById('confidence').innerHTML = data.confidence.toLowerCase;
        document.getElementById('irony').innerHTML = data.irony.toLowerCase;
    } else {
        //    if no show user message it's not valid URL
        alert("This URL is not valid, Please enter a valid URL")
    }
}