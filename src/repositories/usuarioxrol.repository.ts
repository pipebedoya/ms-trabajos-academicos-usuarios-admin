import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Usuarioxrol, UsuarioxrolRelations} from '../models';

export class UsuarioxrolRepository extends DefaultCrudRepository<
  Usuarioxrol,
  typeof Usuarioxrol.prototype._id,
  UsuarioxrolRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Usuarioxrol, dataSource);
  }
}
