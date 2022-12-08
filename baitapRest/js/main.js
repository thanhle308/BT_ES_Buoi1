//Arrow Function dùng tham số Rest Parameter
tinhDTB = (...e) => {
    let sum = 0;
    return (
        e.map((e) => {
            sum += parseFloat(e);
        }),
        (sum / e.length).toFixed(2)
    );
}

//Lấy giá trị các môn khối lớp 1;
document.getElementById("btnKhoi1").onclick = () => {
    let toan = document.getElementById("inpToan").value,
        ly = document.getElementById("inpLy").value,
        hoa = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = tinhDTB(toan, ly, hoa);
}

//Lấy giá trị các môn khối lớp 2;
document.getElementById("btnKhoi2").onclick = () => {
    let van = document.getElementById("inpVan").value,
        su = document.getElementById("inpSu").value,
        dia = document.getElementById("inpDia").value,
        e = document.getElementById("inpEnglish").value;
    document.getElementById("tbKhoi2").innerHTML = tinhDTB(van, su, dia, e);
}