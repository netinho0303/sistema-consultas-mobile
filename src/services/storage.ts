import AsyncStorage from "@react-native-async-storage/async-storage";
import { Consulta } from "../interfaces/consulta";
import { Especialidade } from "../types/especialidades";
import { Medico } from "../interfaces/medicos";

const KEYS = {
  ESPECIALIDADES: "@consultas:especialidades",
  MEDICOS: "@consultas:medicos",
  CONSULTAS: "@consultas:consultas",
};


export async function salvarEspecialidades(especialidades: Especialidade[]) {
  try {
    await AsyncStorage.setItem(
      KEYS.ESPECIALIDADES,
      JSON.stringify(especialidades)
    );
  } catch (erro) {
    console.error("Erro ao salvar especialidades:", erro);
  }
}

export async function obterEspecialidades(): Promise<Especialidade[]> {
  try {
    const dados = await AsyncStorage.getItem(KEYS.ESPECIALIDADES);
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error("Erro ao obter especialidades:", erro);
    return [];
  }
}

export async function salvarMedicos(medicos: Medico[]) {
  try {
    await AsyncStorage.setItem(KEYS.MEDICOS, JSON.stringify(medicos));
  } catch (erro) {
    console.error("Erro ao salvar médicos:", erro);
  }
}

export async function obterMedicos(): Promise<Medico[]> {
  try {
    const dados = await AsyncStorage.getItem(KEYS.MEDICOS);
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error("Erro ao obter médicos:", erro);
    return [];
  }
}
export async function salvarConsultas(consultas: Consulta[]) {
  try {
    await AsyncStorage.setItem(KEYS.CONSULTAS, JSON.stringify(consultas));
  } catch (erro) {
    console.error("Erro ao salvar consultas:", erro);
  }
}

export async function obterConsultas(): Promise<Consulta[]> {
  try {
    const dados = await AsyncStorage.getItem(KEYS.CONSULTAS);
    if (dados) {
      const consultas = JSON.parse(dados);
      return consultas.map((consulta: Consulta) => ({
        ...consulta,
        data: new Date(consulta.data),
      }));
    }
    return [];
  } catch (erro) {
    console.error("Erro ao obter consultas:", erro);
    return [];
  }
}









