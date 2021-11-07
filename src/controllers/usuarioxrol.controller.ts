import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Usuarioxrol} from '../models';
import {UsuarioxrolRepository} from '../repositories';

export class UsuarioxrolController {
  constructor(
    @repository(UsuarioxrolRepository)
    public usuarioxrolRepository : UsuarioxrolRepository,
  ) {}

  @post('/usuariosxroles')
  @response(200, {
    description: 'Usuarioxrol model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuarioxrol)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuarioxrol, {
            title: 'NewUsuarioxrol',
            exclude: ['_id'],
          }),
        },
      },
    })
    usuarioxrol: Omit<Usuarioxrol, '_id'>,
  ): Promise<Usuarioxrol> {
    return this.usuarioxrolRepository.create(usuarioxrol);
  }

  @get('/usuariosxroles/count')
  @response(200, {
    description: 'Usuarioxrol model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuarioxrol) where?: Where<Usuarioxrol>,
  ): Promise<Count> {
    return this.usuarioxrolRepository.count(where);
  }

  @get('/usuariosxroles')
  @response(200, {
    description: 'Array of Usuarioxrol model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuarioxrol, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuarioxrol) filter?: Filter<Usuarioxrol>,
  ): Promise<Usuarioxrol[]> {
    return this.usuarioxrolRepository.find(filter);
  }

  @patch('/usuariosxroles')
  @response(200, {
    description: 'Usuarioxrol PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuarioxrol, {partial: true}),
        },
      },
    })
    usuarioxrol: Usuarioxrol,
    @param.where(Usuarioxrol) where?: Where<Usuarioxrol>,
  ): Promise<Count> {
    return this.usuarioxrolRepository.updateAll(usuarioxrol, where);
  }

  @get('/usuariosxroles/{id}')
  @response(200, {
    description: 'Usuarioxrol model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuarioxrol, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuarioxrol, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuarioxrol>
  ): Promise<Usuarioxrol> {
    return this.usuarioxrolRepository.findById(id, filter);
  }

  @patch('/usuariosxroles/{id}')
  @response(204, {
    description: 'Usuarioxrol PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuarioxrol, {partial: true}),
        },
      },
    })
    usuarioxrol: Usuarioxrol,
  ): Promise<void> {
    await this.usuarioxrolRepository.updateById(id, usuarioxrol);
  }

  @put('/usuariosxroles/{id}')
  @response(204, {
    description: 'Usuarioxrol PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuarioxrol: Usuarioxrol,
  ): Promise<void> {
    await this.usuarioxrolRepository.replaceById(id, usuarioxrol);
  }

  @del('/usuariosxroles/{id}')
  @response(204, {
    description: 'Usuarioxrol DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioxrolRepository.deleteById(id);
  }
}
