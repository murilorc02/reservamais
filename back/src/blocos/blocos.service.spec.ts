import { Test, TestingModule } from '@nestjs/testing';
import { BlocosService } from './blocos.service';

describe('BlocosService', () => {
  let service: BlocosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocosService],
    }).compile();

    service = module.get<BlocosService>(BlocosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
