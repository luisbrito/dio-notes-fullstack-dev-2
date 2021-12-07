## Comandos Básicos

 - git init
 - git add (. *)
 - git commit -m "mensagem"
 - git push (Envia para o repositório remoto)
 - git pull (Traz do repositório remoto)

## Comandos Intermediários

### Editanto config
 - git config user.name "Nome do Usuário" (Configuração do repositório local)
 - git config -- global user.name "Nome do Usuário" (Configuração global **Todos Repositórios**)
 - git config user.email "seuemail@dominio.com.br" (Configuração do repositório local)
 - git config -- global user.email "seuemail@dominio.com.br" (Configuração global **Todos Repositórios**)

## Gerando e Adicionando um certificado SSH

 - ssh-keygen -t ed25519 -C "seuemail@dominio.com.br"
 - cd /c/Users/usuario/.ssh/
 - cat id_ed25519.pub
 - pwd 
 - eval $(ssh-agent -s)
 - ssh-add id_ed25519