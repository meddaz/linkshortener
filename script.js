
go.addEventListener('click', submit);
function submit() {
    var input = document.getElementById("address").value;
    var url = "https://api-ssl.bitly.com/v3/shorten?access_token=c6f101ca6e598199a05d3c517cc8d94554d7e385&longUrl=" + input;


    $.getJSON(url, function (data) {

        displayShortened.innerHTML =  `<p>New link:</p>
    
        <a href='${data.data.url}'>${data.data.url}</a>
        
        
        <br>`;
        
   
        displayOriginal.innerHTML = 
        `<br>
        <p>Original link:</p>
        
        ${input}`;
        
         
    });

    if (input === "") {
        displays.innerHTML = "Enter a URL";
    }

}

