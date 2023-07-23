import {PalleteLight} from './ColorPallete-light'
import {PalleteDark} from './ColorPallete-dark'

export enum ColorMode  {
    light = 'light',
    dark = 'dark',
}


export const getColor = (colorName: string, mode: ColorMode) => {
    type ObjectKey = keyof typeof PalleteLight | keyof typeof PalleteDark;

    switch(mode){
        case ColorMode.light:
            return PalleteLight[colorName as ObjectKey];
        case ColorMode.dark:
            return PalleteDark[colorName as ObjectKey];
        default:
            return PalleteDark[colorName as ObjectKey];

    }
}