import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Inject,
  Patch,
} from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';

import { ORDER_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';
import { OrderTCP } from 'src/common';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ORDER_SERVICE) private readonly ordersClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send(OrderTCP.CREATE, createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersClient.send(OrderTCP.FIND_ALL, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersClient.send(OrderTCP.FIND_ONE, { id });
  }

  @Patch()
  changeStatus() {
    return this.ordersClient.send(OrderTCP.CHANGE_ONE, {});
  }
}
