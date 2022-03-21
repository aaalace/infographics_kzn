import React, { useState } from "react"
import './style.css'
import { useSelector } from "react-redux"
import { OpenedIcon } from "../OpenedIcon"
import {useMediaQuery} from 'react-responsive'

export function CustomMap() {
    const month = useSelector(state => state.month)
    const [objects, setObjects] = useState([])
    const [currentMonth, setCurrentMonth] = useState(0)

    const [openedIconState, setOpenedIconState] = useState(false)
    const [openedIconName, setOpenedIconName] = useState('')
    const [openedIconDesc, setOpenedIconDesc] = useState('')

    let media = 'large' 
    if (useMediaQuery({ query: '(max-width: 1000px)' })){
        media = "small"
    }

    const Events = {
        'standUp': {
            'name': 'Международный Stand Up Фестиваль', 
            'desc': 'С 5 по 9 января 2022 года в Татарстане пройдет международный Stand Up фестиваль. Гала-концерты состоятся 8 января в Казани и 9 января в Альметьевске. На фестиваль приедут более 200 участников. Они будут бороться за главный приз — 100 000 рублей. Отборочные туры пройдут 5, 6 и 7 января в Stand Up Club. Там же состоятся съемки шоу для YouTube и квиз Who Is. В эти же дни комики будут выступать на открытых микрофонах в барах Craft House (ул. Пушкина, 21А), Fidel (ул. Профсоюзная, 10/14), «Ликер’S» (ул. Пушкина, 28), Polako (ул. Петербургская, 25), Route Bar 66 (ул. Профсоюзная, 46) и на площадке магазина стоковых вещей «Реформа» (ул. Кави Наджми, 8А). Все они находятся в центре Казани, в пешей доступности друг от друга. В баре «Тринити» (ул. Баумана, 44/8) с 5 по 7 января устроят Money Mic (битва стендап-комиков за денежный приз, — прим. Enter). Также все три дня в Казани будут выступать объединения комиков из Перми, Набережных Челнов, Уфы, Челябинска, Чебоксар и Екатеринбурга. Послушать их можно в барах «Пятница» (ул. Мусы Джалиля, 14/10) и Salad (ул. Университетская, 22).'},
        'masks': {
            'name': 'Всероссийский фестиваль студенческих театров малых форм "Икариада-2022"', 
            'desc': 'Это проект, который предоставляет возможность широкой аудитории познакомиться с театральным творчеством молодежи.  Здесь  происходит обмен идеями и опытом между театральными творческими коллективами, а также общение с признанными мастерами театрального жанра. Фестиваль выявляет лучшие театральные программы и наиболее одаренных молодых исполнителей.  Это площадка для развития организаторских способностей студентов, принимающих участие в подготовке и проведении фестиваля. В рамках Фестиваля для гостей и участников планируется проведение мастер-классов театральных деятелей и педагогов, проведение круглых столов и дискуссионных встреч, открытое обсуждение выступлений, а также культурно-досуговая программа.'},
        'maslenitsa': {
            'name': 'Масленица', 
            'desc': 'Масленица — восточнославянский традиционный праздник, отмечаемый в течение недели перед Великим постом, сохранивший в своей обрядовой основе ряд элементов дохристианской славянской мифологии. В народном календаре восточных славян праздник маркирует границу зимы и весны, а также Мясоеда и Великого поста'},
        'dance': {
            'name': 'Фестиваль восточного танца «Золотой Казан»', 
            'desc': ''},
        'cityday': {
            'name': 'День города и День Республики', 
            'desc': '30 августа отмечается День города и республики. Сегодня казанцев ждёт большая праздничная программа. В 9.30 у Центра семьи «Казан» начнётся мотофестиваль «Два Кремля» (6+) с участием группы «Хитобои»'},
        'kurbanBairam': {
            'name': 'Курбан-байрам', 
            'desc': 'Курба́н-байра́м или ’Ид аль-адха — исламский праздник окончания хаджа, отмечаемый через 70 дней после праздника Ураза-байрам, в 10-й день месяца Зуль-хиджа в память жертвоприношения Ибрахима, считающегося у мусульман пророком. Точная дата празднования по григорианскому календарю может разниться в разных странах.'},
        'sabantui': {
            'name': 'САБАНТУЙ', 
            'desc': 'Сабанту́й — ежегодный народный праздник окончания весенних полевых работ у татар и башкир. Похожие праздники существуют как у народов Поволжья, так и у некоторых тюркских народов Кавказа, однако они имеют свою специфику.'},
        'colorsDay': {
            'name': 'Фестиваль красок', 
            'desc': 'Холи, также известный как Пха́гвах и Фестиваль красок — ежегодный индуистский фестиваль весны.'},
        'cinema': {
            'name': 'IV Международный фестиваль «Дни военно-исторического кино» в Казани', 
            'desc': ''},
        'soul': {
            'name': 'Фестиваль авторской песни и поэзии «Песни моей души»', 
            'desc': 'Проект дает возможность бесплатно посмотреть последние военно-исторические фильмы российского и иностранного производства, поговорить с их создателями и профессиональными историками, а также ветеранами Великой Отечественной Войны, зачастую принимавшими непосредственное участие в событиях, описанных в кинолентах. Все это призвано пробудить у гостей фестиваля интерес к военной истории страны через конкретные факты, увиденные на киноэкране, и желание узнать больше о них больше по приходу домой.'},
        'zilatikon': {
            'name': 'Зиланткон в Казани. Конвент любителей фантастики', 
            'desc': 'С 1985 года в Казани — как и во многих городах СССР — существовал Клуб любителей фантастики. Именно здесь в 1987-м впервые в городе публично зачитали отрывок из книги «Хранители» — первой части «Властелина колец», вышедшей в издательстве «Детская литература» в переводе Владимира Муравьева. Через несколько лет члены КЛФ создали самый мощный в стране фестиваль для тех, кто любит книги Клиффорда Саймака и Джона Толкина, драться на дюралевых мечах, танцевать вальсы XVII века и представляться эльфийскими именами. «Инде» поговорил с ключевыми деятелями «Зиланткона» о первых выездах на «Хоббитские игрища», зеленодольских гоблинах, журналистской травле ролевого движения и пользе толкинизма.'},
        'winter': {
            'name': 'Зимний фестиваль «Кыш да Кар фест»', 
            'desc': ''},
    }

    if(month !== currentMonth){
        setCurrentMonth(month)
        if(month == 1){
            setObjects(['standUp'])
        }
        if(month == 2){
            setObjects(['masks'])
        }
        if(month == 3){
            setObjects(['maslenitsa'])
        }
        if(month == 4){
            setObjects(['dance'])
        }
        if(month == 5){
            setObjects(['cityday'])
        }
        if(month == 6){
            setObjects(['kurbanBairam'])
        }
        if(month == 7){
            setObjects(['sabantui'])
        }
        if(month == 8){
            setObjects(['colorsDay'])
        }
        if(month == 9){
            setObjects(['cinema'])
        }
        if(month == 10){
            setObjects(['soul'])
        }
        if(month == 11){
            setObjects(['zilatikon'])
        }
        if(month == 12){
            setObjects(['winter'])
        }
    }

    const openIcon = (key) => {
        setOpenedIconState(true)
        setOpenedIconName(Events[key].name)
        setOpenedIconDesc(Events[key].desc)
    }

    return(
        <div className="map-container">
            <div className="map">
                {openedIconState ? <OpenedIcon name={openedIconName} desc={openedIconDesc} state={setOpenedIconState}/> : null}
                {objects.includes('standUp') ? 
                <img onClick={() => openIcon('standUp')} className="icon" style={media === 'large' ? {left: '55%', top: '40%'} : {left: '40%', top: '60%'}} src="./static/standUp.jpg"></img>:
                null}

                {objects.includes('masks') ? 
                <img onClick={() => openIcon('masks')} className="icon" style={media === 'large' ? {left: '50%', top: '30%'} : {left: '60%', top: '40%'}} src="./static/masks.jpg"></img>:
                null}

                {objects.includes('maslenitsa') ? 
                <img onClick={() => openIcon('maslenitsa')} className="icon" style={media === 'large' ? {left: '55%', top: '30%'} : {left: '55%', top: '45%'}} src="./static/maslenitsa.jpg"></img>:
                null}

                {objects.includes('dance') ? 
                <img onClick={() => openIcon('dance')} className="icon" style={media === 'large' ? {left: '45%', top: '50%'} : {left: '30%', top: '27%'}} src="./static/dance.jpg"></img>:
                null}

                {objects.includes('cityday') ? 
                <img onClick={() => openIcon('cityday')} className="icon" style={media === 'large' ? {left: '55%', top: '30%'} : {left: '58%', top: '41%'}} src="./static/cityday.jpg"></img>:
                null}

                {objects.includes('kurbanBairam') ? 
                <img onClick={() => openIcon('kurbanBairam')} className="icon" style={media === 'large' ? {left: '50%', top: '30%'} : {left: '50%', top: '40%'}} src="./static/kurbanBairam.jpg"></img>:
                null}

                {objects.includes('sabantui') ? 
                <img onClick={() => openIcon('sabantui')} className="icon" style={media === 'large' ? {left: '50%', top: '40%'} : {left: '50%', top: '40%'}} src="./static/sabantui.jpg"></img>:
                null}

                {objects.includes('colorsDay') ? 
                <img onClick={() => openIcon('colorsDay')} className="icon" style={media === 'large' ? {left: '50%', top: '30%'} : {left: '50%', top: '40%'}} src="./static/colorsDay.jpg"></img>:
                null}
                
                {objects.includes('cinema') ? 
                <img onClick={() => openIcon('cinema')} className="icon" style={media === 'large' ? {left: '50%', top: '40%'} : {left: '50%', top: '40%'}} src="./static/cinema.jpg"></img>:
                null}

                {objects.includes('soul') ? 
                <img onClick={() => openIcon('soul')} className="icon" style={media === 'large' ? {left: '55%', top: '40%'} : {left: '50%', top: '40%'}} src="./static/soul.jpg"></img>:
                null}

                {objects.includes('zilatikon') ? 
                <img onClick={() => openIcon('zilatikon')} className="icon" style={media === 'large' ? {left: '50%', top: '50%'} : {left: '50%', top: '40%'}} src="./static/zilatikon.jpg"></img>:
                null}
                
                {objects.includes('winter') ? 
                <img onClick={() => openIcon('winter')} className="icon" style={media === 'large' ? {left: '30%', top: '25%'} : {left: '50%', top: '40%'}} src="./static/winter.jpg"></img>:
                null}
            </div>
        </div>
    )
}
