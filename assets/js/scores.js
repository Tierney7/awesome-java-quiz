var chart = document.getElementById("table")
myStorage = window.localStorage;

for (let i = 0; i < myStorage.length; i++) {
    var key = localStorage.key(i);
    let storedValue = myStorage.getItem(key)
    var tr = document.createElement("tr");
    var td = document.createElement("tb");
    td.textContent = key ;
    tr.append(td);
        td.textContent = storedValue ;
    tr.append(tb);
    chart.append(tr);
}

function clearScore(){
    myStorage.clear();
    location.reload();
};


