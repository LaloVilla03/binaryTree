let miArbol = new BinaryTree();

const btnAdd=document.getElementById("btnAdd");
btnAdd.addEventListener("click", ()=>{
  let cod = document.getElementById("txtCod").value;
  let nom = document.getElementById("txtNom").value;
  let prec = document.getElementById("txtPrec").value;
  let can = document.getElementById("txtCan").value;

  let producto = new Productos(cod,nom,prec,can);
  miArbol.agregar(producto);

  document.getElementById("txtCod").value="";
  document.getElementById("txtNom").value="";
  document.getElementById("txtPrec").value="";
  document.getElementById("txtCan").value="";

  detalles = document.getElementById("detalles");
  detalles.innerHTML += '<p>Se agregó el producto: "' + nom +'" </p>';
  console.log(miArbol);
});

const btnDel=document.getElementById("btnDel");
btnDel.addEventListener("click",()=>{
  document.getElementById("detalles").innerHTML="";
});

const btnFind=document.getElementById("btnFind");
btnFind.addEventListener("click", ()=>{
  let cod=document.getElementById("txtCod").value;
  let res=miArbol.buscar(cod);
  let detalles=document.getElementById("detalles");
  if (res==null){
    detalles.innerHTML+='<p>No existe el producto buscado</p>';
  }else{
    detalles.innerHTML+='<p>Si existe</p>' + res.infoHtml();
    document.getElementById("txtNom").value=res.nombre;
    document.getElementById("txtPrec").value=res.precio;
    document.getElementById("txtCan").value=res.cantidad;
  }
});

const btnInO=document.getElementById("btnInO");
btnInO.addEventListener("click", ()=>{
  let detalles = document.getElementById('detalles');
  detalles.innerHTML += '<h3>inOrder<h3>' + miArbol.inOrder();
});

const btnPreO=document.getElementById("btnPreO");
btnPreO.addEventListener("click",()=>{
  let detalles = document.getElementById('detalles');
  detalles.innerHTML += '<h3>PreOrder<h3>'+ miArbol.preOrder();
});

const btnPostO=document.getElementById("btnPostO");
btnPostO.addEventListener("click",()=>{
  let detalles = document.getElementById("detalles");
  detalles.innerHTML += '<h3>PostOrder<h3>' + miArbol.postOrder();
})