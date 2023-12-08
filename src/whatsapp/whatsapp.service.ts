import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
import { IResponseSendWhatsapp } from './interfaces/responseSendWhatsapp.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WhatsappService {

  constructor(private configService: ConfigService) { }

  async sendWhatsapp(createWhatsappDto: CreateWhatsappDto): Promise<IResponseSendWhatsapp> {
    console.log(createWhatsappDto)
    try {
      const accountSid = this.configService.get<string>('accountSid')

      const authToken = this.configService.get<string>('authToken')

      const client = twilio(accountSid, authToken);

      const responseSendWhatsapp = await client.messages
        .create({
          body: `${createWhatsappDto.message}`,
          from: 'whatsapp:+14155238886',
          to: `whatsapp:+521${createWhatsappDto.phone}`
        })

      return {
        status: true,
        data: responseSendWhatsapp
      }
    } catch (error) {
      console.log(error)
      return {
        status: false,
        error
      }
    }

  }
}
