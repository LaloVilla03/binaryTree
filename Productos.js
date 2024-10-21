class Productos{
  constructor (nombre, codigo, precio, cantidad){
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
    this.cantidad = cantidad;
    this.hijoIzquierdo = null;
    this.hijoDerecho = null;
  }

    infoHtml() {
      return `<div><p>Codigo ${this.codigo}:(${this.cantidad}) ${this.nombre} $ ${this.precio}</p></div>`;
  }
}

class BinaryTree{
  constructor(){
    this.raiz=null;
  }
  agregar(nuevo){
    if (this.raiz==null){
      this.raiz = nuevo;
    }else 
    this._agregate(nuevo,this.raiz);
  }
  _agregate(nuevo, nodox){
    if (nuevo.codigo < nodox.codigo){
      if (nodox.hijoIzquierdo == null){
        nodox.hijoIzquierdo = nuevo;
      }else 
          this._agregate(nuevo, nodox.hijoIzquierdo);
    }else 
    if (nodox.hijoDerecho == null){
      nodox.hijoDerecho = nuevo;
    }else 
    this._agregate(nuevo, nodox.hijoDerecho);
    
  }

  inOrder(){
    if (this.raiz == null){
      return "";
    }else
    return this._inOrderRec(this.raiz);
  }

  _inOrderRec(nodox){
    let info = "";
    if (nodox.hijoIzquierdo != null){
      info += this._inOrderRec(nodox.hijoIzquierdo)+"-";
    }info += nodox.codigo;
    if (nodox.hijoDerecho != null){
      info += "-" + this._inOrderRec(nodox.hijoDerecho); 
    }
    return info;
  }
  
  preOrder(){
    if (this.raiz == null){
      return "";
    }else
    return this._preOrderRec(this.raiz);
  }

  _preOrderRec(nodox){
    let info= nodox.codigo;
    if (nodox.hijoIzquierdo != null){
      info += "-" + this._preOrderRec(nodox.hijoIzquierdo);
    }
    if (nodox.hijoDerecho != null){
      info += "-" + this._preOrderRec(nodox.hijoDerecho);
    }
    return info;
  }

  postOrder(){
    if(this.raiz==null){
      return "";
    }else
      return this._postOrderRec(this.raiz);
    
}

_postOrderRec(nodox){
    let info="";
    if(nodox.hijoIzquierdo!=null){
      info+=this._postOrderRec(nodox.hijoIzquierdo)+"-";
    }
    if(nodox.hijoDerecho!=null){
      info+=this._postOrderRec(nodox.hijoDerecho)+"-";
    }
    info+=nodox.codigo;
    return info;
  }

  buscar(codigo){
      let temp = this.raiz;
      while (temp != null){
        if (codigo == temp.codigo){
          return temp;
        }else{
          if (codigo < temp.codigo){
            temp = temp.hijoIzquierdo;
          }else{
            temp = temp.hijoDerecho;
          }
        }
      }
      return null;
  }
}