import studentModel from "../model/studentModel.js";

const createStudentAccount = async(request,response) =>{
    try{
        const {name,regNo,emailAddress} =request.body
        const student = await studentModel.create({
            name,regNo,emailAddress
    })
    response.status(201).json ({
        message:"Student account created successfully",
        data:student

        })
}catch (error){
    response.status(500).json({
        message:error.message
    })
}
}
const updateStudentProfile = async (req,res) => {
    try{
        const {studentId} = req.params
        const{name} =req.body
        const update = await studentModel.findByIdAndUpdate(studentId,
            {name},
        {new:true})
         
    res.status(200).json ({
        message:"Profile updated!",
        studentId:update
    })
  }catch (error) {
        return res.status (500).json ({
            message:error.message
        })
    }
    }

    const getStudentDetails = async  (req,res) =>{
    try{
        const {studentId} = req.params
        const studentDetails = await studentModel.findById(studentId)
        if(!studentDetails){
            return res.status(404).json({
                message:"Student details not found"
            })
        }
        return res.status(200).json({
         message:"Student details fetched successfully",
         data:studentDetails
        })
    }catch (error) {
        return res.status (500).json ({
            message:error.message
        })
    }
    
}


const deleteStudentAcc = async (req,res) => {
    try{
        const {studentId} = req.params
        const deleteStudent = await studentModel.findByIdAndDelete(studentId)
         if(!deleteStudent){
            return res.status(404).json({
                message:"Student not found"
            })
        }
        return res.status(200).json({
       message:"Account deleted successfully",
       data:deleteStudent
        })
    }catch(error) {
        return res.status(500) .json({
            message:error.message
        })
    }
}
export {createStudentAccount,updateStudentProfile,getStudentDetails,deleteStudentAcc}