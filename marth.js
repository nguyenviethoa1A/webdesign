// marth.js
function calculate(operation) {
    let result;
    let historyItem;

    // Xử lý từng phép toán
    if (operation === 'add') {
        const num1 = parseFloat(document.getElementById("add1").value);
        const num2 = parseFloat(document.getElementById("add2").value);
        result = num1 + num2;
        document.getElementById("addResult").value = result;
        historyItem = `Phép Cộng: ${num1} + ${num2} = ${result}`;
    } else if (operation === 'sub') {
        const num1 = parseFloat(document.getElementById("sub1").value);
        const num2 = parseFloat(document.getElementById("sub2").value);
        result = num1 - num2;
        document.getElementById("subResult").value = result;
        historyItem = `Phép Trừ: ${num1} - ${num2} = ${result}`;
    } else if (operation === 'mul') {
        const num1 = parseFloat(document.getElementById("mul1").value);
        const num2 = parseFloat(document.getElementById("mul2").value);
        result = num1 * num2;
        document.getElementById("mulResult").value = result;
        historyItem = `Phép Nhân: ${num1} * ${num2} = ${result}`;
    } else if (operation === 'div') {
        const num1 = parseFloat(document.getElementById("div1").value);
        const num2 = parseFloat(document.getElementById("div2").value);
        result = num1 / num2;
        document.getElementById("divResult").value = result;
        historyItem = `Phép Chia: ${num1} / ${num2} = ${result}`;
    }

    // Thêm phép toán vừa thực hiện vào lịch sử và đổi màu đỏ cho phép tính cuối cùng
    const historyDiv = document.getElementById("history");
    const historyItems = historyDiv.getElementsByClassName("history-item");

    // Xóa màu đỏ của các phép tính trước
    for (let item of historyItems) {
        item.classList.remove("red");
    }

    // Tạo phần tử lịch sử mới và thêm màu đỏ cho phép tính hiện tại
    const newHistoryItem = document.createElement("div");
    newHistoryItem.className = "history-item red";
    newHistoryItem.textContent = historyItem;
    historyDiv.appendChild(newHistoryItem);
}
