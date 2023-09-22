export interface UserDTO {
    email: string;
    username: string;
    password: string;
    isEmailVerified?: boolean;
    accessToken?: string;
    lastLogin?: Date;
}
