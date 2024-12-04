let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  try {
    let collegesArr = await getUniNames(country);
    if (collegesArr.length !== 0) {
      printCollegesNames(collegesArr);
    } else {
      let para = document.createElement("p");
      para.innerText = `There are no colleges referred with "${country}" country.`;
      para.style.display = "inline";
      para.style.color = "white";
      para.style.backgroundColor = "red";
      document.body.appendChild(para);
    }
  } catch (error) {
    alert(error);
  }
});

function printCollegesNames(collegesArr) {
  let list = document.querySelector("#lists");
  list.innerText = "";

  for (let college of collegesArr) {
    let li = document.createElement("li");
    li.innerText = `"${college.name}" and state is "${college["state-province"]}`;
    list.appendChild(li);
  }
}

// let country = "India";

async function getUniNames(country) {
  let res = await axios.get(url + country);

  return res.data;

  //   console.log(res.data);
}
