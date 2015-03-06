
function signInPressed() {
   
    window.location.href = "/Home/SignIn_View";
}
function getBatchesPressed() {

    alert("I am pressed for Studentlist");
  
   $.get('/api/studentlist?batch=MSIT',
       $('#SignUpForm').serialize()).success(function (response) {
           if (response) {
               alert(response);
          
               /*alert("FName:" + response['FName'] +
                   '\n'+
                   "LName:" + response['LName'] +
                   '\n'+
                   "Password:" + response['Password'] +
                   '\n'+
                   "Batch:" + response['Batch'] +
                   '\n'+
                   "RollNo:" + response['Rollno'] +
                   '\n'+
                   "Smester:" + response['Smester'] +
                   '\n'+
                   "PhoneNo:" + response['Phoneno'] +
                   '\n'+
                   "UserType:" + response['UserType']);*/
             //  window.location.href = "/Home/Congrates_View";
           }
       })
    .error(function (data, msg, detail) {
        alert(data + '\n' + msg + '\n' + detail)
    });
    
    return false;

}

function signUpWithValuesPressed() {

    alert("I am pressed");
    $.post('/api/signup',
        $('#SignUpForm').serialize()).success(function (response) {
            if (response) {
                alert(response);
                /*alert("FName:" + response['FName'] +
                    '\n'+
                    "LName:" + response['LName'] +
                    '\n'+
                    "Password:" + response['Password'] +
                    '\n'+
                    "Batch:" + response['Batch'] +
                    '\n'+
                    "RollNo:" + response['Rollno'] +
                    '\n'+
                    "Smester:" + response['Smester'] +
                    '\n'+
                    "PhoneNo:" + response['Phoneno'] +
                    '\n'+
                    "UserType:" + response['UserType']);*/
                window.location.href = "/Home/Congrates_View";
            }
        })
     .error(function (data, msg, detail) {
         alert(data + '\n' + msg + '\n' + detail)
     }); 
   
    return false;
}
function donePressed() {
    //alert("done pressed");
    window.location.href = "/Home/index";
}
function signWithValuesInPressed() {

    
   // alert(postData);
    $.post('/api/root',
        $('#SignInForm').serialize()
        
        )
    .success(function (data) {
      // alert(data['UserType']);
        if (data['userType']) {
            if (data['userType'] == 'tc') {
                $('#invalidMessageDiv').hide();
                window.location.href = "/Home/Teacher_Dashboard_View";

            }
            else
                if (data['userType'] == 'pr') {
                $('#invalidMessageDiv').hide();
                window.location.href = "/Home/Parent_Dashboard_View";
            }
            else
                if (data['userType'] == 'st') {
               
               $('#invalidMessageDiv').hide();
                window.location.href = "/Home/Student_Dashboard_View";
            }
        }
        else {
           // alert("else part");
          
          /*  $('#name').val("");
           $('#password').val("");
           $('#invalidMessageDiv').show();*/
            alert("FName:" + data['fname'] +
                    '\n'+
                    "LName:" + data['lname'] +
                    '\n'+
                    "Password:" + data['password'] +
                    '\n'+
                    "Batch:" + data['batch'] +
                    '\n'+
                    "RollNo:" + data['rollno'] +
                    '\n'+
                    "Smester:" + data['smester'] +
                    '\n'+
                    "PhoneNo:" + data['phoneno'] +
                    '\n'+
                    "UserType:" + data['userType'] +
                    '\n');
        }
            
        // Do something to tell the user that all went well.
    })
    .error(function (data, msg, detail) {
        alert(data + '\n' + msg + '\n' + detail)
    });
    return false;

   // alert($("#name").val());
}
function signUpPressed() {
    window.location.href = "/Home/SignUp_View";
}
function parentPressed() {
    window.location.href = "/Home/Parent_SignUp_View";
}
function studentPressed() {
    window.location.href = "/Home/Student_SignUp_View";
}
function teacherPressed() {
    window.location.href = "/Home/Teacher_SignUp_View";
}
function takeattendancePressed() {
    alert("Take Attendance Reached");
}
function uploadresultsPressed() {
    alert("Upload Results Reached");
}
function notificationsPressed() {
   // alert("Notifications Reached");
    window.location.href = "/Home/Notification_View";
}
function anstoQueryPressed() {
    alert("Ans To Query Reached");
}
function checkattendancePressed() {
    alert("Check Attendance Reached");
}
function checkresultsPressed() {
    alert("Check Results Reched");
}
function submitqueryPressed() {
   // alert("Submit Query Reached");
    window.location.href = "/Home/studentQuery_View";
}
function signOutPressed() {
    window.location.href = "/Home/index";
}
function queryPressed() {
   // alert("query pressed");
    $.post('/api/submitQuery',
    $('#queryForm').serialize()).success(function (response) {
        if (response) {
           /* alert("Sendto:" + response['Sendto'] +
                '\n' +
                "Subject:" + response['Subject'] +
                '\n' +
                "Querydetail:" + response['Querydetail'] 
           );*/
            alert("Successfuly made query");
      
            
        }
        else
            alert("Some error occured");
    })
 .error(function (data, msg, detail) {
     alert(data + '\n' + msg + '\n' + detail)
 });
    return false;
}
function getAllNotifications() {
    
    $.post('/api/Notification',
   {Id:"Ustad"}).success(function (response) {
      if (response) {
          alert(response
         );

      }
  })
.error(function (data, msg, detail) {
    alert(data + '\n' + msg + '\n' + detail)
});
  //  alert("get All notifications");
}