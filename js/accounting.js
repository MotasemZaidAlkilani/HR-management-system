let departments_sum={
    Adminstration:0,
    finance:0,
    development:0,
    markting:0
}
let Total_salary={
    Adminstration:0,
    finance:0,
    development:0,
    markting:0
}
let avg_salary={
    Adminstration:0,
    finance:0,
    development:0,
    markting:0
}
let Administration_tr=document.getElementById("Administration_tr");
let Finance_tr=document.getElementById("Finance_tr");
let Develpment_tr=document.getElementById("Develpment_tr");
let Markting_tr=document.getElementById("Markting_tr");
let footer_table_tr=document.getElementById("footer_table_tr");
let names=["Adminstration","finance","development","markting"];
function jsonToLocal(){
    let jsonArray=localStorage.getItem("employees");
    let array =JSON.parse(jsonArray);
    if (array !== null) {
        return array;
    } else {
        return [];
    }
    }



   function employees_info_calculate(){
       let array=jsonToLocal();
for(let i=0;i<array.length;i++){
    if(array[i][2]=="Administration"){
        departments_sum.Adminstration=departments_sum.Adminstration+1;
        Total_salary.Adminstration=Total_salary.Adminstration+array[i][4];
    }
     else if(array[i][2]=="Finance"){
        departments_sum.finance= departments_sum.finance+1;
        Total_salary.finance=Total_salary.finance+array[i][4];
     }
     else if(array[i][2]=="Develpment"){
        departments_sum.development= departments_sum.development+1;
        Total_salary.development=Total_salary.development+array[i][4];
     }
     else if(array[i][2]=="Markting"){
        departments_sum.markting= departments_sum.markting+1;
        Total_salary.markting=Total_salary.markting+array[i][4];
     }
}
avg_salary.Adminstration=Total_salary.Adminstration/departments_sum.Adminstration;
avg_salary.finance=Total_salary.finance/departments_sum.finance;
avg_salary.development=Total_salary.development/departments_sum.development;
avg_salary.markting=Total_salary.markting/departments_sum.markting;
   }


   employees_info_calculate();

   function showTableInformation(tr,name){
let tr_number=document.createElement("td");
let tr_avg_salary=document.createElement("td");
let tr_Total_salary=document.createElement("td");
tr.appendChild(tr_number);
tr.appendChild(tr_avg_salary);
tr.appendChild(tr_Total_salary);
tr_number.textContent=departments_sum[name];
tr_Total_salary.textContent=Total_salary[name];
tr_avg_salary.textContent=avg_salary[name];
}
showTableInformation(Administration_tr,names[0]);
showTableInformation(Finance_tr,names[1]);
showTableInformation(Develpment_tr,names[2]);
showTableInformation(Markting_tr,names[3]);
let Total_employees_departments=departments_sum[names[0]]+departments_sum[names[1]]+departments_sum[names[2]]+departments_sum[names[3]];
let Total_salary_departments=Total_salary[names[0]]+Total_salary[names[1]]+Total_salary[names[2]]+Total_salary[names[3]];
let avg_salary_departments=Total_salary_departments/4;

function showFooterTable(total_employee,total_salary,avg_salary){
    let Total_employees_departments=document.createElement("td");
    let Total_salary_departments=document.createElement("td");
    let Total_avg_salary_departments=document.createElement("td");
    footer_table_tr.appendChild(Total_employees_departments);
    footer_table_tr.appendChild(Total_salary_departments);
    footer_table_tr.appendChild(Total_avg_salary_departments);
    Total_employees_departments.textContent=total_employee;
    Total_salary_departments.textContent=total_salary;
    Total_avg_salary_departments.textContent=avg_salary;
    }
showFooterTable(Total_employees_departments,Total_salary_departments,avg_salary_departments);
