import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { CreateItemInput } from './create-item.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
