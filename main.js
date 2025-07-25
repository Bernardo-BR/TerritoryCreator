// Importa os módulos necessários do Electron
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Função para criar a janela principal da aplicação
function createWindow() {
  // Cria uma nova janela do navegador.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Opcional, para scripts mais seguros
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'icon.png') // Opcional: adicione um ícone para o app
  });

  // Carrega o arquivo index.html na janela.
  mainWindow.loadFile('index.html');

  // Opcional: Abre as ferramentas de desenvolvedor (como o "Inspecionar Elemento" do Chrome)
  // mainWindow.webContents.openDevTools();
}

// Este método será chamado quando o Electron terminar a inicialização
// e estiver pronto para criar janelas do navegador.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // No macOS, é comum recriar uma janela no aplicativo quando o
    // ícone do dock é clicado e não há outras janelas abertas.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Encerra o aplicativo quando todas as janelas forem fechadas, exceto no macOS.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
