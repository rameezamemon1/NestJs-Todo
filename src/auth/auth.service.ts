import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    addItem() {
        return { message: "Product added" }
    }
}

// const service= new AuthService()