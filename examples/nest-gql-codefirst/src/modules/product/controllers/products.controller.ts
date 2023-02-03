import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductsService } from "../services";
import { Product } from "@prisma/client";
import { NewProductDTO, UpdateProductDTO } from "@/shared/dto/product.dto";

@ApiTags("products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({ status: 404, description: "Not Found." })
  async getProducts(): Promise<Product[]> {
    const products = await this.productsService.getProducts();
    if (!products) throw new NotFoundException("Products not found");
    return products;
  }

  @Get(":id")
  @ApiOperation({ summary: "Get product by id(_id)" })
  @ApiResponse({ status: 404, description: "Not Found." })
  async getProductById(@Param("id") _id: string): Promise<Product> {
    const product = await this.productsService.getProductById(_id);
    if (!product) throw new NotFoundException("Product not found");
    return product;
  }

  @Post()
  @ApiOperation({ summary: "Create new product" })
  async createProduct(@Body() product: NewProductDTO): Promise<Product> {
    try {
      return await this.productsService.createProduct(product);
    } catch (error) {
      throw new InternalServerErrorException(error.code);
    }
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update product by id(_id)" })
  async updateProduct(
    @Param("id") _id: string,
    @Body() product: UpdateProductDTO
  ): Promise<Product> {
    try {
      return await this.productsService.updateProduct(_id, product);
    } catch (error) {
      throw new InternalServerErrorException(error.code);
    }
  }
}
