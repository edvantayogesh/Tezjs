import { createViteServer } from './create-vite-server';
import AllRouter from './express-routes/all.router';
import {AppRouter } from './express-routes/app.router'
import RoutesRouter from './express-routes/routes.router';
import { TezConfig } from '@tezjs/types';
export async function createTezServer(tezConfig?:TezConfig,rootPath?:string){
    let vite = await createViteServer(tezConfig,rootPath);
    var appRouter = new AppRouter([new RoutesRouter(),new AllRouter(vite)],vite);
    return appRouter.setup();
}