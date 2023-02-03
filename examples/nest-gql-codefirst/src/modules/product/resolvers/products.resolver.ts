import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import {
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { Product } from "@prisma/client";
import { Product as ProductModel } from "@/shared/models";
import { ProductsService } from "../services";
import { NewProductDTO, UpdateProductDTO } from "@/shared/dto/product.dto";
import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();

@Resolver(() => ProductModel)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [ProductModel])
  async getProducts(): Promise<Product[]> {
    const data = await this.productsService.getProducts();
    if (!data) throw new NotFoundException("Products not found");
    return data;
  }

  @Query(() => ProductModel)
  async getProductById(@Args("id") id: string): Promise<Product> {
    const data = await this.productsService.getProductById(id);
    if (!data) throw new NotFoundException("Product not found");
    return data;
  }

  @Mutation(() => ProductModel)
  async createProduct(
    @Args("product") product: NewProductDTO
  ): Promise<Product> {
    try {
      const data = await this.productsService.createProduct(product);
      await pubSub.publish("productAdded", { productAdded: data });
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error.code);
    }
  }

  @Mutation(() => ProductModel)
  async updateProduct(
    @Args("id") id: string,
    @Args("product") product: UpdateProductDTO
  ): Promise<Product> {
    try {
      const data = await this.productsService.updateProduct(id, product);
      await pubSub.publish("productUpdated", { productUpdated: data });
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error.code);
    }
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Args("id") id: string) {
    try {
      const data = await this.productsService.deleteProduct(id);
      await pubSub.publish("productDeleted", { productDeleted: data });
      return true;
    } catch (error) {
      throw new InternalServerErrorException(error.code);
    }
  }

  @Subscription(() => ProductModel)
  productAdded() {
    return pubSub.asyncIterator("productAdded");
  }

  @Subscription(() => ProductModel)
  productUpdated() {
    return pubSub.asyncIterator("productUpdated");
  }

  @Subscription(() => ProductModel)
  productDeleted() {
    return pubSub.asyncIterator("productDeleted");
  }
}
