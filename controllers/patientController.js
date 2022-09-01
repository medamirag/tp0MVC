const {addPatientService,getAllPatientsService,updatePatientService,deletePatientService,getPatientByIdPatientService}=require('../services/patientService')


const addPatient =(req,res)=>{
    res.send(addPatientService);
}

const getAllPatients =async (req,res)=>{
res.send(await getAllPatientsService());
}
const getPatientByIdPatient =async (req,res)=>{

    const idPatient=req.params['idPatient']
    
res.send(await getPatientByIdPatientService(idPatient));
}

const updatePatient =(req,res)=>{
    const idPatient=req.params['idPatient']
    res.send(updatePatientService);
}

const deletePatient =(req,res)=>{
    const idPatient=req.params['idPatient']
    res.send(deletePatientService);
}






module.exports={addPatient,getAllPatients,updatePatient,deletePatient,getPatientByIdPatient};