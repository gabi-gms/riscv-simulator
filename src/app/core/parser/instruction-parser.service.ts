import { Injectable } from '@angular/core';
import { Instruction, ITypeOp, RTypeOp, STypeOp } from '../models/instruction.model';

@Injectable({ providedIn: 'root' })
export class InstructionParserService {

  parse(raw: string): Instruction {
    const parts = raw.trim().toUpperCase().replace(/,/g, '').split(/\s+/);
    const op = parts[0];

    const R_OPS = ['ADD', 'SUB', 'AND', 'OR', 'XOR'];
    const I_OPS = ['ADDI', 'LW', 'JALR'];
    const S_OPS = ['SW'];

    if (R_OPS.includes(op)) {
      return {
        type: 'R',
        op: op as RTypeOp,
        rd: parts[1].toLowerCase(),
        rs1: parts[2].toLowerCase(),
        rs2: parts[3].toLowerCase()
      };
    } else if (I_OPS.includes(op)) {
      return {
        type: 'I',
        op: op as ITypeOp,
        rd: parts[1].toLowerCase(),
        rs1: parts[2].toLowerCase(),
        imm: parseInt(parts[3])
      };
    } else if (S_OPS.includes(op)) {
      const match = parts[2].match(/(\d+)\((\w+)\)/);

      if (!match) {
        throw new Error(`Formato inválido para instrução S-type: ${raw}`);
      }

      return {
        type: 'S',
        op: op as STypeOp,
        rs1: parts[1].toLowerCase(),
        rs2: match[2].toLowerCase(),
        imm: parseInt(match[1])
      };
    } else {
      throw new Error(`Instrução desconhecida: ${op}`);
    }
  }

}
