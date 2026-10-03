import { Module } from "@nestjs/common";
import { DataBaseModule } from "./data-base/data-base.module.js"

@Module({
	imports: [DataBaseModule]
})
export class AppModule {}
