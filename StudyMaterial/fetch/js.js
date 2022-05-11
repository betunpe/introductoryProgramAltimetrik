var info = document.querySelector('#info');


function BringInformation() {

    fetch('test.txt')//fetch goes to test and return into a promess
        .then(data => data.text())// promess convert the response, the data into a text()
        .then(data => {//use the data to show information

            console.log(data)
        })

}