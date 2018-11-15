// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { registerCustomIconType, getIconType } from 'react-native-elements'

// Generate required css
import Entypo from 'react-native-vector-icons/Fonts/Entypo.ttf';
import EvilIcons from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import Feather from 'react-native-vector-icons/Fonts/Feather.ttf';
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Foundation from 'react-native-vector-icons/Fonts/Foundation.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import Octicons from 'react-native-vector-icons/Fonts/Octicons.ttf';
import SimpleLineIcons from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import Zocial from 'react-native-vector-icons/Fonts/Zocial.ttf';
import GuldTTF from '../../assets/images/font/font/guld.ttf';

// get fontello config of guld font
import fontelloConfig from '../../assets/images/font/config.json';
const GuldFont = createIconSetFromFontello(fontelloConfig, 'guld', GuldTTF);
registerCustomIconType('guld', GuldFont)

const fonts = { 
    'Entypo': { url: Entypo, family:'Entypo'},
    'EvilIcons': { url: EvilIcons, family:'EvilIcons'},
    'Feather': { url: Feather, family:'Feather'},
    'FontAwesome': { url: FontAwesome, family:'FontAwesome'},
    'Foundation': { url: Foundation, family:'fontcustom'},
    'Guld': { url: GuldTTF, family:'Guld'},
    'Ionicons': { url: Ionicons, family:'Ionicons'},
    'MaterialCommunityIcons': { url: MaterialCommunityIcons, family:'Material Design Icons'},
    'MaterialIcons': { url: MaterialIcons, family:'Material Icons'},
    'Octicons': { url: Octicons, family:'Octicons'},
    'SimpleLineIcons': { url: SimpleLineIcons, family:'simple-line-icons'},
    'Zocial': { url: Zocial, family:'zocial'},
}

// Create stylesheet
const createStyleSheet = (iconFontStyles) => {
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
    } else {
    style.appendChild(document.createTextNode(iconFontStyles));
    }

    // Inject stylesheet
    document.head.appendChild(style);
}

export default {
    load(){
        fontsToLoad = Object.keys(fonts)
        styleString = fontsToLoad.reduce((str, font)=> str + `
            @font-face {
                src: url(${fonts[font].url});
                font-family: ${fonts[font].family};
                }
                `,'')
        registerCustomIconType('guld', GuldFont)
        createStyleSheet(styleString)
    },
    'Guld': GuldFont,
    'Icon': Icon
}
