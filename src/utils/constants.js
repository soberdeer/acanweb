import oc from 'open-color';

const darkText = 8;

export const gistLink = 'https://gist.githubusercontent.com/soberdeer/dd322cd3d1fc4a3a41f6bdb09fca3fa2/raw/0208cdb5c2bdba1d9a118b40f2b89c6542a8a545/data.json';

function getStyle(colorGroup) {
  return { backgroundColor: colorGroup[2], color: colorGroup[darkText] };
}

export const mappedSubgroupName = {
  natural: 'Натуральные',
  oil: 'В масле',
  soup: 'Уха и супы',
  aspic: 'Заливное',
  smoked: 'Копченая',
  filled: 'В заливках',
  tomato: 'В томатном соусе',
  ground: 'Измельченные',
  pate: 'Паштеты',
  caviar: 'Икра',
  liver: 'Субпродукты',
  garnish: 'С гарнирами',
  veg: 'Овощерыбные',
  seaweed: 'Водоросли',
  child: 'Детям',
  diet: 'Диеты',
  export: 'Экспорт',
  animal: 'Животным',
  sauce: 'Соусы',
  special: 'Спецпосол',
  spice: 'Пряный посол',
};

export const mappedSubgroupTheme = {
  natural: getStyle(oc.cyan),
  oil: { backgroundColor: oc.yellow[4], color: oc.yellow[darkText] },
  soup: getStyle(oc.orange),
  aspic: getStyle(oc.yellow),
  smoked: { backgroundColor: oc.orange[2], color: oc.orange[9] },
  filled: { backgroundColor: oc.violet[2], color: oc.red[darkText] },
  tomato: getStyle(oc.red),
  ground: { backgroundColor: oc.pink[1], color: oc.pink[darkText] },
  pate: getStyle(oc.pink),
  caviar: { backgroundColor: oc.orange[2], color: oc.red[darkText] },
  liver: getStyle(oc.yellow),
  garnish: getStyle(oc.lime),
  veg: getStyle(oc.green),
  seaweed: getStyle(oc.teal),
  child: getStyle(oc.grape),
  diet: getStyle(oc.blue),
  export: getStyle(oc.indigo),
  animal: { backgroundColor: oc.gray[2], color: oc.orange[darkText] },
  sauce: getStyle(oc.violet),
  special: { backgroundColor: oc.lime[2], color: oc.green[darkText] },
  spice: { backgroundColor: oc.yellow[2], color: oc.green[darkText] },
};
