import { action } from 'typesafe-actions'
import { TypesTeam, arrayTeam } from './types'

export const getTeam = (payload: arrayTeam) => action(TypesTeam.GET_TEAM, payload)
export const addTeam = (payload: arrayTeam) => action(TypesTeam.ADD_TEAM, payload)
export const deleteTeam = (payload: any) => action(TypesTeam.DELETE_TEAM, payload)
export const editTeam = (payload: arrayTeam) => action(TypesTeam.EDIT_TEAM, payload)