import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { Product } from "@prisma/client";
import { NewProductDTO, UpdateProductDTO } from "@/shared/dto/product.dto";

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async createProduct(product: NewProductDTO): Promise<Product> {
    return await this.prisma.product.create({ data: product });
  }

  async getProductById(id: string): Promise<Product> {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async updateProduct(id: string, product: UpdateProductDTO): Promise<Product> {
    return await this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.prisma.product.delete({ where: { id } });
  }
}
