'use strict'
var senior=[];
var mid_senior=[];
var junior=[];
var sumSenior=0;
var sumMid_senior=0;
var sumJunior=0;
  function employee(employeeId,FullName,Department, Level,salary) {
    this. employeeId_var = employeeId;
    this.FullName_var = FullName;
    this.Department_var =  Department;
    this.Level_var =Level;
    this.salary_var = salary;
    this.imageUrl="images/"+this.FullName_var+".png";
  }

  
employee.prototype.generateSalary=function(){
    if(this.Level_var=="senior"){
        let random=Math.floor(Math.random() * 2000) + 1500;
        this.salary_var=random;
        senior.push(this.salary_var);
    }
    else if(this.Level_var =="Mid-Senior"){
        let random=Math.floor(Math.random() * 1500)+1000;
        this.salary_var=random;
        mid_senior.push(this.salary_var);
    }
    else{
        let random=Math.floor(Math.random() * 1000) + 500;
        this.salary_var=random;
        junior.push(this.salary_var);
    }
   
}
employee.prototype.calculateSenior=function(){
    for(var i=0;i<senior.length;i++){
        sumSenior=sumSenior+senior[i];
    }
    return sumSenior;
}
employee.prototype.calculateMidSenior=function(){
    for(var i=0;i<mid_senior.length;i++){
        sumMid_senior=sumMid_senior+mid_senior[i];
    }
    return sumMid_senior;
}
employee.prototype.calculateJunior=function(){
    for(var i=0;i<junior.length;i++){
        sumJunior=sumJunior+junior[i];
    }
    return sumJunior;
}

employee.prototype.renderNameAndSalary=function(){
    document.getElementById("name"+this.employeeId_var).innerHTML=this.FullName_var;
  document.getElementById("salary"+this.employeeId_var).innerHTML=this.salary_var;
}



  let name1 =new employee(1,"Ghazi Samer","Administration","senior",1000);
  let name2 =new employee(2,"Lana Ali","finance","senior",1000);
  let name3 =new employee(3,"Tamara Ayoub","Marketing","senior",1000);
  let name4=new employee(4,"Safi Walid","Administration","Mid-Senior",1000);
  let name5 =new employee(5,"Omar Zaid","Development","senior",1000);
  let name6=new employee(6,"Rana Saleh","Development","Junior",1000);
  let name7 =new employee(7,"mHadi Ahmad","finance","Mid-Senior",1000);
  




  name1.generateSalary();
  name2.generateSalary();
  name3.generateSalary();
  name4.generateSalary();
  name5.generateSalary();
  name6.generateSalary();
  name7.generateSalary();

  name1.renderNameAndSalary();
  name2.renderNameAndSalary();
  name3.renderNameAndSalary();
  name4.renderNameAndSalary();
  name5.renderNameAndSalary();
  name6.renderNameAndSalary();
  name7.renderNameAndSalary();
  


document.getElementById("sumSenior").innerHTML="the Sum of the senior "+ name1.calculateSenior();
document.getElementById("sumMidSenior").innerHTML="the Sum of the Mid_Senior "+ name1.calculateMidSenior();
document.getElementById("sumJunior").innerHTML="the Sum of the Junior "+ name1.calculateJunior();
document.getElementById("taxSenior").innerHTML="tax senior "+name1.calculateSenior()*.075;
document.getElementById("taxMidSenior").innerHTML="tax Mid_Senior "+name1.calculateMidSenior()*.075;
document.getElementById("taxJunior").innerHTML="tax Junior "+name1.calculateJunior()*.075;



