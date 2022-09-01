const { cnxdb, cnx } = require('../config/db');

const addPatientService = () => {

}

const getAllPatientsService = () => {
    let qry = "SELECT * FROM patient"
    return new Promise((resolve, reject) => {
        cnx.query(qry, (err, result) => {
            if (err) {
                console.log(err);
                reject(err)
            }
            else {
                console.log(result);
                resolve(result)
            }


        })
    })






}

const updatePatientService = () => {


}
const getPatientByIdPatientService = (idPatient) => {
let qr=`select * from patient where patient.id =${idPatient} `;
return new Promise((resolve, reject) => {
    cnx.query(qr, (err, result) => {
if (err){
reject(err);
}
else{
resolve(result);
}
    });
})

}

const deletePatientService = () => {


}

module.exports = { addPatientService, getAllPatientsService, updatePatientService, getPatientByIdPatientService,deletePatientService }