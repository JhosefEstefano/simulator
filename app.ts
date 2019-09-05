import { Server } from './utils/server'
import bodyParser from 'body-parser'
import cors from 'cors'
import { configDB }from './utils/connection'

import simuladorRoutes from './routes/simulacion';

/**
 * compile
 *  tsc -w  ./raiz
 *  nodemon dist/ nodemon app.js
*/

/**
 *  lat DECIMAL(10,8)	Obligatorio
    lng	DECIMAL(10,8)	Obligatorio
    battery_level	INT	Opcional
    uuid_device	VARCHAR(50)	Obligatorio
    rumbo	DECIMAL(10,8)	Opcional
    speed	DECIMAL(10,8)	Opcional

 */


Server.getInstance
    .app.use( bodyParser.urlencoded({ extended: true }) );
Server.getInstance
    .app.use( bodyParser.json() );
Server.getInstance
    .app.use( cors({ origin: true, credentials: true  }) );

Server.getInstance.app.use('/api/v1', simuladorRoutes)

configDB("mongodb://localhost:27017/simulador").then( dbConfig =>{
    Server.getInstance.startAPP(  ()=>{
        console.log(`
            [ API ] Running on port ${ Server.getInstance.port }
            ${ dbConfig }
        `);
    })
}).catch(e=>{ console.log(e)})

