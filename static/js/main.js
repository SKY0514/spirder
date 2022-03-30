document.write("<script src='json.js'></script>")

// $(document).ready(function () {
//
// });

// 버튼 클릭시 벨류값 불러오기 test
$('.btn').on('click', (e) => {
    console.log(e.target.value);
})


// 버튼 클릭시 벨류값 불러오기 test
$('button').click(function (){
    let answer = $('.btn:checked').val();
    console.log(answer);

    $.ajax({
        type: "POST",
        url: "/quiz",
        data: {answer_give: answer},
        success: function (response) {
            alert(response["msg"]);
            window.location.reload();
        }
    })
});

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