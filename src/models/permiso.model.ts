import {Entity, model, property, hasOne} from '@loopback/repository';
import {Rol} from './rol.model';

@model()
export class Permiso extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasOne(() => Rol, {keyTo: '_id_permiso'})
  tiene: Rol;

  constructor(data?: Partial<Permiso>) {
    super(data);
  }
}

export interface PermisoRelations {
  // describe navigational properties here
}

export type PermisoWithRelations = Permiso & PermisoRelations;
