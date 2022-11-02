function Employee(
    __account,

    __name,
    __password,
    __workingDate,
    __baseSalary,
    __position,
    __workTime,  
){
    this.account=__account;
    this.name=__name;
    this.password=__password;
    this.workingDate=__workingDate;
    this.baseSalary=__baseSalary;
    this.position=__position;
    this.workTime=__workTime;
    this.totalSalary=0;
    this.rank=""
}

this.sunSalary= function(){
    if(this.position==="Sếp"){
        this.totalSalary=this.baseSalary*3
    }
    else if(this.position==="Trưởng phòng"){
        this.totalSalary=this.baseSalary*2
    }
    else if(this.position==="nhân viên"){
        this.totalSalary=this.baseSalary
    }
    

}
this.rank= function(workTime){
    if(workTime>=192){
        this.rank="Nhân viên xuất sắc"

    }
    else if(workTime>=176 && workTime<192){
        this.rank="Nhân viên giỏi"
        
    }
    else if(workTime>=160 && workTime<176){
        this.rank="Nhân viên khá"
        
    }
    else if(workTime<160){
        this.rank="Nhân viên trung bình"
        
    }

    
}
