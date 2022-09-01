const express=require('express');
const {addPatient,getAllPatients,updatePatient,deletePatient,getPatientByIdPatient}=require('../controllers/patientController')
const patientRoute=express.Router();
//Create
patientRoute.post('/',addPatient)
//Read
patientRoute.get('/',getAllPatients)
//Update
patientRoute.put('/:idPatient',updatePatient)
//Delete
patientRoute.delete('/:idPatient',deletePatient)
patientRoute.get('/:idPatient',getPatientByIdPatient)

// //CRUD
// patientRoute.get('/',getAllPatients).post('/',addPatient).delete('/:idPatient',deletePatient).put('/:idPatient',updatePatient);


module.exports={patientRoute};