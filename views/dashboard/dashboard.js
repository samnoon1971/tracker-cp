window.onload = function() {
    const contents = document.getElementById('contents');
    const createContents = () => {
        const content = document.createElement('div');
        content.innerText = 'Hello World';
        contents.appendChild(content);
        console.log(contents);
    }
    createContents();
}