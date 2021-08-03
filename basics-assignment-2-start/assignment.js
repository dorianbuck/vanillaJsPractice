const task3Element = document.getElementById("task-3");

function text1(task3Element) {
  alert("some random text");
}

function text2(Dorian) {
  alert("HI" + Dorian);
}

function text3(l1, l2, l3) {
  const combinedText = l1 + l2 + l3;
  return combinedText;
}

text1();

text2("Max");

task3Element.addEventListener("click", text1);

const combinedString = text3('Hi' , 'there', '!');
alert(combinedString);
