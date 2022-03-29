import Icon from 'react-native-vector-icons/MaterialIcons';
import {SFSymbols} from 'src/assets/symbols/SFSymbols';
import {Colors, PlatformColorsAndroid} from '@components/common/color';
import {isIos} from '@components/common/commonConst';

/**
 * if using different icons between platform
 *
 * @param sfSymbol
 * @param sfSelectedSymbol
 * @param androidIcon
 * @param androidSize
 * @param androidColor
 * @returns
 */
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
