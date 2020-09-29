  var config = {
    apiKey: "AIzaSyCqcCLPTGvv-ugTeBqrjDoKfRbldDjyCHE",
    authDomain: "quemvai-9dec6.firebaseapp.com",
    databaseURL: "https://quemvai-9dec6.firebaseio.com",
    projectId: "quemvai-9dec6",
    storageBucket: "quemvai-9dec6.appspot.com",
    messagingSenderId: "937254807870",
    appId: "1:937254807870:web:0ab7c00f82a038f30ce46f",
    measurementId: "G-1XZ0R0492B"
  };
firebase.initializeApp(config);

let db = firebase.firestore();


//Ler todos os dados de uma coleção!
db.collection("timeA").get()
    .then((snapshot)=> {

        snapshot.forEach((doc)=> {
            let jogador = doc.data();
            console.log(jogador.clubes);
            //console.log(doc.data());
        })
    })

//Pegar somente um dado do banco de dados!    
   /* let docRef = db.collection('timeA').doc('numeroladofirebase');
    docRef.get().then((doc) => {
        console.log(doc.data().nome);
    })*/

  /*//pegar somente alguns nomes
    db.collection('timeA').where('nome', '==', 'José').get()
    //outro nome
    . where('nome', '<', 'José').get()
      .then(snapshot => {
        snapshot.forEach((doc)=> {
          let jogador = doc.data();
            console.log(aluno.nome, aluno.sobrenome);
        })
      })*/


      //inserir no banco de dados!
  /*db.collection('timeA').add({
    nome: 'Jean',
    sobrenome: 'Oliveira'
  }).then((doc)=> {
    console.log('Documento Inserido com sucesso');
  }).catch(error => {
    console.log(err);
  })*/

  //modificar um dado sem apagar o objeto .set modifica todo o documento o .update atualiza somente, .delete deleta o documento
  /*db.collection('timeA').doc('Oot4cYcCgHKfGMbqjVeN').update({

    //adicionar um array
    clubes: ['São Paulo', 'Fluminense'],
    //atualizar um array
    //---clubes: firebase.firestore.FieldValue.arrayUnion('Palmeiras', 'Flamengo')
    //remover um array usar no lugar de arrayUnion usar arrayRemove
    //---clubes: firebase.firestore.FieldValue.arrayRemove('Flmengo')
    //INCREMENTAR UM DADO OU SOMAR EXEMPLO FALTA ALUNOS .delete deleta o campo
    //---faltas: firebase.firestore.FieldValue.increment(5)


    //--nome: 'Julimar',
    //--sobrenome: 'Treguas'
  }).then(()=> {
    console.log('Documento atualizado com sucesso');
  }).catch(err => {
    console.log(err);
  })*/
