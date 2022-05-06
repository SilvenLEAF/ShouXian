export type userRankType = 'Seedling' | 'Sprout' | 'Sapling' | 'Mature Tree' | 'Old Tree' | 'Snag' | 'Gajumaru' | 'Rong Shu' | 'Mei Gui Hua';
export const userRanks: userRankType[] = [
  'Seedling',
  'Sprout',
  'Sapling',
  'Mature Tree',
  'Old Tree',
  'Gajumaru',
  'Rong Shu',
  'Mei Gui Hua',
]

export const userRankMap = {
  level0: userRanks[0],
  level1: userRanks[1],
  level2: userRanks[2],
  level3: userRanks[3],
  level4: userRanks[4],
  level5: userRanks[5],
  level6: userRanks[6],
  level7: userRanks[7],
}
