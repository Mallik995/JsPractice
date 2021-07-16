console.log("***************   Demonstrating cal back function in JS");


let stud=[
    {Name: "Mallik", Dept: "CSE"},
    {Name: "Chandan", Dept: "MCA"}
]


// function enrollStud(studentDetails){
//     setTimeout(function(){
//         stud.push(studentDetails);
//         console.log("Successful enrolled");
//     }, 3000);
// }

// function fetchStud(){
//     setTimeout(function(){
//         let str=" ";
//         stud.forEach(function(stud){
//             str +=`<li>${stud.Name}</li>`
//         });
//         document.getElementById('stud').innerHTML=str;
//         console.log("Student details have been fetched");
//     }, 1000);
// }
//     let newStud={Name: "Sidd", Dept:"IT"}
//     enrollStud(newStud);    
//     fetchStud();


// Same above function with call back function

function enrollStud(studentDetails,fetchStud){
    setTimeout(function(){
        stud.push(studentDetails);
        console.log("Successful enrolled");
        fetchStud();
    }, 3000);
}

function fetchStud(){
    setTimeout(function(){
        let str=" ";
        stud.forEach(function(stud){
            str +=`<li>${stud.Name}</li>`
        });
        document.getElementById('stud').innerHTML=str;
        console.log("Student details have been fetched");
    }, 1000);
}
    let newStud={Name: "Sidd", Dept:"IT"}
    fetchStud();
    enrollStud(newStud,fetchStud);    
    // fetchStud();
