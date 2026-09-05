import express from 'express';
import { createStudentAccount, getStudentDetails, updateStudentProfile, deleteStudentAcc } from '../controller/studentController.js';
const studentRoute = express.Router()
studentRoute.post("/new-student-account",createStudentAccount)
studentRoute.get("/student-details/:studentId",getStudentDetails)
studentRoute.patch('/update-student-profile/:studentId',updateStudentProfile)
studentRoute.delete ('/delete-account/:studentId',deleteStudentAcc)

export default studentRoute;