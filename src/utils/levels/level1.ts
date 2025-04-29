  import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level1 = {
  size: 7,
  colorRegions: [
    ["A", "B", "B", "G", "G", "G", "G"],
    ["A", "B", "B", "G", "E", "E", "E"],
    ["A", "A", "B", "D", "D", "D", "E"],
    ["C", "A", "A", "A", "D", "D", "E"],
    ["C", "A", "A", "A", "A", "E", "E"],
    ["C", "A", "A", "A", "A", "F", "F"],
    ["C", "C", "A", "A", "A", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
};

export default level1;
