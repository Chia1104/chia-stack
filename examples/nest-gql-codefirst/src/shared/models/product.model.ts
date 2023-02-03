import "reflect-metadata";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  excerpt: string;

  @Field(() => Int)
  price: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
