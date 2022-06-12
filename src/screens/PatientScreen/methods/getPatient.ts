import { HomeCareProps } from "../../../../utils/types"


interface Props{
    services: HomeCareProps[];
    serviceId: string;
    patientId: string;
}

export function getPatient({services, serviceId, patientId}: Props){

    const serviceIndex = services.findIndex(service => service.id === serviceId)
    const patientIndex = services[serviceIndex].patients.findIndex(patient => patient.id === patientId)

    const patient = services[serviceIndex].patients[patientIndex]

    return patient
}