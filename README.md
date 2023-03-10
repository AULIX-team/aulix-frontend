# Фронтенд проекта AULIX-marketplace

## Над проектом трудятся:

 - [Никита](https://github.com/LAYT73)
 - [Игорь](https://github.com/Legend1796)
 - [Осман](https://github.com/k1nnyyY)
 - [NikitaNim](https://github.com/nimainikita)
 - [Avenue](https://github.com/AvenueWork)
 - [Настя](https://github.com/monresu)

## Как приступить к разработке?

  1. Клонировать репозиторий <code>git clone https://github.com/aulix-team/aulix-frontend.git</code>
  2. Перейти в папку с проектом  <code>cd aulix-frontend</code>
  3. Установить зависимости <code>npm install</code>
  4. Установить chalk <code>npm install -g chalk --save</code>
  5. Перейти в ветку разраработки <code>git checkout dev</code>
  6. Из ветки <code>dev</code> создать и перейти в ветку с названием вашей работы <code>git checkout -b feature/page-home</code>
  7. Запушить изменения с коммитом "сверстал(а) главную страницу"
  8. Радоваться что всё прошло успешно :tada:

## Несколько требований к проекту

  - Названия ***файлов и папок*** написаны в нижнем регистре и не имеют пробелов, для разделений используется дефис
  - Стили портированы как модули. Если есть общие стили, они портированы в глобальную область видимости
  - Названия функциональных компонентов написанны с ***большой буквы***
  - Разметка портирована в JSX, заключена в <code>( )</code> и вынесена в соответствующие ей компоненты
  - Хуки не используются внутри условных блоков и вызываются в основной функции компонента
  - Один файл содержит в себе один функциональный компонент
  - Файлы с утилитарными функциями имеют расширение <code>.js</code>
  - Файлы с компонентами имеют расширение <code>.jsx</code>
  - Имена переменных — существительные, имена функций отражают то что они делают
  - Для именования запрещены транслит и неуместные сокращения
  - Код оформлен по принципам программирования DRY:droplet:(не повторяй сам себя) и KISS:kiss:(пиши проще и понятней)

### Доп информация про CodeStyle

- Табуляция = 2 пробела
- Закрываем конструкции точкой с запятой
- Ковычки используем двойные
- Используем camelCase
- Без накидывания лишних пробелов в коде
- Убирать неиспользуемые переменные

Остальные правила лежат в конфиге, на нарушение правил будет ссылаться тест в Action вкладке под названием ESLint

## Пару слов о том как работать с git

 - Проект содержит основую ветку <code>main</code>. Она предназначена для релизного состояния приложения
 - Ветка <code>dev</code> предназначена для слияния ваших работ
 - Для того чтобы смержить изменения в ветку <code>dev</code> необходимо из этой ветки создать ветку с вашей работой и создать пул реквест
 - Название вашей рабочей ветки должно отражать вашу работу. Например <code>feature/component-header</code> или <code>feature/ui-button</code>
 - Коммиты пишем на русском языке. Начинается коммит с глагола что сделал(а)?. Например "написал(а) маршрутизацию" или "сделал(а) функцию закрития модального окна на крестик"
 - Если необходимо исправить баг который находится в ветке <code>main</code> необходимо из этой ветки создать ветку с названием <code>hotfix/modal</code> и создать пул реквест
 - Если пул реквест принят, то ветка в которой велась разработка удаляется
 - Подробнее о git-flow можно почитать здесь https://github.com/SergeFocus/git-flow
