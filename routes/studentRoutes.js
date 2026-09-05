const express = require ("express")
const studentRoute = express.Router()
const{createStudentAccount,updateStudentProfile,getStudentDetails,deleteStudentAcc} = require ("../controller/studentController")
studentRoute.post("/new-student-account",createStudentAccount)
studentRoute.get("/student-details/:studentId",getStudentDetails)
studentRoute.patch('/update-student-profile/:studentId',updateStudentProfile)
studentRoute.delete ('/delete-account/:studentId',deleteStudentAcc)

module.exports =studentRoute