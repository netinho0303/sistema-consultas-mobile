import { Paciente } from "../types/pacientes";
import { StatusConsulta } from "../types/statusConsulta";
import { Medico } from "./medicos";

export interface Consulta {
 id: number;
 medico: Medico;
 paciente: Paciente;
 data: Date;
 valor: number;
 status: StatusConsulta;
 observacoes?: string;
}
