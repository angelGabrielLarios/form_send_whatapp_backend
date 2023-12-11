import { Controller, Post, Body } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
/* import { UpdateWhatsappDto } from './dto/update-whatsapp.dto'; */

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) { }

  @Post()
  async sendWhatsapp(@Body() createWhatsappDto: CreateWhatsappDto) {
    return await this.whatsappService.sendWhatsapp(createWhatsappDto)
  }

}
