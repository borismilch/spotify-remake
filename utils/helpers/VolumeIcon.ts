import { ImVolumeHigh, ImVolumeMedium, ImVolumeLow, ImVolumeMute2 } from 'react-icons/im'

export const getVolumeIcon = (volume: number) => {
  return volume === 0 ? ImVolumeMute2 : volume < 30 ? ImVolumeLow : volume < 70 ? ImVolumeMedium : ImVolumeHigh
}