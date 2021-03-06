INSERT INTO QUESTION (content) VALUES ('Em javascript, qual a diferença entre Set e Map?');
INSERT INTO QUESTION (content) VALUES ('O que é closure em javascript?');
INSERT INTO QUESTION (content) VALUES ('No CSS, qual a diferença entre pseudo-classes e pseudo-elementos?');
INSERT INTO QUESTION (content) VALUES ('Quais tags HTML são usadas para exibir os dados na forma tabular?');
INSERT INTO QUESTION (content) VALUES ('Qual a principal diferença entre CSS Grid e Flexbox?');
INSERT INTO ANSWER (content,question,status) VALUES ('Map e Set são similares a Objects onde ambos deixam adicionar chaves para valores, recuperar estes valores, apagar chaves, e detectar quando algo foi adicionado em uma chave.',1,0);
INSERT INTO ANSWER (content,question,status) VALUES ('Map são coleções ordenadas de pares chave-valor, e Set são coleções de valores únicos.',1,1);
INSERT INTO ANSWER (content,question,status) VALUES ('Set são coleções ordenadas de pares chave-valor e Map, são coleções de valores únicos.',1,0);
INSERT INTO ANSWER (content,question,status) VALUES ('Map e Set são bastante semelhantes, inclusive, ambos aceitam valores dublicados',1,0);
INSERT INTO ANSWER (content,question,status) VALUES ('Um closure é uma função que perde a estrutura do ambiente — ou escopo léxico — em que ela foi criada',2,0);
INSERT INTO ANSWER (content,question,status) VALUES ('Um closure é como uma função é conhecida quando o acesso ao escopo pai é perdido depois que a função pai foi fechada.',2,0);
INSERT INTO ANSWER (content,question,status) VALUES ('Um closure é uma função que tem acesso ao escopo pai, somente enquanto a função pai está sendo executada.',2,0);
INSERT INTO ANSWER (content,question,status) VALUES ('Um closure é uma função que tem acesso ao escopo pai, mesmo depois que a função pai foi fechada.',2,1);
INSERT INTO ANSWER (content,question,status) VALUES ('Uma pseudo-classe é uma palavra-chave adicionada a seletores que especifica um estado especial do elemento selecionado. (ex. :hover). Já um pseudo-elemento é uma palavra-chave adicionada a um seletor que permite que você estilize uma parte específica do elemento selecionado. (ex. ::first-line)',3,1);
INSERT INTO ANSWER (content,question,status) VALUES ('Geralmente uma pseudo-classe possui o prefixo "::", já o pseudo-elemento possui ":". ',3,0);
INSERT INTO ANSWER (content,question,status) VALUES ('Diferentemente do pseudo-elemento, as pseudo-classes criam efetivamente novos elementos que não são especificados na marcação do documento e podem ser manipulados como um elemento regular',3,0);
INSERT INTO ANSWER (content,question,status) VALUES ('Diferentemente da pseudo-classe, um pseudo-elemento CSS é uma palavra-chave adicionada a seletores que especifica um estado especial do elemento selecionado. Por exemplo, :hover ',3,0);
INSERT INTO ANSWER (content,question,status) VALUES ('<ol>, <li>',4,0);
INSERT INTO ANSWER (content,question,status) VALUES ('<grid>, <row>, <col>',4,0);
INSERT INTO ANSWER (content,question,status) VALUES ('<table>, <tr>, <td>',4,1);
INSERT INTO ANSWER (content,question,status) VALUES ('<ul> <li>',4,0);
INSERT INTO ANSWER (content,question,status) VALUES ('O Grid é usado para projetar layouts unidimensionais simplificados, com uma disposição em linha reta. Já o flexbox é destinado à criação de layouts bidimensionais de complexidade maior — ideal para contrução de layouts.',5,0);
INSERT INTO ANSWER (content,question,status) VALUES ('O Flexbox é usado para projetar layouts unidimensionais simplificados, com uma disposição em linha reta, e é mais indicado para os componentes. Já o CSS grid é destinado à criação de layouts bidimensionais de complexidade maior — é ideal para organizar a estrutura de um esquema com elementos de nível mais elevado.',5,1);
INSERT INTO ANSWER (content,question,status) VALUES ('O Flexbox por sua vez cria um layout bidirecional, você consegue definir a posição dos elementos em linhas e colunas ao mesmo tempo. Enquanto o Grid depende da aplicação de propriedades nos filhos para criar layouts com elementos de tamanhos diversos',5,0);
INSERT INTO ANSWER (content,question,status) VALUES ('No geral, se o objetivo é que os elementos estejam igualmente espaçados ou alinhados independente do tamanho deles, usa-se Grid. Se eu quero criar um layout e colocar coisas nele, usa-se flexbox."',5,0);