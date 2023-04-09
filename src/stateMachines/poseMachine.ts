import { createMachine } from 'xstate'

export default createMachine({
  states: {
    idle: {
      on: {
        KEY_W_DOWN: 'running',
        KEY_SPACE_DOWN: 'jumping',
        CLICK_WAVE: 'waving',
        CLICK_DANCE: 'dance',
        CLICK_SIT: 'sitting'
      }
    },
    running: {
      on: {
        KEY_W_UP: 'idle',
        KEY_SPACE_DOWN: 'jumping'
      }
    },
    waving: {
      on: {
        KEY_W_DOWN: 'running',
        OVER: 'idle'
      }
    },
    dance: {
      on: {
        KEY_W_DOWN: 'running',
        OVER: 'idle'
      }
    },
    sitting: {
      on: {
        KEY_W_DOWN: 'running',
        OVER: 'idle'
      }
    },
    jumping: {
      on: {
        LANDED: 'idle'
      },
      entry: 'enterJumping'
    }
  },
  initial: 'idle'
})
