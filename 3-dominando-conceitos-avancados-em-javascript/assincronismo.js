//assincrono - tempo qualquer
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
  const numero = parseInt(Math.random() * 100);
  resolve(numero);
});

promessaDeUmNumeroQualquer
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finalizou");
  });

  //colocar meu tempo

  const promessaDeUmNumeroQualquer1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const numero = parseInt(Math.random()*100)
        resolve(numero);

    }), 1000 // tempo
   
})
  
  promessaDeUmNumeroQualquer1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Finalizou");
    });
  