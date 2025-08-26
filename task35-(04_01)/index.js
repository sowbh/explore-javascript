async function getData() {
    // with error handling
    try{
        let response = await fetch("http://localhost:3000/products");
        if(!response.ok){
            throw new Error("Data Not Found");
        }
        let data = await response.json();
        printData(data);
    }
    catch(err){
        // alert is a window object comes under BOM
        alert("Data failed to fetch");
    }
}

function printData(data){
    // creating a table
    let table = document.createElement("table");
    
    // heading code
    let thead = document.createElement("thead");
    let trhead = document.createElement("tr");
    let headings = ["id", "title", "price", "description", "category", "image"];
    headings.forEach(ele => {
        // store these headings in a th
        let th = document.createElement("th");
        th.innerText = ele;

        trhead.appendChild(th);
    })
    thead.appendChild(trhead);

    // body code
    let tbody = document.createElement("tbody");

    // iterating json data
    data.forEach(obj => {
        // store it in a row
        let tr = document.createElement("tr");

        // skipping rating from real obj
        for(let key in obj){
            if(key !== "rating"){
                // storing as table data
                let td = document.createElement("td");

                // if the key is image then create img tag or use innerHTML
                if(key === "image"){
                    let img = document.createElement("img");
                    img.src = obj[key];
                    td.appendChild(img);

                    // using innerHTML
                    // td.innerHTML = `<img src = ${obj[key]}`;
                }
                else{
                    td.innerText = obj[key];
                }

                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    })

    table.append(thead, tbody);

    document.body.appendChild(table);
}

getData();
