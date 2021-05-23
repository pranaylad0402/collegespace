'use strict';
var firstName ='',
lastName ='',
mobile ='',
uniName='',
clgName='',
branchName='',
semester='',
userData=null;

const ShareDataService={
    getFrstName() {
        return firstName;
    },
    getLastName() {
        return lastName;
    },
    getMobile() {
        return mobile;
    },
    getUniName() {
        return uniName;
    },
    getClgName(){
        return clgName;
    },
    getBranchName(){
      return branchName;
    },
    getSemester(){
        return semester;
    },
    getUserData(){
        return {
            name:firstName+" "+lastName,
            mobile:mobile,
            uniName:uniName,
            clgName:clgName,
            branchName:branchName,
            semester:semester,
        }
    },
    setFirstName(value){
        firstName = value;
        return value;
    },
    setLastName(value){
        lastName = value;
        return value;
    },
    setMobile(value){
        mobile = value;
        return value;
    },
    setUniName(value){
        uniName = value;
        return value;
    },
    setClgName(value){
        clgName = value;
        return value;
    },
    setBranchName(value){
        branchName = value;
        return value;
    },
    setSemester(value){
        semester = value;
        return value;
    }
}

export default ShareDataService;