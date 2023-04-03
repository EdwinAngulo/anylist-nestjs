import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateItemInput {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsOptional()
  @IsPositive()
  @Field(() => Int, { nullable: true })
  quantity?: number;
}
