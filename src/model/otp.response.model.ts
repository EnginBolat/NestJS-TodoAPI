import { IsString, } from "class-validator";

export class OTPResponse {
    @IsString()
    message: string
    @IsString()
    otpCode: string
}