//基本資料型態 & 變數

// var my_name = "青玄";
// var my_age = 3000;

// document.write("有一個人叫做" + my_name);
// document.write("<br/>");
// document.write("今年"+ my_age +"歲");
// document.write("<br/>");
// document.write("身高187公分");
// document.write("<br/>");
// document.write("天帝境");

// var phrase = "hello Mr.Vegeta"
// document.write(phrase.toUpperCase());
// document.write(phrase.charAt(0));
// document.write(phrase.indexOf("h"));
// document.write(phrase.substring(2,10));

// var number = 2.5;
// document.write(Math.round(number));
// document.write(Math.pow(4,3));
// document.write(Math.random() * 10);
// document.write(Math.round(Math.random() * 10));


// var my_name = prompt("請輸入你的名字");
// var my_age = prompt("請輸入你的年紀");

// document.write("你好阿" + my_name);
// document.write("你今年" + my_age + "歲");

// var num1 = prompt("請輸入數字1");
// var num2 = prompt("請輸入數字2");
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// document.write(num1 + num2);

function add(num1,num2)
{
    return num1+num2;
}

document.write(add(3,6));