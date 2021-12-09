import {Colors, PlatformColorsAndroid} from '@core/common/color';
import {isIos} from '@core/common/commonConsts';
import {SFSymbols} from '@core/symbols/SFSymbols';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
