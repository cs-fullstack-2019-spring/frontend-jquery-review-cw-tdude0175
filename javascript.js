//This first Count all Paragraphs button when clicked,
// should draw a 3px green border around all the <p> elements in the document,
// and display an alert box that displays The number ofparagraphs in the document is NUMBER where ``NUMBER``` is number of paragraphs


$("button:first").on("click",function ()
{
   $("p").css("border","3px solid green");
   alert($("p").length + " is the number of paragraphs");
});

// This second Count all Paragraphs in First DIV button when clicked,
// should draw a 3px red border around all the <p> elements in the 1st DIV,
// and display an alert box that displays The number of paragraphs in the First DIV is NUMBER where ``NUMBER``` is number of paragraphs


//this button targets second paragraph primarily but cascade downs to third
$("button:nth-of-type(2):first").on("click",function ()
{
    $("p").css("border","");
    $("div:nth-of-type(1) > p").css("border", "3px solid red");
    $("div:last p").css("border","");       //this is to stop the cascading.
    alert($("div:first > p").length + " is the number of paragraphs");

});


// This third Count all Paragraphs in Second DIV button when clicked,
// should draw a 3px blue border around all the <p> elements in the 2nd DIV,
// and display an alert box that displays The number of paragraphs in the First DIV is NUMBER where ``NUMBER``` is number of paragraphs

$("#lastOfProblem1").on("click",function ()
{   //added id to make it possible for both problems to be on html otherwise can use ("button:last")
    $("p").css("border","");
    $("div:last p").css("border", "3px solid blue");
    alert($("div:last p").length + " is the number of paragraphs");
});


// Add 2 buttons.
// When page initially displayed,
// the 1st button should be enabled and the 2nd button should be disabled.
// When the 1st button is clicked, the 2nd button should be enabled, and the first button be disabled.
// Clicking the 2nd button should enable the 1st button and disable the 2nd button and so on,
// alternating between buttons as they are clicked.


/*
this is used for final button switching. easiest to just start the second button with disabled attribute.
putting the buttons in something to make them stick out less maybe div or span
used footer to not mess with other stuff had to rename a couple of buttons but it works
 */
$("button:last").attr("disabled","");
$("footer button:nth-of-type(1)").on("click",function ()
{
    $(this).attr("disabled","");
    $("button:last").removeAttr("disabled");

});

$("button:last").on("click",function ()
{
    $(this).attr("disabled","");
    $("footer button:nth-of-type(1)").removeAttr("disabled");

});