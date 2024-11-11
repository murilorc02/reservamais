import { Test, TestingModule } from '@nestjs/testing';
import { BlocosController } from './blocos.controller';
import { BlocosService } from './blocos.service';

describe('BlocosController', () => {
  let controller: BlocosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlocosController],
      providers: [BlocosService],
    }).compile();

    controller = module.get<BlocosController>(BlocosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
