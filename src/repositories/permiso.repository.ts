import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Permiso, PermisoRelations, Rol} from '../models';
import {RolRepository} from './rol.repository';

export class PermisoRepository extends DefaultCrudRepository<
  Permiso,
  typeof Permiso.prototype._id,
  PermisoRelations
> {

  public readonly tiene: HasOneRepositoryFactory<Rol, typeof Permiso.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>,
  ) {
    super(Permiso, dataSource);
    this.tiene = this.createHasOneRepositoryFactoryFor('tiene', rolRepositoryGetter);
    this.registerInclusionResolver('tiene', this.tiene.inclusionResolver);
  }
}
