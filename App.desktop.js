import home from 'user-home';
import path from 'path';
import { getName } from 'guld-user';
import React, { Component } from 'react';
import {
  App,
  Box,
  Form,
  Menu,
  Window,
  TextInput,
  Picker,
  Button,
  Text,
  render
} from 'proton-native';
import HybridApp from './src/App'
import SysTray from 'systray';
import nodefs from 'fs';

const systray = new SysTray({
  menu: {
    // you should using .png icon in macOS/Linux, but .ico format in windows
    icon: new Buffer(nodefs.readFileSync(path.join(home, 'Pictures', 'guld', 'logo', 'favicon.png'))).toString('base64'),
    tooltip: 'Tips',
    items: [
      {
        title: 'Item',
        tooltip: 'Item Tooltip',
        enabled: true,
      },
      {
        title: 'Quit',
        tooltip: 'bb',
        enabled: true,
      },
    ],
  },
  debug: false,
  copyDir: true,
});

systray.onClick(action => {
  if (action.seq_id === 0) {
    console.log('Hi!');
  } else if (action.seq_id === 1) {
    systray.kill();
  }
});

const stop = () => {
  systray.kill(false);
};


class DesktopApp extends Component {
  render() {
    return (
      <App onShouldQuit={stop}>
        <Menu label="File">
          <Menu.Item type="Quit">Quit</Menu.Item>
        </Menu>
        <Menu label="Options">
          <Menu.Item>Generate Key</Menu.Item>
          <Menu.Item>Import Key</Menu.Item>
          <Menu.Item>Export Key</Menu.Item>
        </Menu>
        <Window
          title="Guld"
          size={{ h: 500, w: 500 }}
          menuBar={true}
          margined
        >
          <Box padded>
            <HybridApp />
          </Box>
        </Window>
      </App>
    );
  }
}

render(<DesktopApp />);
