import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, PlatformColorsAndroid} from '@common/color';
import {isIos} from '@common/commonConsts';
import {SFSymbols} from 'src/assets/symbols/SFSymbols';

export function getPlatformTabsIcon(
  sfSymbol?: SFSymbols,
  sfSelectedSymbol?: SFSymbols,
  androidIcon?: string,
  androidSize?: number,
  androidColor?: Colors | PlatformColorsAndroid,
) {
  if (isIos) {
    return {
      sfSymbol,
      sfSelectedSymbol,
    };
  } else if (androidIcon) {
    return {
      icon: Icon.getImageSourceSync(androidIcon, androidSize, androidColor),
    };
  } else {
    return undefined;
  }
}
