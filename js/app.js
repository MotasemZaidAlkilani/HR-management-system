'use strict'


let name1 =new employee(1000,"Ghazi Samer","Administration","senior",1000);
let name2 =new employee(1001,"Lana Ali","finance","senior",1000);
let name3 =new employee(1002,"Tamara Ayoub","Marketing","senior",1000);
let name4=new employee(1003,"Safi Walid","Administration","Mid-Senior",1000);
let name5 =new employee(1004,"Omar Zaid","Development","senior",1000);
let name6=new employee(1005,"Rana Saleh","Development","Junior",1000);
let name7 =new employee(1006,"mHadi Ahmad","finance","Mid-Senior",1000);


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
        let random=Math.floor(Math.random() * (2000-1500))+ 1500 ;
        this.salary_var=random*.075;
        
    }
    else if(this.Level_var =="Mid-Senior"){
        let random=Math.floor(Math.random() * (1500-1000))+1000;
        this.salary_var=random*.075;
        
    }
    else{
        let random=Math.floor(Math.random() * (1000-500)) + 500;
        this.salary_var=random*.075;
        
    }
   
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

  name1.renderNameAndSalary();
  name2.renderNameAndSalary();
  name3.renderNameAndSalary();
  name4.renderNameAndSalary();
  name5.renderNameAndSalary();
  name6.renderNameAndSalary();
  name7.renderNameAndSalary();
  






