function getEle(id){
    return document.getElementById(id)
}

var employeeList=new EmployeeList()



function getEmloyee(){
    var __account=getEle("tknv").value
    var __password=getEle("password").value
    var __workingDate=getEle("datepicker").value
    var __baseSalary=getEle("luongCB").value*1
    var __position=getEle("chucvu").value
    var __workTime=getEle("gioLam").value*1
}


var arr=[];
getEle("btnThemNV").addEventListener("click",function(){
    var employee=getEmloyee();
    if (employee){
employeeList.creatEmployee(employee)
    }
})
function createTable(arr){
    var content="";
    for (var index = 0; index < arr.length; index++) {
        var employee = arr[index];
        content+=`
        <tr>
        <td>${employee.account}</td>
        <td>${employee.name}</td>
        <td>${employee.account}</td>
        <td>${employee.workingDate}</td>
        <td>${employee.baseSalary}</td>
        <td>${employee.position}</td>
        <td>${employee.workTime}</td>
        <td>${employee.rank}</td>
        <td>${employee.totalSalary}</td>
        </tr>`
    }
    getEle("tableDanhSach").innerHTML=content
}