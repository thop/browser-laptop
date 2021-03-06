const fakeElectron = {
  BrowserWindow: {
    getFocusedWindow: function () {
      return {
        id: 1
      }
    },
    getActiveWindow: function () {
      return {
        id: 1
      }
    }
  },
  ipcMain: {
    on: function () { },
    send: function () { }
  },
  ipcRenderer: {
    on: function () { },
    send: function () { },
    sendSync: function () { }
  },
  remote: {
    app: {
      on: function () {
      }
    },
    clipboard: {
      readText: function () { return '' }
    },
    getCurrentWindow: function () {
      return {
        on: () => {},
        isFocused: () => true,
        isFullScreen: () => false,
        isMaximized: () => false,
        webContents: {}
      }
    },
    Menu: {
      buildFromTemplate: (template) => {
        return require('./fakeElectronMenu')
      }
    }
  },
  app: {
    on: function () {
    },
    getPath: (param) => `${process.cwd()}/${param}`,
    getVersion: () => '0.14.0',
    setLocale: (locale) => {},
    exit: () => {}
  },
  clipboard: {
    writeText: function () {
    }
  },
  dialog: {
    showOpenDialog: function () { }
  },
  shell: {
    openExternal: function () {
    },
    showItemInFolder: function () {
    },
    openItem: function () {
    },
    beep: function () {
    },
    moveItemToTrash: function () {
    }
  },
  session: {
    defaultSession: {
      partition: 'default'
    }
  }
}

module.exports = fakeElectron
