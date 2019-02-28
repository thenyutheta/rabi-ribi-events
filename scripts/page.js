
function DataSet(data_array) {
  data_array.sort(function (para, parb) { return parseInt(para.split("&&")[0]) - parseInt(parb.split("&&")[0]); });
  var list_elm = document.getElementById("listid");
  for (var i in data_array) {
    var temp = data_array[i].split("&&");
    var cretr = document.createElement("tr");
    cretr.id = i;
    list_elm.appendChild(cretr);
    set_td(i, temp[0], "id");
    set_td(i, temp[1], "type");
    set_td(i, temp[2], "name");
    if (temp[3] && temp[3] !== "") {
      set_td(i, temp[3], "detail", temp[3].indexOf("$") > -1);
    } else {
      set_td(i, "-", "detail");
    }
  }

  function set_td(id, data, type, opti) {
    var cretd = document.createElement("td");
    cretd.className = type;
    cretd.textContent = data.replace(/\$.+$/, "");
    if (opti) { cretd.id = "temp" }
    document.getElementById(id).appendChild(cretd);
    if (opti) {
      for (var ar in data.split("$")) {
        if (data.split("$")[ar] === "") { continue; }
        var creli = document.createElement("li");
        creli.style = "list-style:none;";
        creli.textContent = data.split("$")[ar];
        document.getElementById("temp").appendChild(creli);
      }
      document.getElementById("temp").removeAttribute("id");
    }
  }
}