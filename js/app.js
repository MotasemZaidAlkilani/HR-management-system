'use strict'
var form=document.getElementById("form");
var first_section=document.getElementById("first_section");


  function employee(employeeId,FullName,Department, Level,salary,imageUrl) {
    this. employeeId_var = employeeId;
    this.FullName_var = FullName;
    this.Department_var =  Department;
    this.Level_var =Level;
    this.salary_var = salary;
    this.imageUrl=imageUrl;
  }

  

employee.prototype.generateRandomSalary=function(){
    if(this.Level_var=="senior"){
        let random=Math.floor(Math.random() * (2000-1500)+ 1500) ;
        this.salary_var=random;
        
    }
    else if(this.Level_var =="Mid-Senior"){
        let random=Math.floor(Math.random() * (1500-1000)+1000);
        this.salary_var=random;
        
    }
    else{
        let random=Math.floor(Math.random() * (1000-500)+ 500) ;
        this.salary_var=random;
        
    }
   return this.salary_var;
   
}


function generateRandomEmployeeId(){
    let random_four_digit=Math.floor(Math.random()*(9999-1000)+1000);
    return random_four_digit;
}


employee.prototype.showEmployeeInfo=function(){
    var div=document.createElement('div');
    first_section.appendChild(div);
    var img =document.createElement('img');
    div.appendChild(img);
    div.style.backgroundColor="#EEEEEE";
    div.style.textAlign="center"
    let Fullname_And_Id=document.createElement('p');
    div.appendChild(Fullname_And_Id);
    let Department_Level=document.createElement('p');
    div.appendChild(Department_Level);
    let Salary=document.createElement('p');
    div.appendChild(Salary);
    img.setAttribute('src',this.imageUrl);
    img.setAttribute('height',100);
    img.setAttribute('width',100);
    Fullname_And_Id.textContent=`Name:${this.FullName_var}-ID: ${this.employeeId_var}`;
    Fullname_And_Id.style.color="#DA1212";
    Department_Level.textContent=`Department:${this.Department_var}-Level: ${this.Level_var}`;
    Department_Level.style.color="#DA1212";
    Salary.textContent= this.salary_var;
    Salary.style.color="#DA1212";
}


 


form.addEventListener('submit',getAllData);
function getAllData(event){
event.preventDefault(); 
let FullName_var=event.target.fullName_input.value;
let Department_var=event.target.department.value;
let Level_var=event.target.level.value;
let img=event.target.imageUrl_input.value;
let newEmployee=new employee( generateRandomEmployeeId(),FullName_var,Department_var,Level_var,0,img);
newEmployee.generateRandomSalary();
 newEmployee.showEmployeeInfo();
}



  




