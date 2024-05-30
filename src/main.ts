import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];


// APARTADO 1 
    // a) Extraer asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    let resultado: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra"){
            resultado.push(pacientes[i]);
        }
    }
    return resultado;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));

    // b) Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    let resultado: Pacientes[] = [];
    const anios: Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
    for (let i = 0; i < anios.length; i++){
        if(anios[i].edad < 10){
            resultado.push(anios[i]);
        }
    }   
    return resultado;
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// APARTADO 2: ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39){
            activarProctolo = true;
        }
    }
    return activarProctolo;
};
console.log('Protocolo de urgencia:',activarProtocoloUrgencia(pacientes));

// APARTADO 3: reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    let resultado: Pacientes[] = [];
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad === "Pediatra"){
            resultado.push(pacientes[i]= {
                ...pacientes[i],
                especialidad: "Medico de familia",
            });
        }
    }
    return resultado;
};
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// APARTADO 4: comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let mandarACasa = false;
    const reasignacion: Pacientes[] = reasignaPacientesAMedicoFamilia(pacientes);
    for(let i = 0; i < pacientes.length; i++){
       if(reasignacion){
            mandarACasa = true;
       }
    }
    return mandarACasa;
  };
console.log(HayPacientesDePediatria(pacientes));