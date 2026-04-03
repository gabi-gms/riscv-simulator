// core/models/instruction.model.ts

export type InstructionType = 'R' | 'I' | 'S';

export type RTypeOp = 'ADD' | 'SUB' | 'AND' | 'OR' | 'XOR';
export type ITypeOp = 'ADDI' | 'LW' | 'JALR';
export type STypeOp = 'SW';

export type Operation = RTypeOp | ITypeOp | STypeOp;

export interface RTypeInstruction {
  type: 'R';
  op: RTypeOp;
  rd: string;
  rs1: string;
  rs2: string;
}

export interface ITypeInstruction {
  type: 'I';
  op: ITypeOp;
  rd: string;
  rs1: string;
  imm: number;
}

export interface STypeInstruction {
  type: 'S';
  op: STypeOp;
  rs1: string;
  rs2: string;
  imm: number;
}

export type Instruction = RTypeInstruction | ITypeInstruction | STypeInstruction;
