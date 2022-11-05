class ControleRemoto {
     constructor(tv) {
          this.tv = tv;
          this.volume = 0;
     }
     aumentaVolume() {
          this.volume += 2;
          console.log(this);
     }
     diminuiVolume() {
          this.volume += 2;
     }
     static desligarTv() {
          console.log('DESLIGANDO...');
          console.log(this);
          // se por acaso eu quiser criar uma função externa que tenha por this essa class, crie uma função estática
     }
}
const tv1 = new ControleRemoto('Sansumg')
tv1.aumentaVolume()
tv1.aumentaVolume()
// tv1.desligarTv() -> erro
console.log(tv1);
ControleRemoto.desligarTv()//método estático não tem ligação com instâncias

// Math.random() método static, pois Math é um objeto sem necessidade de instânciação