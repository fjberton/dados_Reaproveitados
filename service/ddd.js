export const buscarDDD = (ddd)=>{
    let urlAPI =`https://brasilapi.com.br/api/ddd/v1/{ddd}`;
    try{
        const reposta = await fetch(urlAPI,{
            method: "GET"
        })
        if(!reposta)
        
    }catch (error){

    }
}