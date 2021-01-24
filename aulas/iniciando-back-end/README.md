# Recuperação de senha

**Requesitos funcionais**

 - O usuário deve poder recuperar sua senha informando o seu e-mail;
 - O usuário deve receber um e-mail com instruções de recuperação de senha;
 - O usuário deve poder resetar sua senha;

**Requesitos não-funcionais**

 - Utilizar Mailtrap para testar envios em ambiente de dev;
 - Utilizar o Amazon SES para envios em produção;
 - O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de negócio**

 - O link enviado por email para resetar a senha, deve expirar em 2h;
 - O usuário precisar confirmar a nova senha;

# Atualização de perfil

**RF**

 - O usuário deve pode atualiar seu nome,email e senha;

**RNF**

-

**RN**



# Painel do prestador

# Agendamento de serviços

Obs: a regra de negócio deve estar atribuída a algum requisito funcional
