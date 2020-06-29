const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const APP_DIR = path.join(__dirname, 'setup','ConsultorioAyacucho');
const OUT_DIR = path.join(__dirname, 'setup');

const msi_creator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    description: 'Esta es aplicación administrativa para gestionar turnos',
    exe: 'ConsultorioAyacucho',
    name: 'Consultorio Ayaucho',
    manufacturer: 'Agustín La Valla Web Developer',
    version: '1.0.0',

    ui: {
        chooseDirectory: true
    },
});

async function createInstaller() {
    await msi_creator.create();
    await msi_creator.compile();
};

createInstaller();
