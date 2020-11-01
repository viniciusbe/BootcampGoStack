import { Request, Response } from 'express'
import createUser from './services/CreateUser';


export default function helloWorld(request: Request, response: Response) {

    const user = createUser({
        email: 'vinibsp10@gmail.com',
        password: 'password',
        techs: ['Node', 'React', 'React-native', { title: 'Javascript', experience: 100 }]
    });


    return response.json({ message: 'Hello World' });
}