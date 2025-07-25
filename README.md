### **Territory Manager (TM)**
**Um aplicativo de desktop para gestão e visualização de territórios geográficos, construído com Electron e tecnologias web.**

<img width="1366" height="768" alt="SCREENSHOT" src="https://github.com/user-attachments/assets/5f2e40f0-8ab4-4e58-80ec-49c275559a05" />


### **📌 Sobre o Projeto**
O Territory Manager é uma ferramenta de desktop projetada para simplificar a criação, organização e visualização de mapas e territórios. Ideal para planeamento de vendas, logística, estudos geográficos ou qualquer atividade que exija a delimitação de áreas em um mapa.

Construído como um aplicativo de desktop a partir de uma base web, ele oferece uma experiência rápida e focada, sem a necessidade de um navegador.

### **✨ Funcionalidades Principais**
- **Gestão de Territórios e Mapas**: Crie e organize territórios. Adicione múltiplos mapas (grupos de polígonos) a cada território com cores personalizadas para uma melhor organização visual.

- **Ferramentas de Desenho**: Desenhe polígonos e retângulos diretamente no mapa com as ferramentas da biblioteca Leaflet.draw.

- **Importação e Exportação**:

    - **Importe ficheiros** `.KML` e `.KMZ` existentes para dentro dos seus territórios.
      <img width="384" height="112" alt="SCREENSHOT 2" src="https://github.com/user-attachments/assets/53ea9402-5dc4-4223-904a-9121d6d2ad4a" />


    - **Exporte mapas individuais** para os formatos `.PNG` (imagem) ou `.KMZ`.
      <img width="1366" height="768" alt="SCREENSHOT 3" src="https://github.com/user-attachments/assets/88b9b842-f8f3-4919-8163-956597bd46f6" />
           <img width="800" height="600" alt="MAP_1" src="https://github.com/user-attachments/assets/04594951-ff9e-45bf-97b3-508cea5da3a8" />



- **Salvar e Carregar Sessão**: Exporte todo o seu trabalho (todos os territórios e mapas) para um único ficheiro `.json` e carregue-o posteriormente, garantindo a segurança e portabilidade dos seus dados.

- **Tema Claro e Escuro**: Alterne entre os temas para uma visualização mais confortável a qualquer hora do dia.

- **Pesquisa Integrada**: Encontre endereços e locais rapidamente com a barra de pesquisa com sugestões automáticas.
  <img width="512" height="65" alt="SCREENSHOT 4" src="https://github.com/user-attachments/assets/d2d79988-0b77-47b1-a7d8-ae3b3e117f9a" />

- **Interface Intuitiva**: Organize os seus mapas com uma interface de arrastar e soltar e edite nomes e cores facilmente.

### **🚀 Como Usar (Instalação)**

Para usar o aplicativo, não é necessário instalar nada. Siga estes passos:

Vá para a secção de Releases do projeto.

Baixe o ficheiro `.zip` da versão mais recente correspondente ao seu sistema operativo (ex: tm-desktop-app-win32-x64.zip).

Descompacte a pasta.

Execute o ficheiro Territory Manager.exe (ou o nome do executável correspondente).

### **💻 Para Desenvolvedores (Executar Localmente)**
Se desejar executar o projeto localmente para fazer modificações ou contribuir, siga os passos abaixo.

Pré-requisitos:

Node.js e npm instalados.

Passos:

Clone o repositório:

`git clone https://github.com/Bernardo-BR/TerritoryCreator.git`

Navegue até a pasta do projeto:

`cd tm-desktop-app`

Instale as dependências:

`npm install`

Execute a aplicação em modo de desenvolvimento:

`npm start`

Para empacotar e criar o executável:

`npm run package`

Os ficheiros executáveis serão gerados na pasta `dist/.`

### **🛠️ Tecnologias Utilizadas**
- **Electron**: Framework para criar aplicativos de desktop com JavaScript, HTML e CSS.

- **Leaflet.js**: Biblioteca de mapas interativos.

- **Leaflet.draw**: Plugin para ferramentas de desenho no Leaflet.

- **Tailwind CSS**: Framework de CSS para estilização.

- **Node.js**: Ambiente de execução para JavaScript no servidor.
