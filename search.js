// search.js
function playGame() {
    // Lấy giá trị người dùng nhập
    let userGuess = parseInt(document.getElementById("userGuess").value);

    // Chọn ngẫu nhiên một số từ 1 đến 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    // Biến kết quả
    let result = "";

    // Kiểm tra giá trị nhập vào
    while (userGuess !== randomNumber) {
        result = "Sai rồi! Hãy thử lại.";
        document.getElementById("result").innerHTML = result;

        // Yêu cầu người dùng nhập lại
        userGuess = prompt("Bạn đã đoán sai! Hãy nhập lại một số từ 1 đến 10:");
        userGuess = parseInt(userGuess);
    }

    // Nếu đoán đúng
    result = "Chúc mừng! Bạn đã đoán đúng số " + randomNumber;
    document.getElementById("result").innerHTML = result;
}
