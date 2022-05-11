var info = document.querySelector('#info');

function BringInformation() {
    fetch('https://randomuser.me/api/')//fetch goes to test and return into a promess
        .then(res =>  res.json())//use the data to show information
        .then(data => {console.log(data)
        })

}