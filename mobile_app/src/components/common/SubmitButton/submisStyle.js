import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 40,
    width: 200,
    paddingHorizontal: 4,
    marginVertical: 60,
    borderRadius: 500,
    left: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: -20
  },

  loaderSection: {
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
