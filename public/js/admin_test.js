$(document).ready(function () {

$("#save").click(function () {
    $("#edit").fadeToggle();
});
$("#edit").click(function () {
    $("#edit").fadeToggle();
});




//////////////////////////////////////////////////////////////////////////////////////////////
$( "#save-qns" ).click(function() {
    console.log("PRINT this");
   
    //     var correct = $("input[name='isCorrect']:checked").val();
    //     if(correct){
    //         alert("Your selected - " + correct);
    //     }   

    // $.ajax({
    //     type : "POST",
    //     url : "/admin_test",
    //     data : { "correct" : correct },
    //     success: function (res) {
    //         console.log(res);
    //         console.log(correct);
    //     },
    //     error: function (err) {
    //         console.log(err);
    //     }
    // });


    $("#qns").submit(function(event){
                var question = $(this).val();
                // Ajax call
                $.ajax({    
                    type: "POST",
                    url: "/admin_test",
                    data: { 'question': question },
                    success: function (res) {
                        console.log(res);
                        $("#qna > ul").append("<ul><li>" + question + "<span><button id='delete' class='btn btn-danger btn-sm'><i class='far fa-trash-alt'></i></button></span></li></ul>")
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            });

    $("#inp-a").submit(function(event){
                var answer = $(this).val();
                // Ajax call
                $.ajax({    
                    type: "POST",
                    url: "/admin_test",
                    data: { 'answer':[{ 'options' : answer } ] },
                    success: function (res) {
                        console.log(res);
                        $("ol").append("<li><input type='radio' id='a' name='ans'> " + answer + "</li>")
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            });

    $("#inp-b").submit(function(event){
                var answer = $(this).val();
                // Ajax call
                $.ajax({    
                    type: "POST",
                    url: "/admin_test",
                    data: { 'answer':[{ 'options' : answer}] },
                    success: function (res) {
                        console.log(res);
                        $("ol").append("<li><input type='radio' id='b' name='ans'> " + answer + "</li>")
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
    });

    $("#inp-c").submit(function(event){
                var answer = $(this).val();
                // Ajax call
                $.ajax({    
                    type: "POST",
                    url: "/admin_test",
                    data: { 'answer':[{ 'options' : answer }] },
                    success: function (res) {
                        console.log(res);
                        $("ol").append("<li><input type='radio' id='c' name='ans'> " + answer + "</li>")
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
    });

    $("#inp-d").submit(function(event){
                var answer = $(this).val();
                // Ajax call
                $.ajax({    
                    type: "POST",
                    url: "/admin_test",
                    data: { 'answer':[{ 'options' : answer }] },
                    success: function (res) {
                        console.log(res);
                        $("ol").append("<li><input type='radio' id='d' name='ans'> " + answer + "</li>")
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
   });
});
////////////////////////////////////////////////////////////////////////////////////////////////






























});