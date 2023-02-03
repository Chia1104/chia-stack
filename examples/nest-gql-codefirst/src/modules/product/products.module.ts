import { Module } from "@nestjs/common";
import { ProductsService } from "./services";
import { ProductsResolver } from "./resolvers";
import { ProductsController } from "./controllers";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  providers: [ProductsService, ProductsResolver],
  controllers: [ProductsController],
  imports: [PrismaModule],
})
export class ProductsModule {}
