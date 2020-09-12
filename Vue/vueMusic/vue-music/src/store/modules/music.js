import * as type from '../types'
import { findIndex } from '@/common/js/util'

const state = {
    playList: [],  //  播放列表  用来存 要播放的歌曲 
    currentIndex: -1,  //歌曲下标
    playing: false,
    fullScreen: false
}

const mutations = {
    [type.SET_PLAYLIST](state, playlist) {
        state.playList = playlist
    },
    [type.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
    },
    [type.SET_PLAYING](state, status) {
        state.playing = status
    },
    [type.SET_FULL_SCREEN](state, status) {
        state.fullScreen = status
    }
}

const getters = {
    currentSong: state => state.playList[state.currentIndex] || {}
}

const actions = {
    selectPlaySong({ commit, state }, song) {
        let playlist = state.playList.slice()
        let currentIndex = state.currentIndex

        // 查找当前播放列表中是否存在想要播放的这首歌
        let fpIndex = findIndex(playlist, song)
        // 如果已经包含这首歌
        if (fpIndex > -1) {
            currentIndex = fpIndex
        } else {
            playlist = [...playlist, song]
            currentIndex = playlist.length - 1
        }

        commit(type.SET_PLAYLIST, playlist)
        commit(type.SET_CURRENT_INDEX, currentIndex)
        commit(type.SET_PLAYING, true)
        commit(type.SET_FULL_SCREEN, true)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}