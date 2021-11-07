import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Rol, Usuarioxrol} from '../models';
import {UsuarioxrolRepository} from './usuarioxrol.repository';
import {RolRepository} from './rol.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype._id,
  UsuarioRelations
> {

  public readonly tiene_roles: HasManyThroughRepositoryFactory<Rol, typeof Rol.prototype._id,
          Usuarioxrol,
          typeof Usuario.prototype._id
        >;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('UsuarioxrolRepository') protected usuarioxrolRepositoryGetter: Getter<UsuarioxrolRepository>, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>,
  ) {
    super(Usuario, dataSource);
    this.tiene_roles = this.createHasManyThroughRepositoryFactoryFor('tiene_roles', rolRepositoryGetter, usuarioxrolRepositoryGetter,);
    this.registerInclusionResolver('tiene_roles', this.tiene_roles.inclusionResolver);
  }
}
