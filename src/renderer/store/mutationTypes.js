export const Video = {
  // error state
  ERROR_CODE_UPDATE: 'ERROR_CODE_UPDATE',
  ERROR_MESSAGE_UPDATE: 'ERROR_MESSAGE_UPDATE',
  // network state
  ID_UPDATE: 'ID_UPDATE',
  SRC_UPDATE: 'SRC_UPDATE',
  MEDIA_HASH_UPDATE: 'MEDIA_HASH_UPDATE',
  CURRENT_SRC_UPDATE: 'CURRENT_SRC_UPDATE',
  NETWORK_STATE_UPDATE: 'NETWORK_STATE_UPDATE',
  BUFFERED_UPDATE: 'BUFFERED_UPDATE',
  CAN_PLAY_TYPE_UPDATE: 'CAN_PLAY_TYPE_UPDATE',
  CROSS_ORIGIN_UPDATE: 'CROSS_ORIGIN_UPDATE',
  PRELOAD_UPDATE: 'PRELOAD_UPDATE',
  // ready state
  READY_STATE_UPDATE: 'READY_STATE_UPDATE',
  SEEKING_UPDATE: 'SEEKING_UPDATE',
  // playback state
  DURATION_UPDATE: 'DURATION_UPDATE',
  PAUSED_UPDATE: 'PAUSED_UPDATE',
  ENDED_UPDATE: 'ENDED_UPDATE',
  PLAYED_UPDATE: 'PLAYED_UPDATE',
  SEEKABLE_UPDATE: 'SEEKABLE_UPDATE',
  CURRENT_TIME_UPDATE: 'CURRENT_TIME_UPDATE',
  DEFAULT_PLAYBACK_RATE_UPDATE: 'DEFAULT_PLAYBACK_RATE_UPDATE',
  RATE_UPDATE: 'RATE_UPDATE',
  AUTOPLAY_UPDATE: 'AUTOPLAY_UPDATE',
  LOOP_UPDATE: 'LOOP_UPDATE',
  // controls
  CONTROLS_UPDATE: 'CONTROLS_UPDATE',
  VOLUME_UPDATE: 'VOLUME_UPDATE',
  MUTED_UPDATE: 'MUTED_UPDATE',
  DEFAULT_MUTED_UPDATE: 'DEFAULT_MUTED_UPDATE',
  // meta info
  INTRINSIC_WIDTH_UPDATE: 'INTRINSIC_WIDTH_UPDATE',
  INTRINSIC_HEIGHT_UPDATE: 'INTRINSIC_HEIGHT_UPDATE',
  COMPUTED_WIDTH_UPDATE: 'COMPUTED_WIDTH_UPDATE',
  COMPUTED_HEIGHT_UPDATE: 'COMPUTED_HEIGHT_UPDATE',
  RATIO_UPDATE: 'RATIO_UPDATE',
  DELAY_UPDATE: 'DELAY_UPDATE',
  // tracks
  AUDIO_TRACK_LIST_UPDATE: 'AUDIO_TRACK_LIST_UPDATE',
  VIDEO_TRACK_LIST_UPDATE: 'VIDEO_TRACK_LIST_UPDATE',
  TEXT_TRACK_LIST_UPDATE: 'TEXT_TRACK_LIST_UPDATE',
  PLAYINGLIST_RATE_UPDATE: 'PLAYINGLIST_RATE_UPDATE',
  DEFAULT_DIR_UPDATE: 'DEFAULT_DIR_UPDATE',
  SNAPSHOT_SAVED_PATH_UPDATE: 'SNAPSHOT_SAVED_PATH_UPDATE',
};

export const Subtitle = {
  LOADING_STATES_UPDATE: 'LOADING_STATE_UPDATE',
  VIDEO_SUBTITLE_MAP_UPDATE: 'VIDEO_SUBTITLE_MAP_UPDATE',
  DURATIONS_UPDATE: 'DURATIONS_UPDATE',
  NAMES_UPDATE: 'NAMES_UPDATE',
  LANGUAGES_UPDATE: 'LANGUAGES_UPDATE',
  FORMATS_UPDATE: 'FORMATS_UPDATE',
  TYPES_UPDATE: 'TYPES_UPDATE',
  RANKS_UPDATE: 'RANKS_UPDATE',
  CURRENT_FIRST_SUBTITLE_ID_UPDATE: 'CURRENT_FIRST_SUBTITLE_ID_UPDATE',
  CURRENT_SECOND_SUBTITLE_ID_UPDATE: 'CURRENT_SECOND_SUBTITLE_ID_UPDATE',
  RESET_SUBTITLES: 'RESET_SUBTITLES',
  SUBTITLE_DELAY_UPDATE: 'SUBTITLE_DELAY_UPDATE',
  SUBTITLE_SCALE_UPDATE: 'SUBTITLE_SCALE_UPDATE',
  SUBTITLE_STYLE_UPDATE: 'SUBTITLE_STYLE_UPDATE',
  SUBTITLE_SIZE_UPDATE: 'SUBTITLE_SIZE_UPDATE',
  LAST_SUBTITLE_SIZE_UPDATE: 'LAST_SUBTITLE_SIZE_UPDATE',
  SUBTITLE_TOP_UPDATE: 'SUBTITLE_TOP_UPDATE',
  CURRENT_SUBTITLE_REMOVE: 'CURRENT_SUBTITLE_REMOVE',
  SUBTITLE_TYPE_UPDATE: 'SUBTITLE_TYPE_UPDATE',
  SECONDARY_SUBTITLE_ENABLED_UPDATE: 'SECONDARY_SUBTITLE_ENABLED_UPDATE',
  SUBTITLE_SETTINGS_TYPE_UPDATE: 'SUBTITLE_SETTINGS_TYPE_UPDATE',
};

export const newSubtitle = {
  setMediaHash: 'SET_MEDIA_HASH',
  setId: 'SET_ID',
  setDisplaySource: 'SET_DISPLAY_SOURCE',
  setRealSource: 'SET_REAL_SOURCE',
  setFormat: 'SET_FORMAT',
  setLanguage: 'SET_LANGUAGE',
  setDelay: 'SET_DELAY',
  setHash: 'SET_HASH',
  setCanCache: 'SET_CAN_CACHE',
  setCanUpload: 'SET_CAN_UPLOAD',
  setFullyRead: 'SET_FULLY_READ',
  setAutoUploaded: 'SET_AUTO_UPLOADED',
  setPlayedTime: 'SET_PLAYED_TIME',
};

export const SubtitleManager = {
  setPrimarySubtitleId: 'SET_PRIMARY_SUBTITLE_ID',
  setSecondarySubtitleId: 'SET_PSECONDARY_SUBTITLE_ID',
  setNotSelectedSubtitle: 'SET_NOT_SELECTED_SUBTITLE',
  setMediaHash: 'SET_MEDIA_HASH',
  setIsRefreshing: 'SET_IS_REFRESHING',
  addSubtitleId: 'ADD_SUBTITLE_ID',
  deleteSubtitleId: 'DELETE_SUBTITLE_ID',
  setPrimaryDelay: 'SET_PRIMARY_DELAY',
  setSecondaryDelay: 'SET_SECONDARY_DELAY',
};

export const Input = {
  MOUSEMOVE_CLIENT_POSITION_UPDATE: 'MOUSEMOVE_CLIENT_POSITION_UPDATE',
  MOUSEMOVE_COMPONENT_NAME_UPDATE: 'MOUSEMOVE_COMPONENT_NAME_UPDATE',
  PRESSED_MOUSE_BUTTON_NAMES_UPDATE: 'PRESSED_MOUSE_BUTTON_NAMES_UPDATE',
  MOUSEDOWN_COMPONENT_NAME_UPDATE: 'MOUSEDOWN_COMPONENT_NAME_UPDATE',
  MOUSEUP_COMPONENT_NAME_UPDATE: 'MOUSEUP_COMPONENT_NAME_UPDATE',
  PRESSED_KEYBOARD_CODES_UPDATE: 'PRESSED_KEYBOARD_CODES_UPDATE',
  WHEEL_COMPONENT_NAME_UPDATE: 'WHEEL_COMPONENT_NAME_UPDATE',
  WHEEL_TIMESTAMP_UPDATE: 'WHEEL_TIMESTAMP_UPDATE',
  WHEEL_DIRECTION_UPDATE: 'WHEEL_DIRECTION_UPDATE',
};

export const AudioTranslate = {
  AUDIO_TRANSLATE_SAVE_KEY: 'AUDIO_TRANSLATE_SAVE_KEY',
  AUDIO_TRANSLATE_SELECTED_UPDATE: 'AUDIO_TRANSLATE_SELECTED_UPDATE',
  AUDIO_TRANSLATE_SHOW_MODAL: 'AUDIO_TRANSLATE_SHOW_MODAL',
  AUDIO_TRANSLATE_HIDE_MODAL: 'AUDIO_TRANSLATE_HIDE_MODAL',
  AUDIO_TRANSLATE_UPDATE_PROGRESS: 'AUDIO_TRANSLATE_UPDATE_PROGRESS',
  AUDIO_TRANSLATE_UPDATE_ESTIMATE_TIME: 'AUDIO_TRANSLATE_UPDATE_ESTIMATE_TIME',
  AUDIO_TRANSLATE_UPDATE_STATUS: 'AUDIO_TRANSLATE_UPDATE_STATUS',
  AUDIO_TRANSLATE_UPDATE_LAST_AUDIO_LANGUAGE: 'AUDIO_TRANSLATE_UPDATE_LAST_AUDIO_LANGUAGE',
  AUDIO_TRANSLATE_SHOW_BUBBLE: 'AUDIO_TRANSLATE_SHOW_BUBBLE',
  AUDIO_TRANSLATE_HIDE_BUBBLE: 'AUDIO_TRANSLATE_HIDE_BUBBLE',
  AUDIO_TRANSLATE_BUBBLE_INFO_UPDATE: 'AUDIO_TRANSLATE_BUBBLE_INFO_UPDATE',
  AUDIO_TRANSLATE_BUBBLE_CALLBACK: 'AUDIO_TRANSLATE_BUBBLE_CALLBACK',
  AUDIO_TRANSLATE_BUBBLE_CANCEL_CALLBACK: 'AUDIO_TRANSLATE_BUBBLE_CANCEL_CALLBACK',
  AUDIO_TRANSLATE_MODAL_HIDE_CALLBACK: 'AUDIO_TRANSLATE_MODAL_HIDE_CALLBACK',
  AUDIO_TRANSLATE_RECOVERY: 'AUDIO_TRANSLATE_RECOVERY',
  AUDIO_TRANSLATE_UPDATE_FAIL_BUBBLE_ID: 'AUDIO_TRANSLATE_UPDATE_FAIL_BUBBLE_ID',
  AUDIO_TRANSLATE_UPDATE_FAIL_TYPE: 'AUDIO_TRANSLATE_UPDATE_FAIL_TYPE',
};

export const Browsing = {
  INITIAL_URL_UPDATE: 'INITIAL_URL_UPDATE',
  RECORD_URL_UPDATE: 'RECORD_URL_UPDATE',
  BARRAGE_OPEN_UPDATE: 'BARRAGE_OPEN_UPDATE',
  IS_PIP_UPDATE: 'IS_PIP_UPDATE',
  PIP_MODE_UPDATE: 'PIP_MODE_UPDATE',
  IS_HISTORY_UPDATE: 'IS_HISTORY_UPDATE',
  IS_ERROR_UPDATE: 'IS_ERROR_UDATE',
  CURRENT_CHANNEL_UPDATE: 'CURRENT_CHANNEL_UPDATE',
  PIP_CHANNEL_UPDATE: 'PIP_CHANNEL_UPDATE',
};

export const UserInfo = {
  UPDATE_USER_INFO: 'UPDATE_USER_INFO',
  UPDATE_USER_TOKEN: 'UPDATE_USER_TOKEN',
  UPDATE_SIGN_IN_CALLBACK: 'UPDATE_SIGN_IN_CALLBACK',
  UPDATE_PREMIUM: 'UPDATE_PREMIUM',
};
