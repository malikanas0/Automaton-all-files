export const demoqaverifyaddnewuser ={
    navigatetoelement: '[class="card mt-4 top-card"]',
    clickonwebtales: '#item-3',
    clickonaddbutton: '#addNewRecordButton',
    adduserfirstname: '#firstName',
    adduserlastname: '#lastName',
    adduserEmail: '#userEmail',
    adduserage: '#age',
    addusersalary: '#salary',
    adduserdepartment: '#department',
    clickonsubmitbtn: '#submit'
}

export const verifyeditfunctionality ={
    navigatetoelement: '[class="card mt-4 top-card"]',
    clickonwebtales: '#item-3',
    clickonsecroweditbox: '#edit-record-2',
    clearfirstname:'#firstName',
    clearlastname:'#lastName',
    clickonsubmitbtn: '#submit',
}

export const verifybrokenimage ={
    navigatetoelement: '[class="card mt-4 top-card"]',
    clickonbrokenimages: '#item-6',
    clickonimage: '[src="/images/Toolsqa_1.jpg"]',
}
export const verifythesubmitform ={
    naviagtetoform:'[class="card mt-4 top-card"]',
    clickonpracticefrom: '[class="element-list collapse show"]',  
    userfirstname: '#firstName',
    userlastname: '#lastName',
    userEmail: '#userEmail',
    selectgender: '[for="gender-radio-1"]',
    usernumber: '#userNumber',
    userdateofbirth: '#dateOfBirthInput',
    clickonmonth: '[class="react-datepicker__month-select"]',
    selectyear: '[class="react-datepicker__year-select"]',
    selectdate: '[class="react-datepicker__day react-datepicker__day--015"]',
    usersubject: '#subjectsContainer',
    usercheckbox: '[for="hobbies-checkbox-2"]',
    uploadpicture: '[type="file"]',
    usercurrentaddress: '#currentAddress-wrapper',
    selectuserstate: '[class=" css-tlfecz-indicatorContainer"]',
    selectusercity: '[class=" css-1hwfws3"]',
    clickonsubmitbtn: '#submit',
    verifytheform: '#example-modal-sizes-title-lg',
}
export const verifyprogressbar ={
    clickonwidget: '[class="card-body"]',
    navigatetoprogressbar: '[class="element-list collapse show"]>[class="menu-list"]>[id="item-4"]',
    clickonstartbtn: '#startStopButton'
}
export const verifytooltip ={
    clickonwidget: '[class="card-body"]',
    navigatetotooltip: '[class="element-list collapse show"]>[class="menu-list"]>[id="item-6"]',
    hoveronbtn:'#toolTipButton',
}
export const verifydraganddrop ={
    clickonwidget: '[class="card-body"]',
    navigatetodraganddrop: '[class="element-list collapse show"]>[class="menu-list"]>[id="item-3"]',
    clickondrag: '#draggable',
    clickondrop:'#droppable',
}