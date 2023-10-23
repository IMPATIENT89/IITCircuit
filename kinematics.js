$("response").click(function () {
    interactionDOM
    var response = $(this).attr("responseValue"), interactionDOM = $(this).parent(), ansKey = interactionDOM.attr("ansKey"), resultDOM = $(this).siblings("result"), result
    $(this).siblings("response").fadeOut("slow")
    if (response == ansKey) {
            result = (interactionDOM.attr("true-response")).split(/(?<=\.)\s/)
            $(this).removeClass("text-dark").removeClass("bg-light").addClass("bg-success").append("&#10003;")
    }
    else {
            result = (interactionDOM.attr("false-response")).split(/(?<=\.)\s/)
            $(this).removeClass("text-dark").removeClass("bg-light").addClass("bg-success").addClass("bg-danger").append("&#10007;")
    }
    new TypeIt(resultDOM[0], {
            strings: result,
            speed: 10,
            nextStringDelay: 1000,
            lifeLike: true,
            html: true,
            breakLines: true,
            afterComplete: function (instance) {
                    instance.destroy();
            },
            loop: false,
    }).go();
    $(".accordion-button").click(function () {
            // Calculate the offset of the target element
            var offset = $(".accordion-button").offset().top;

            // Scroll to the target element with a smooth animation
            $("html, body").animate({
                    scrollTop: offset
            }, 1000); // You can adjust the duration (in milliseconds) as needed
    });
})
