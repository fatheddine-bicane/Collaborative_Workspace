import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";

@Injectable()
export class DataBaseService {
	public prisma: PrismaClient;

	constructor() {
		const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL})
		this.prisma = new PrismaClient({adapter})
	}
}
