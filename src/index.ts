import { Cep, RummageMethods } from './types'

class Rummage implements RummageMethods {
    async cep(): Promise<Cep> {
      const response: Cep = {
        Rua: "",
        Bairro: "",
        Cidade: "",
        Estado: ""
      }
  
      return response;
    }
  }

async function fetchCep() {
    const result = await new Rummage().cep();
    console.log(result);
  }
  
  fetchCep();