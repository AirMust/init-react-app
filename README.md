## Тема для приложения ([LP-1](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/1))

### Использован следующий стек:

- для создания стилей и стилизации компонентов внутри файла на ts|js `"react-jss": "10.5.1",`
- тема по умолчанию `"jss-theme-default": "0.1.4",` в данной сборке за основу взята [тема из material](https://material-ui.com/ru/customization/default-theme/).

### [Цветовая палитра](https://material-ui.com/ru/customization/color/)
- `primary.main` - deepPurple[500] (#673ab7),
- `primary.dark` - purple[500] (#9c27b0),
- `secondary.main` - blue[500] (#2196f3),
- `primary.contrastText` - #575757,
- `divider` - #d9d9d9,

`borderRadius = 6px`

## Слой API ([LP-2](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/2))

## Локализация приложения ([LP-3](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/3))

### Использована библиотека i18next

## Заголовок для приложения ([LP-4](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/4))

- заголовок относится к основным компонентам приложения
- для роутинга используется `"react-router-dom": "5.2.0",`
- название компонента `HeaderApp`
- добавлена локализация для заголовка
- добавлена константа `ROUTES` в которой хранится путь и название

## Роутинг для приложения ([LP-5](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/5))

## Добавлен в проект redux ([LP-6](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/6))

### Actions:
- для заголовка домашней страницы;
- для получения молекулы;
- для получения бэнчмарка;
- для получения графика (потребление, эталон, базовая линия)

## Добавлен верстка для домашней страницы ([LP-7](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/7))

Три колонки:
- Левая 25%;
  - 1 строка 100px
  - 2 строка остальное пространство
- Центральная 50%;
- Правая 25%:
  - Верхная строка 25%;
  - 2-ая строка 50%;
  - 3-я строка 25%

## LP-9: Провести рефакторинг одного элемента молекулы ([LP-9](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/9))

### Компонент `OneNode` имеет следующие свойства:

```
export type OneNodeProps = {
    type?: 'big' | 'small';
    meta?: OneNodeMolecule;
    big: number;
    small: number;
};
```

Добавлено два типа узла молекулы `type: 'big' | 'small';`
- для большого узла ![Снимок_экрана_2021-03-04_в_12.01.09](/uploads/1225b35767516abc3004fcc40ec1c128/Снимок_экрана_2021-03-04_в_12.01.09.png);
- для маленького узла ![Снимок_экрана_2021-03-04_в_12.03.26](/uploads/42fafaf4ed9ee737411c09c3b5742af2/Снимок_экрана_2021-03-04_в_12.03.26.png)

## LP-15: Добавлен хук для вычисления размеров блока на которой ссылка ([LP-15](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/15))

### Хук - `useSizeComponents`

#### Входные параметры:
Хук ожидает ссылку на HTML element, и вычисляет его размер в случае если изменяется размер окна, в случае если ссылку не давать, то будет возвращать размер окна.

#### Результат:
Размер в формате `[width, height]`

#### Пример;
```
export const Center: FC = memo(() => {
    const classes = useStyles();
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const size = useSizeComponents(ref);

    console.log(size);
    const LOCAL = t('main');
    return (
        <div className={classes.root} ref={ref}>
            <div className={classes.header}>
                <h4>{LOCAL.i18_saving_achieved}</h4>
                <h5>Какой-то текст</h5>
                <Header />
            </div>
            <div>
                <Molecule />
            </div>
        </div>
    );
});
```

## LP-10: Рефакторинг молекулы с замоканными сведениями ([LP-15](https://gitlab.foresight-fund.ru/airat.must/ts_react_portal/-/issues/10))

####
