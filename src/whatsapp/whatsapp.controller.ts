import { Controller, Post, Body } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
/* import { UpdateWhatsappDto } from './dto/update-whatsapp.dto'; */

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) { }

  @Post()
  async sendWhatsapp(@Body() createWhatsappDto: CreateWhatsappDto) {
    console.log('aqui hubo un post')
    console.log('desde controller', createWhatsappDto)
    return await this.whatsappService.sendWhatsapp(createWhatsappDto)
  }

  /* @Post()
  create(@Body() createWhatsappDto: CreateWhatsappDto) {
    return this.whatsappService.create(createWhatsappDto);
  }

  @Get()
  findAll() {
    return this.whatsappService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whatsappService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhatsappDto: UpdateWhatsappDto) {
    return this.whatsappService.update(+id, updateWhatsappDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappService.remove(+id);
  } */
}
