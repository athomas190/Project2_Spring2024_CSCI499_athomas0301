
function apisearch(){
    $.ajax({
        type: 'GET',
        dataType:"jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyCxQz8D1C-yz2gVeHVQg5VX7BuS6aRT2E8&cx=cx7515f650175614ab0&q=" + $("#query").val(),
        success: function (result) {
            console.log('data: ', result);
            var searchOutput = '';
            var len = result.items.length;
            for (i = 0; i < len; i++) {
                searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
            }
    
            $("#searchResults").html(searchOutput);
    
        }
    });   

    function SearchLucky(query) {
        $.ajax({
            type: 'GET',
            dataType: "jsonp",
            url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyCxQz8D1C-yz2gVeHVQg5VX7BuS6aRT2E8&cx=7515f650175614ab0&q=" + query,
            success: function(result) {
                console.log('data: ', result);
                if (result.items && result.items.length > 0) {
                    var firstResult = result.items[0];
                    window.open(firstResult.link, "_blank"); // Open the first result in a new tab
                } else {
                    alert("No results found for the given search");
                }
            },
            error: function() {
                alert("Error occurred while getting results");
            }
        });
    
    }
}

      // Adding event listener to the search button
      $(document).ready(function() {
        $("#search").click(function(event) {
            event.preventDefault(); // Prevent form submission
            apisearch(); // Call the API search function
        });
    });

// DO NOT CHANGE CODE ABOVE EXCEPT LINE 5 AS STATED IN THE ASSIGNMENT. YOU MAY COPY THE ABOVE FUNCTION FOR QUESTION (4) OF JS.

// START TYPING BELOW
function changeBackgroundColor() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}


function toggleFade() {
    var items = document.querySelectorAll('#content, #query, #searchResults');

    for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle('content');
    }
}

