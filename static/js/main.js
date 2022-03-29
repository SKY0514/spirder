$(document).ready(function () {
    showReview();
});

function makeChoice() {
    let quiz_no = $('').val()

    $.ajax({
        type: "POST",
        url: "/quiz",
        data: {sample_give: '샘플데이터'},
        success: function (response) {
            alert(response["msg"]);
            window.location.reload();
        }
    })
}

function showReview() {
    $.ajax({
        type: "GET",
        url: "/review?sample_give=샘플데이터",
        data: {},
        success: function (response) {
            alert(response["msg"]);
        }
    })
}