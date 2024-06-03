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
const obtenPacientesAsignadosAPediatria : Pacientes[] = pacientes.filter (
  (pacientes: Pacientes) => pacientes.especialidad === "Pediatra"
);
console.log(obtenPacientesAsignadosAPediatria);

  // b) Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios : Pacientes[] = pacientes.filter (
  (pacientes: Pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
);
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios);

// APARTADO 2: ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados
const activarProtocoloUrgencia : boolean = pacientes.some (
  (pacientes: Pacientes): boolean => pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39,
);
console.log('Protocolo de urgencia:', activarProtocoloUrgencia);

// APARTADO 3: reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia
const reasignaPacientesAMedicoFamilia = (pacientes:Pacientes[]) : Pacientes[] => 
  pacientes.map((paciente) => 
    paciente.especialidad === "Pediatra" ? {...paciente, especialidad: "Medico de familia"}: paciente
  );
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// APARTADO 4: comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria: boolean = reasignaPacientesAMedicoFamilia(pacientes).some(
  (pacientes:Pacientes): boolean => pacientes.especialidad === "Pediatra"
);
console.log(HayPacientesDePediatria);

// APARTADO 5 (OPCIONAL): número total de pacientes que están asignados a cada especialidad
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const totalPacientesPorTipoDeEspecialidad = (pacientes:Pacientes[], tipoDeEspecialidad:Especialidad): number =>{
  const totalPacientes = pacientes.reduce(
    (acumulado, paciente) =>{
      return paciente.especialidad === tipoDeEspecialidad ? ++acumulado : acumulado
    }, 0
  ); 
  return totalPacientes;
};

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  return{
    medicoDeFamilia: totalPacientesPorTipoDeEspecialidad(pacientes, "Medico de familia"),
    pediatria: totalPacientesPorTipoDeEspecialidad(pacientes, "Pediatra"),
    cardiologia: totalPacientesPorTipoDeEspecialidad(pacientes, "Cardiólogo")
  }
};

console.log(cuentaPacientesPorEspecialidad(pacientes));