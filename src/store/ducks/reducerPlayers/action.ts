import { action } from 'typesafe-actions'
import { TypesPlayers, ArrayPlayers } from './types'

export const getPlayers = (payload: ArrayPlayers) => action(TypesPlayers.GET_PLAYER, payload)