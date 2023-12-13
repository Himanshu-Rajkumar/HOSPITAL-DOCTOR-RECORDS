// fill in javascript code here
// Senior, if experience > 5 years
// Junior, if experience is between 2 and 5 years
// Trainee, if experience is less than or equal to 1 year
let myform = document.getElementById("myform")
let Name = document.getElementById("name")
let docID = document.getElementById("docID")
let dept = document.getElementById("dept")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mbl = document.getElementById("mbl")
let role = document.getElementById("role")

let tbody = document.getElementById("tbody")


let AllData = []

myform.addEventListener("submit", function (e) {
    e.preventDefault()
    let Data = {}
    Data.name = Name.value
    Data.docID = docID.value
    Data.dept = dept.value
    Data.exp = exp.value
    Data.email = email.value
    Data.mbl = mbl.value
    Data.role = role.value


    AllData.push(Data)
    console.log(AllData)


    tbody.innerText = ""


    AllData.map(ele => {
        let row = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        td1.innerText = ele.name
        td2.innerText = ele.docID
        td3.innerText = ele.dept
        td4.innerText = ele.exp
        td5.innerText = ele.email
        td6.innerText = ele.mbl
        td7.innerText = ele.role
        td8.innerText = "Delete"
        td8.style.color="black"
        td8.style.backgroundColor="red"


        row.append(td1, td2, td3, td4, td5, td6, td7, td8)




        tbody.append(row)

        
        td8.addEventListener("click", function () {
            row.innerText = ""
        })

       


    })


})

// add eventLister to delet the row



