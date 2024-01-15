export default class SaveCopiesGateway{

    saveLocalStorage(itens){

        localStorage.setItem('texts',JSON.stringify(itens));

    }


}