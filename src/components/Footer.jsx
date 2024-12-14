import {useState} from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    const [lastUpdate, setLastUpdate] = useState("")

    function getLastUpdate() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                let date = new Date(JSON.parse(this.responseText).commit.commit.author.date);
                console.log(this.responseText);
                console.log(date);

                setLastUpdate(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
            }
        };
        xhttp.open("GET", "https://api.github.com/repos/HollyHoweFairies/HollyHoweFairies.github.io/branches/gh-pages", true);
        xhttp.send();
    }

    getLastUpdate();

    return (
        <footer>
            <cite>
                &copy; { year } Holly Howe Fairies, last updated { lastUpdate }
            </cite>
        </footer>
    )
}