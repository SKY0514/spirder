$(document).ready(function () {
    getAnswer()
});

function getAnswer() {
    let answer = select
        console.log(answer)

    $.ajax({
        type: "POST",
        url: "/quiz",
        data: {answer_give: answer},
        success: function (response) {
            alert(response["msg"]);
            window.location.reload();
        }
    })
}

// function showReview() {
//     $.ajax({
//         type: "GET",
//         url: "/review?sample_give=샘플데이터",
//         data: {},
//         success: function (response) {
//             alert(response["msg"]);
//         }
//     })
// }