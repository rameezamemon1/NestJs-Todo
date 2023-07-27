import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
@Controller('product')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('add')
    addItem(@Body() dto: AuthDto) {
        console.log(dto)
        return this.authService.addItem()
    }
}