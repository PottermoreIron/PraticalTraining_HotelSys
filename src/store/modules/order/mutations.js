import {
  CHOOSE_DATE,
  CHOOSE_DATE_ONE,
  CHOOSE_DATE_TWO,
} from "./mutation-types";
export default {
  [CHOOSE_DATE](state, data) {
    state.oStartDate = data[0];
    state.oEndDate = data[1];
  },
  [CHOOSE_DATE_ONE](state, data) {
    state.oStartDate = data;
  },
  [CHOOSE_DATE_TWO](state, data) {
    state.oEndDate = data;
  },
};
