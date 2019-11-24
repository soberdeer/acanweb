import oc from 'open-color';
import linear from './linear';

const darkText = 8;

export const gistLink = 'https://gist.githubusercontent.com/soberdeer/dd322cd3d1fc4a3a41f6bdb09fca3fa2/raw/0208cdb5c2bdba1d9a118b40f2b89c6542a8a545/data.json';

function getStyle(colorGroup) {
  return { backgroundColor: colorGroup[2], color: colorGroup[darkText] };
}

export const subgroupThemes = {
  'Натуральные': getStyle(oc.cyan),
  'В масле': { backgroundColor: oc.yellow[4], color: oc.yellow[darkText] },
  'Уха и супы': getStyle(oc.orange),
  'Заливное': getStyle(oc.yellow),
  'Копченая': { backgroundColor: oc.orange[2], color: oc.orange[9] },
  'В заливках': { backgroundColor: oc.violet[2], color: oc.red[darkText] },
  'В томатном соусе': getStyle(oc.red),
  'Измельченные': { backgroundColor: oc.pink[1], color: oc.pink[darkText] },
  'Паштеты': getStyle(oc.pink),
  'Икра': { backgroundColor: oc.orange[2], color: oc.red[darkText] },
  'Субпродукты': getStyle(oc.yellow),
  'С гарнирами': getStyle(oc.lime),
  'Овощерыбные': getStyle(oc.green),
  'Водоросли': getStyle(oc.teal),
  'Детям': getStyle(oc.grape),
  'Диеты': getStyle(oc.blue),
  'Экспорт': getStyle(oc.indigo),
  'Животным': { backgroundColor: oc.gray[2], color: oc.orange[darkText] },
  'Соусы': getStyle(oc.violet),
  'Спецпосол': { backgroundColor: oc.lime[2], color: oc.green[darkText] },
  'Пряный посол': { backgroundColor: oc.yellow[2], color: oc.green[darkText] },
};
