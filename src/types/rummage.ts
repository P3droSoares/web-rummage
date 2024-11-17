import { Cep } from './cep'

export interface RummageMethods {
    cep: (cep: string) => Promise<Cep>
}