import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuarioxrol extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  _id_usuario?: string;

  @property({
    type: 'string',
  })
  _id_rol?: string;

  constructor(data?: Partial<Usuarioxrol>) {
    super(data);
  }
}

export interface UsuarioxrolRelations {
  // describe navigational properties here
}

export type UsuarioxrolWithRelations = Usuarioxrol & UsuarioxrolRelations;
