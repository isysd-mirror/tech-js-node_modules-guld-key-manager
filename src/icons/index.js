import { registerCustomIconType } from 'react-native-elements'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/images/font/config.json';
import GuldTTF from '../../assets/images/font/font/guld.ttf';
const GuldFont = createIconSetFromFontello(fontelloConfig, 'Guld', GuldTTF);
registerCustomIconType('guld', GuldFont)

export default {
    load(){}
}
