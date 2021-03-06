import { inject, injectable } from 'inversify';
import { UpdateOwner } from '@core/owner/domain/usecases';
import {
  OwnerReadRepository,
  OwnerWriteRepository
} from '@core/owner/data/contracts';
import { IDDoesNotExistException } from '@core/shared/data/contracts';
import {
  OWNER_READ_REPOSITORY,
  OWNER_WRITE_REPOSITORY
} from '@core/owner/config/types';
import {
  OutputUpdateOwnerDTO,
  InputUpdateOwnerDTO
} from '@core/owner/domain/dtos';
import { RepositoryOwner } from '../entities';

@injectable()
export class UpdateOwnerUseCase implements UpdateOwner {
  constructor(
    @inject(OWNER_READ_REPOSITORY)
    private readonly ownerReadRepository: OwnerReadRepository,

    @inject(OWNER_WRITE_REPOSITORY)
    private readonly ownerWriteRepository: OwnerWriteRepository
  ) {}

  async update({
    id,
    name
  }: InputUpdateOwnerDTO): Promise<OutputUpdateOwnerDTO> {
    const owner = await this.ownerReadRepository.findByID(id);

    if (!owner) {
      throw new IDDoesNotExistException();
    }

    const repositoryOwner = new RepositoryOwner({
      ...owner,
      name
    });

    await this.ownerWriteRepository.update(repositoryOwner);

    await this.ownerReadRepository.replace(repositoryOwner);

    return repositoryOwner;
  }
}
