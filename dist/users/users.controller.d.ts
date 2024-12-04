import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): {
        title: string;
        users: import("./users.service").User[];
    };
    getUser(id: number): {
        title: string;
        user: import("./users.service").User | undefined;
    };
}
