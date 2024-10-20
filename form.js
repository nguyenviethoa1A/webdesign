// script.js

function populateDateFields() {
    var ngay = document.getElementById("ngay");
    var thang = document.getElementById("thang");
    var nam = document.getElementById("nam");

    // Tạo các tùy chọn cho ngày (1-31)
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        ngay.appendChild(option);
    }

    // Tạo các tùy chọn cho tháng (1-12)
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        thang.appendChild(option);
    }

    // Tạo các tùy chọn cho năm (1970-2030)
    for (var i = 1970; i <= 2030; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        nam.appendChild(option);
    }
}

// Gọi hàm populateDateFields khi trang tải
window.onload = function() {
    populateDateFields();
}

function validateForm() {
    var ho = document.getElementById("ho").value;
    var ten = document.getElementById("ten").value;
    var sodienthoai = document.getElementById("sodienthoai").value;
    
    // Kiểm tra họ và tên đã được nhập chưa
    if (ho === "") {
        alert("Vui lòng nhập họ.");
        return false;
    }
    
    if (ten === "") {
        alert("Vui lòng nhập tên.");
        return false;
    }

    // Kiểm tra số điện thoại: phải là số và độ dài là 10 ký tự
    if (sodienthoai === "") {
        alert("Vui lòng nhập số điện thoại.");
        return false;
    }

    if (isNaN(sodienthoai)) {
        alert("Số điện thoại phải là chữ số.");
        return false;
    }

    if (sodienthoai.length !== 10) {
        alert("Số điện thoại phải có độ dài là 10 ký tự.");
        return false;
    }

    // Nếu tất cả kiểm tra đều đúng
    alert("Form hợp lệ!");
    return true;
}
