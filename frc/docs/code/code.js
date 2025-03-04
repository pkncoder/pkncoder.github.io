function putCodeExamples(fileName) {
    fetch(fileName)
        .then((res) => res.text())
        .then((text) => {
            
            // Seperate each code example
            let codeExamples = text.split('-*?-');
            
            // Loop each code example
            for (var codeExampleNum = 0; codeExampleNum < codeExamples.length; codeExampleNum++) {

                // Split each code line up
                let codeLines = codeExamples[codeExampleNum].trim().split("\n");

                // Loop every line of the code and add it to the code block
                codeLines.forEach(element => {
                    $(`#codeBlock-${codeExampleNum}`).append(element + "\n");
                });
            }

            // Finally, use highlight.js to do code highlighting
            hljs.highlightAll();
        })
        .catch((e) => console.error(e));
}