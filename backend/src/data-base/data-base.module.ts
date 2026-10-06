import { Global, Module } from '@nestjs/common';
import { DataBaseService } from './data-base.service.js';

@Global()
@Module({
	providers: [DataBaseService],
	exports: [DataBaseService]
})
export class DataBaseModule {}
