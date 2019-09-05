import mongoose from 'mongoose';

export const configDB  = async ( URL_DATABASE : string ) => {
    return new Promise( (resolve, reject)=>{
        mongoose.connect(URL_DATABASE, { useNewUrlParser: true })
        .then( ()=>{
            resolve('[DB Connected]')
        }).catch(e=>{ 
            reject(e)
         })
    })
} 