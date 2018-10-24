const hello = document.getElementById("hello");

console.log(hello);

function greeting() {
  alert("Hello!");
  hello.textContent = "Goodbye";
}

Hello.addEventListener("click", greeting);
