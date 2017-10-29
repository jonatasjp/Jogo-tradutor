const urlCoracaoCheio: string = '/assets/coracao_cheio.png';
const urlCoracaoVazio: string = '/assets/coracao_vazio.png';

export class Coracao {

    constructor(public cheio: boolean){}
    
    public exibeCoracao(): string {
        if(this.cheio) {
            return urlCoracaoCheio;
        } else {
            return urlCoracaoVazio;
        }
    }

}
