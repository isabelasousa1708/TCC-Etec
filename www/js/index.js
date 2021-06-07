/**************CADASTRO DE USUARIO*************************/
function inscrever(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user);
    window.alert("Conta criada com sucesso!");
    window.location.href = "index.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Erro ao cadastrar conta!");
  });
}
/**************LOGIN DO USUARIO****************************/
function logar(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
      window.alert("conta logada com sucesso!");
      window.location.href = "testeUpload.html";
  })
      .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Email/senha incorreto ou conta inexistente!");
   });
}
/**************REDEFINIÇÃO DE SENHA ***********************/
function newPassword(){
  var auth = firebase.auth();
  var email = document.getElementById("email").value;
  
  auth.sendPasswordResetEmail(email).then(function() {
    // Email sent.
    window.alert("E-mail enviado!");
  }).catch(function(error) {
    // An error happened.
    window.alert("E-mail incorreto ou não cadastrado!");
  });
}
/**************CAPTURAR FOTO******************************/
alert (document.getElementById('cameraApp'));
document.getElementById('cameraApp')//.addEventListener('click',cameraApp);
  function cameraApp(){
    navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 100,
      saveToPhotoAlbum: true /*sava a foto na galaeria*/,
      destinationType: Camera.DestinationType.DATA_URL
    });
    function onSuccess(imageData) {
      var image = document.getElementById('myImage');
       image.src = "data:image/jpeg;base64," + imageData;
    };
    function onFail(message) {
      alert('Failed because: ' + message);
    }
}
/**************COMPARANDO DUAS FOTOS*********************/
deepai.setApiKey('6610da15-328f-47ea-833b-00ac80de28a7');
async function compare() {
  var resp = await deepai.callStandardApi("image-similarity", {
    image1: 'https://http2.mlstatic.com/D_NQ_NP_664865-MLB31366910008_072019-O.jpg',
    image2: window.link,
  });
  alert(resp.output.distance);
}
