import { TouchableOpacity, View } from 'react-native';
import { GameController } from 'phosphor-react-native'
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { Text } from 'react-native'
import { styles } from './styles';

export interface DuoCardProps {
  id: string,
  hourEnd: string,
  hourStart: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string[];
  yearsPlaying: number,
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Name'
        value={data.name}

      />

      <DuoInfo
        label='Years Playing'
        value={`${data.yearsPlaying} years`}

      />

      <DuoInfo
        label='Available'
        value={`${data.weekDays.length} days \u2022 ${data.hourStart} - ${data.hourEnd}`}

      />

      <DuoInfo
        label='Voice Chat'
        value={data.useVoiceChannel ? "YES" : "NO"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}

      />
      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <Text style={styles.buttonTitle}>
          Connect
        </Text>

      </TouchableOpacity>

    </View>
  );
}