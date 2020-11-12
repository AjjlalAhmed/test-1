const submitBtn = document.getElementById("submit");
const input = document.querySelectorAll(".form-control > input");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {};
  input.forEach((input) => {
    if (input.value != "") {
      data[input.name] = input.value;
      console.log(data);
    }
  });
  if(Object.values(data).length == 3){
    fetch("/api/login" ,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
  }
});
