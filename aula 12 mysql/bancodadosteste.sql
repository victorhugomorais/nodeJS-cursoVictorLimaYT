CREATE TABLE usuarios(
nome VARCHAR(60),
email VARCHAR(60),
idade INT
);
//copia e cola o codigo acima no cmd com mysql

INSERT INTO usuarios(nome, email, idade) VALUES(
"Victor Morais",
"victormorais@id.uff.br",
23
);
//copia e cola o codigo acima no cmd com mysql

INSERT INTO usuarios(nome, email, idade) values(
"Thaís Mariani",
"thaismarianibraz@kindle.com",
22
);

INSERT INTO usuarios(nome, email, idade) values(
"Leandro Bucci",
"leandrobucci@id.uff.br",
22
);

INSERT INTO usuarios(nome, email, idade) values(
"Marco Tulio Morais",
"matoturvo@gmail.com",
23
);

INSERT INTO usuarios(nome, email, idade) values(
"Lucas Lima",
"lucaslima@id.uff.br",
23
);
//NUNCA USE DELETE FROM nome_tabela -> isso vai excluir TUDO
DELETE FROM usuarios WHERE nome = "lucas lima";

//sobre update para atualizar os dados/registros de uma tabela
insert into usuarios(nome, email, idade) values(
"exemplo",
"exemplo@gmail.com",
25
);

update usuarios set nome = "novo nome", email = "novo@email.com", idade = 45 where nome = "exemplo";