import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Permiso,
  Rol,
} from '../models';
import {PermisoRepository} from '../repositories';

export class PermisoRolController {
  constructor(
    @repository(PermisoRepository) protected permisoRepository: PermisoRepository,
  ) { }

  @get('/permisos/{id}/rol', {
    responses: {
      '200': {
        description: 'Permiso has one Rol',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Rol),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Rol>,
  ): Promise<Rol> {
    return this.permisoRepository.tiene(id).get(filter);
  }

  @post('/permisos/{id}/rol', {
    responses: {
      '200': {
        description: 'Permiso model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rol)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Permiso.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {
            title: 'NewRolInPermiso',
            exclude: ['_id'],
            optional: ['_id_permiso']
          }),
        },
      },
    }) rol: Omit<Rol, '_id'>,
  ): Promise<Rol> {
    return this.permisoRepository.tiene(id).create(rol);
  }

  @patch('/permisos/{id}/rol', {
    responses: {
      '200': {
        description: 'Permiso.Rol PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {partial: true}),
        },
      },
    })
    rol: Partial<Rol>,
    @param.query.object('where', getWhereSchemaFor(Rol)) where?: Where<Rol>,
  ): Promise<Count> {
    return this.permisoRepository.tiene(id).patch(rol, where);
  }

  @del('/permisos/{id}/rol', {
    responses: {
      '200': {
        description: 'Permiso.Rol DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Rol)) where?: Where<Rol>,
  ): Promise<Count> {
    return this.permisoRepository.tiene(id).delete(where);
  }
}
