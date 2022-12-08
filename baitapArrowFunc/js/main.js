//Mảng màu :
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let container = document.getElementById("colorContainer");

//Arrow function
loadColorPick = () => {
    for (let o = 0; o < colorList.length; o++)
        container.innerHTML += (0 == o) ? "<button class='color-button " + colorList[o] + " active'></button>" : "<button class='color-button " + colorList[o] + "'></button>";
};

loadColorPick();

let colorPicker = document.getElementsByClassName("color-button"),
    house = document.getElementById("house");
// Tạo event lắng cho cho tất cả nút màu
for (let o = 0; o < colorPicker.length; o++)
    colorPicker[o].addEventListener("click", function () {
        changeColor(colorList[o], o);
    });

// Hàm đổi màu ngôi nhà. Gồm màu và vị trí e;
changeColor = (mau, vt) => {
    //Remove hết tất cả class active
    for (let i = 0; i < colorPicker.length; i++)
        colorPicker[i].classList.remove("active");

    //Thêm class active ở class color-button và class house + màu vào class house
    colorPicker[vt].classList.add("active"), (house.className = "house " + mau);
};