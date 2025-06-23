export const CARD_TYPES = {
  CREATURE: 'creature',
  SPELL: 'spell',
  LAND: 'land',
  ENCHANTMENT: 'enchantment',
  ARTIFACT: 'artifact'
};

export const PHASES = {
  DRAW: 'draw',
  MAIN1: 'main1',
  COMBAT: 'combat',
  MAIN2: 'main2',
  END: 'end'
};

export const GAME_STATES = {
  MENU: 'menu',
  IN_GAME: 'in_game',
  PAUSED: 'paused',
  GAME_OVER: 'game_over'
};

export const PLAYER_ACTIONS = {
  PLAY_CARD: 'play_card',
  ATTACK: 'attack',
  BLOCK: 'block',
  ACTIVATE_ABILITY: 'activate_ability',
  PASS_TURN: 'pass_turn'
};

export const ZONES = {
  HAND: 'hand',
  BATTLEFIELD: 'battlefield',
  GRAVEYARD: 'graveyard',
  EXILE: 'exile',
  LIBRARY: 'library',
  LANDS: 'lands'
};

export const GAME_CONFIG = {
  STARTING_HEALTH: 20,
  STARTING_HAND_SIZE: 7,
  MAX_HAND_SIZE: 7,
  MAX_MANA: 10,
  TURN_TIME_LIMIT: 90, // segundos
  MIN_DECK_SIZE: 60,
  MAX_COPIES_PER_CARD: 4
};

export const CARD_RARITIES = {
  COMMON: 'common',
  UNCOMMON: 'uncommon',
  RARE: 'rare',
  MYTHIC: 'mythic'
};

export const MANA_COLORS = {
  WHITE: 'white',
  BLUE: 'blue',
  BLACK: 'black',
  RED: 'red',
  GREEN: 'green',
  COLORLESS: 'colorless'
};

export const ANIMATION_DURATIONS = {
  CARD_PLAY: 500,
  ATTACK: 800,
  DAMAGE: 300,
  HEAL: 400,
  DRAW: 200
};

export const UI_MESSAGES = {
  INVALID_PLAY: 'Não é possível jogar esta carta agora',
  INSUFFICIENT_MANA: 'Mana insuficiente',
  WRONG_PHASE: 'Ação não permitida nesta fase',
  GAME_WON: 'Você venceu!',
  GAME_LOST: 'Você perdeu!',
  TURN_PASSED: 'Turno passado'
};