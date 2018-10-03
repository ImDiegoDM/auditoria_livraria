# Gestão de Livros
<h3>Livro</h3>
<ul>
  <li>GET    /livros</li>
  <li>POST   /livros</li>
  <li>PUT    /livros/{idLivro}</li>
  <li>DELETE /livros/{idLivro}</li>
  <li>GET    /livros/{idLivro}</li>
  <li>GET    /livros/{idLivro}/autores</li>
  <li>GET    /livros/{idLivro}/editoras</li>
  <li>GET    /livros/{idLivro}/comentarios</li>
  <li>GET    /livros/p?nome={nome}</li>
</ul>

<h3>Autor<h3>
<ul>
  <li>GET    /autores</li>
  <li>POST   /autores</li>
  <li>PUT    /autores/{idAutor}</li>
  <li>DELETE /autores/{idAutor}</li>
  <li>GET    /autores/{idAutor}</li>
  <li>GET    /autores/{idAutor}/livros</li>
  <li>GET    /autores/{idAutor}/editoras</li>
  <li>GET    /autores/p?nome={nome}</li>
</ul>

<h3>Editora</h3
<ul>
  <li>GET    /editoras</li>
  <li>POST   /editoras</li>
  <li>PUT    /editoras/{idEditor}</li>
  <li>DELETE /editoras/{idEditor}</li>
  <li>GET    /editoras/{idEditor}</li>
  <li>GET    /editoras/{idEditor}/livros</li>
  <li>GET    /editoras/{idEditor}/autores</li>
  <li>GET    /editoras/p?nome={nome}</li>
</ul>

<h3>Cliente</h3>
<ul>
  <li>GET    /clientes</li>
  <li>POST   /clientes</li>
  <li>PUT    /clientes/{idCliente}</li>
  <li>DELETE /clientes/{idCliente}</li>
  <li>GET    /clientes/{idCliente}</li>
  <li>GET    /clientes/{idCliente}/pedidos</li>
  <li>GET    /clientes/p?nome={nome}</li>
</ul>

<h3>Carrinho de Compras</h3>
<ul>
  <li>POST   /carrinho/{idLivro}</li>
  <li>DELETE /carrinho/{idLivro}</li>
</ul>
  
<h3>Pedido</h3>
<ul>
  <li>POST /pedidos</li>
  <li>PUT  /pedidos/{idPedido}</li>
  <li>GET  /pedidos/{idCliente}</li>
  <li>GET  /pedidos/{idPedido}/cancelamentos</li>
  <li>GET  /pedidos/{idPedido}/situacoes</li>
  <li>GET  /pedidos/p?status={status}&valor={value}</li>
</ul>

https://app.swaggerhub.com/apis/weto/livros/1.0.0#/
