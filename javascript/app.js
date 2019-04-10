$(document).ready(function () {
    //array of strings called topic,related to theme of feelings   
    var topics = ["happy", "funky", "sassy", "grouchy", "scurred", "trapped", "bloated", "humble", "exhausted", "blessed"];

    // var APIKey = UDOUEhJt8r8kYBAfWQViI71eu1rmbYMq;
    //create a function for displaying the topics feelings

    function renderBtn() {

        //loop through topics array to create buttons on HTML

        for (var i = 0; i < topics.length; i++) {

            var a = $("<button>");

            // Adding a class
            a.addClass("feelings");
            // Adding a data-attribute with a value of the topics at index i
            a.attr("data-name", topics[i]);
            // Providing the button's text with a value of the topics at index i
            a.text(topics[i]);
            // Adding the button to the HTML
            $("#topic-btn").append(a);
        }
    }

    renderBtn();

});
