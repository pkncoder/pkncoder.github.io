(function () {
    var DELIMITER = ',';
    var NEWLINE = '\n';
    var qRegex = /^"|"$/g;

    parseCSV('./data.csv')

    function parseCSV(file) {
        var reader = new FileReader();

        fileText = reader.readAsText(file);

        document.getElementById("dada").innerHTML = fileText;
    }
})();