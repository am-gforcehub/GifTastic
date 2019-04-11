$(document).ready(function () {



    //array of strings called topic,related to theme of feelings   

    var topics = ["happy", "funky", "silly", "grouchy", "scurred", "trapped", "bloated", "humble", "exhausted", "blessed"];

    // var APIKey = UDOUEhJt8r8kYBAfWQViI71eu1rmbYMq;


    //loop through topics array to create buttons on HTML

    for (var i = 0; i < topics.length; i++) {

        var f = $("<button>");

        // Adding a class
        f.addClass("feelings");
        // Adding a data-attribute with a value of the topics at index i
        f.attr("data-name", topics[i]);
        // Providing the button's text with a value of the topics at index i
        f.text(topics[i]);
        // Adding the button to the HTML
        $("#topic-btn").append(f);

    }

    //Adding event on click of button
    $(document).on("click", "button", function () {
        event.preventDefault();

        //Grab and Store the topic-btn property
        var feeling = $(this).attr("data-name");
        //Constructing the queryURL using the feeling name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            feeling + "&api_key=UDOUEhJt8r8kYBAfWQViI71eu1rmbYMq&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"

            // After data comes back from the request

        }).then(function (response) {
            console.log(queryURL);
            //Looping over every result item
            var results = response.data;
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div for the gif
                    var ratingDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var pRating = $("<p>").text("Rating: " + rating);

                    var titleDiv = $("<div>");

                    // Storing the result item's rating
                    var title = results[i].title;

                    // Creating a paragraph tag with the result item's rating
                    var pTitle = $("<p>").text("Title: " + title);


                    // Creating an image tag
                    var feelingImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    feelingImage.attr("src", results[i].images.fixed_width_still.url);
                    feelingImage.addClass("gif");

                    //animating and pausing gifs
                    feelingImage.attr("data-still", results[i].images.fixed_width_still.url);
                    feelingImage.attr("data-animate", results[i].images.fixed_width.url);
                    feelingImage.attr("data-state", "still");

                    // Appending the paragraph and personImage we created to the "ratingfDiv" div we created
                    ratingDiv.append(pRating);
                    ratingDiv.append(feelingImage);
                    titleDiv.append(pTitle);
                    titleDiv.append(feelingImage);




                    // Prepending the ratingDiv to the "#gif-insert" div in the HTML
                    $("#gif-insert").prepend(ratingDiv);
                    $("#gif-insert").prepend(titleDiv);



                }
            }
        })


        $(document).on("click", "#gif-insert", function () {
            event.preventDefault();
            var state = $(this).attr("data-state");

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        })

    });

});
