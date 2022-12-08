 const heading = document.querySelector(".heading");

 //Arrow Function tham số truyền vào là chuổi string chuoi(heading)
jump = (chuoi) => {
    //Sử dụng Spread Operator để tách từng ký tự (..chuoi)
     return [...chuoi].map((kitu) => `<span>${kitu}</span>`).join("");
 }

 heading.innerHTML = jump(heading.innerText);
