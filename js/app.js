'use strict'



let name1 =new employee(1000,"Ghazi Samer","Administration","senior",1000);
let name2 =new employee(1001,"Lana Ali","finance","senior",1000);
let name3 =new employee(1002,"Tamara Ayoub","Marketing","senior",1000);
let name4=new employee(1003,"Safi Walid","Administration","Mid-Senior",1000);
let name5 =new employee(1004,"Omar Zaid","Development","senior",1000);
let name6=new employee(1005,"Rana Saleh","Development","Junior",1000);
let name7 =new employee(1006,"mHadi Ahmad","finance","Mid-Senior",1000);


 

var form=document.getElementById("form");
let first_section=document.getElementById("first_section");
var array=[];
checkLocalAndPush();
form.addEventListener('submit',getAllData);

  function employee(employeeId,FullName,Department, Level,salary,imageUrl) {
    this.employeeId_var = employeeId;

    this.FullName_var = FullName;
    this.Department_var =  Department;
    this.Level_var =Level;
    this.salary_var = salary;
    this.imageUrl=imageUrl;
  }

  

employee.prototype.generateRandomSalary=function(){
    if(this.Level_var=="senior"){

        let random=Math.floor(Math.random() * (2000-1500))+ 1500 ;
        this.salary_var=random*.075;
        
    }
//     else if(this.Level_var =="Mid-Senior"){
//         let random=Math.floor(Math.random() * (1500-1000))+1000;
//         this.salary_var=random*.075;
        
//     }
// //     else{
// //         let random=Math.floor(Math.random() * (1000-500)) + 500;
// // //         this.salary_var=random*.075;

// // //         this.salary_var=RandomSalary(2000,1500);  
// // //     }
    else if(this.Level_var =="Mid-Senior"){
        this.salary_var=RandomSalary(1500,1000);
    }
    else{
        this.salary_var=RandomSalary(1000,500);       

    }
   return this.salary_var;
   
}


employee.prototype.renderNameAndSalary=function(){
    let num=this.employeeId_var-999;
  document.getElementById("name"+num).innerHTML=this.FullName_var;
  document.getElementById("salary"+num).innerHTML=this.salary_var;
}


  name1.generateSalary();
  name2.generateSalary();
  name3.generateSalary();
  name4.generateSalary();
  name5.generateSalary();
  name6.generateSalary();
  name7.generateSalary();

function RandomSalary(max,min){
    return Math.floor(Math.random() * (max-min)+ min);
}

function generateRandomEmployeeId(){
    return Math.floor(Math.random()*(9999-1000)+1000);
}





function getAllData(event){ 
event.preventDefault(); 
let FullName_var=event.target.fullName_input.value;
let Department_var=event.target.department.value;
let Level_var=event.target.level.value;
let img=event.target.imageUrl_input.value;

let newEmployee=new employee( generateRandomEmployeeId(),FullName_var,Department_var,Level_var,0,img);
newEmployee.generateRandomSalary();
let array_newEmployee=[newEmployee.employeeId_var,newEmployee.FullName_var,newEmployee.Department_var,newEmployee.Level_var,newEmployee.salary_var,newEmployee.imageUrl];
array.push(array_newEmployee);
localToStorge(convertToJson(array));
showAllEmployeeInfo(jsonToLocal());
}



function convertToJson(array){
    return JSON.stringify(array);

}
function localToStorge(json){
    localStorage.setItem('employees',json);
}
function jsonToLocal(){
let jsonArray=localStorage.getItem("employees");
let array =JSON.parse(jsonArray);
if (array !== null) {
    return array;
} else {
    return [];
}
}
function checkLocalAndPush() {
    if (array.length == 0) {
        let arr = jsonToLocal('employees');
        if (arr.length != 0) {
            array = arr;
        }
    }
}



function showAllEmployeeInfo(array){
    first_section.innerHTML="";
    for(let j=0;j<array.length;j++){
        let div=document.createElement('div');
        let img =document.createElement('img');
        let Fullname_And_Id=document.createElement('p');
        let Department_Level=document.createElement('p');
        let Salary=document.createElement('p');
        first_section.appendChild(div);
        div.appendChild(img);
        div.appendChild(Fullname_And_Id);
        div.appendChild(Department_Level);
        div.appendChild(Salary);
        div.style.backgroundColor="#EEEEEE";
        div.style.textAlign="center"
        img.setAttribute('src',array[j][5]);
        img.setAttribute('height',100);
        img.setAttribute('width',100);
        Fullname_And_Id.textContent=`Name:${array[j][1]}-ID: ${array[j][0]}`;
        Fullname_And_Id.style.color="#DA1212";
        Department_Level.textContent=`Department:${array[j][2]}-Level: ${array[j][3]}`;
        Department_Level.style.color="#DA1212";
        Salary.textContent= array[j][4];
        Salary.style.color="#DA1212";
    }


}
    
    



showAllEmployeeInfo(jsonToLocal());


