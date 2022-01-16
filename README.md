# SpringReact

*Passo: preparação*
Dica: extensões do VS Code
Conferir Node (16 LTS) e Yarn:

node -v
yarn -v
Caso precise instalar o Yarn, faça o comando:
npm install --global yarn

*Passo: criar projeto ReactJS*
yarn create react-app frontend --template typescript
OU:
npx create-react-app frontend --template typescript

IMPORTANTE: deletar subpasta .git
Lembrete: ver extensões e arquivos ocultos


*Passo: criar projeto Spring Boot*
Criar projeto Spring Boot no Spring Initializr (site) com as seguintes dependências:

Web
JPA
H2
Postgres
Security

*Ajuste no arquivo pom.xml*:

<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-resources-plugin</artifactId>
	<version>3.1.0</version>
</plugin>

Botão direito no projeto -> Maven -> Update project (force update)
