import './App.css';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable'; // Draggable включен в GSAP
import React, { useEffect, useRef, useState } from 'react';


function App() {
  const draggableRef = useRef(null); // Ссылка на перемещаемый блок
  const staticRef = useRef(null); // Ссылка на неподвижный блок
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Состояние для показа попапа
  const popupRef = useRef(null); // Ссылка на попап для проверки кликов за его пределами
  const popupContentRef = useRef(null); // Ссылка на содержимое попапа

  useEffect(() => {
    if (draggableRef.current) {
      gsap.registerPlugin(Draggable); // Регистрация плагина Draggable

      // Создание Draggable
      Draggable.create(draggableRef.current, {
        type: 'x,y', // Перемещение по обеим осям
        bounds: 'body', // Ограничение внутри body
        onDrag: checkCollision, // Проверка пересечения при перетаскивании
      });
    }
  }, []);

  // Проверка пересечения двух блоков
  const checkCollision = () => {
    const draggableBox = draggableRef.current.getBoundingClientRect();
    const staticBox = staticRef.current.getBoundingClientRect();

    // Логика проверки пересечения
    const isOverlapping = !(
      draggableBox.right < staticBox.left ||
      draggableBox.left > staticBox.right ||
      draggableBox.bottom < staticBox.top ||
      draggableBox.top > staticBox.bottom
    );

    setIsPopupVisible(isOverlapping); // Показать попап, если пересекаются
  };
  const closePopup = () => {
    setIsPopupVisible(false);
  };
   // Закрытие попапа при клике за его пределами
   const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };
  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };


  }, [isPopupVisible]);
   const goToTop = () => {
    if (popupContentRef.current) {
      popupContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <div>
      <header>
      <div>
        <img
          className="gif-class"
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhzYnFkc2EzaHI3YjY2NXN4Z2tzbjJpa25rN2lnb2Jvd2gybmM2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EWFW0PrV695sBBJIaf/giphy.webp"
          alt="Пример GIF"
        />
        <img
          className="gif-class2"
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhzYnFkc2EzaHI3YjY2NXN4Z2tzbjJpa25rN2lnb2Jvd2gybmM2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EWFW0PrV695sBBJIaf/giphy.webp"
          alt="Пример GIF"
        />
        <img
          id="id2"
          className="icon_2025"
          src="https://cdn-icons-png.flaticon.com/512/16862/16862309.png"
          alt=""
        />
        <div className="upper_block_text">
          <h1>С новым годом!</h1>
          <p className="upper_block_text_p">
            Ты лучшее что произошло со мной в этом году!
          </p>
        </div>
        <div className="main_poem_block">
          <div id="id" >

  
        <div className="draggable_block"  ref={draggableRef}>
        <img
              className="draggable_img"
              src="https://cdn-icons-png.flaticon.com/512/177/177043.png"
              alt=""
            />
        </div>
        
           
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2411/2411815.png"
            alt=""
            className="snow_flake1"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2942/2942909.png"
            alt=""
            className="snow_flake2"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/4471/4471335.png"
            alt=""
            className="snow_flake3"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5906/5906790.png"
            alt=""
            className="snow_flake4"
          />
          <div className="header_common_poem">
          <div className="title_poem">
            <p>Не знав я ласки и заботы</p>
            <p>Я познакомился с тобой</p>
            <p>Ты словно яркий лучик солнца</p>
            <p>Светишь мне над головой</p>
          </div>
          <div className="title_poem">
            <p>Я чувствую тебя, ты рядом</p>
            <p>Не видя в очи я тебя</p>
            <p>Ты может маленькая мышка</p>
            <p>Как призрак смотришь на меня</p>
          </div>
          <div className="title_poem">
            <p>Твой голос только мне и внятен</p>
            <p>Прекрасный, милый и живой</p>
            <p>Сравнимый с божьим дорованьем</p>
            <p>с улыбкой слушаю его</p>
            </div>
          </div>
          </div>
        </div>
     
      </header>
<footer>
      <div className="bottom_block">
        <div className="footer_common_block">
          <div className="footer_top_block">
            <img
              className="footer_img"
              src="https://cdn-icons-png.flaticon.com/512/594/594814.png"
              alt=""
            />
            <p className="footer_top_text">Люблю тебя Мария Николенко&lt;3</p>
          </div>
          <div className="footer_discription">
            По вопросом обращатся:{' '}
            <a className="footer_link" href="https://t.me/anyWay11112">
              Телеграмм&lt;3
            </a>
          </div>
      
        </div>
        <div
        className='frame_place'
        ref={staticRef}
       
      >&lt;3</div>
        {/* Попап */}
        {isPopupVisible && (
        <div className='footer_pop_up_main'  >
          <div className='modal-content' ref={popupContentRef}>
          <div onClick={closePopup} className='close_pop_up'>
          <span id="closeModal" className="close"> &times;</span>
          </div>
            <p className="modal_text2">Тут я расскажу что думаю)</p>
            <p className="modal_text">Мой маленький мышонок), как бы это просто не звучало, но я кладу большую душу в эти слова, когда говорю тебе это), хоть я и говорю это тебе это очень часто, но я говорю это всегда искрине)</p>
            <p className="modal_text">Спасибо тебе за этот год), хоть я сейчас повторю слова которые были в начале твоего подарка, но ты правда сделала этот год самым лучшим в моей жизни!). Каждый созвон с тобой это все что я ждал каждую неделю.(по-ходу как я этого писал я чуть заплакал) каждый твой кружок радовал меня, каждое записанное голосовое сообщение, каждое сообщение от тебя). Не знаю почему, как это это вообще возможно, это даже у меня в голове не укладывается, но я люблю тебя, возможно это не слишком красиво написанное слово, но для меня оно не просто слово).</p>
            <p className="modal_text">Ты великолепна мышонок), ты правда очень очень красивая, безумно нежная, очень очень очень очень очень милая))), ну вот прям оченььь)))), хочется тебе умелять каждый день, как ты умеляешься это ну не описать словами)).Такого не найти в других, которые так же будут умеляться моим словам, умелятся всем).</p>
            <p className="modal_text">Ты очень умная), ну правда), мне очень многому нужно научится у тебя), твоей силе, в моральном плане, да и просто в знаниях).</p> 
            <p className="modal_text">Ты безумно заботливая)), мне это очень сильно нравится)), когда ты так переживаешь за меня)), меня это прям до души берет), хочется уже идти бублики покупать, ой не бублики, а эти колечки, крч предложение тебе сделать)))))). Когда ты спрашивала про мою кисть))), хоть в начале не так часто, но потом). Мой маленький мышонок)</p>
            <p className="modal_text">С тобой мне хочется прожить всю свою жизнь), подарить всего себя тебе), самого лучшего, я обязательно еще подкачаюсь и буду как Nileto ахаха, хз недавно его увидел, почему то как он хочу быть, ебать у не плечи, я такие же хочу). Что бы ты не стыдилась меня, перед всеми, что бы мы с тобой шли за ручку и все на нас смотрели), только в хором смысле)), перед друзьями могла похвастаться), хоть и рожа у меня так себе, но ладно). ШУЧУУУУУ))) ахаххаха, может нет)). Что бы мы с тобой ходили по ресторанам а я был в рубашке, а ты в платье))))))), это был бы идеальный вечер)))))). Хочу путешествовать с тобой) везде везде)), кушать с тобой сосиски со сметаной), и шинку с огурцами)))), все что ты захочешь)). Все мое тело твое). Я клянусь всем что у меня есть, мне нравится все в тебе, все все)), даже если ты там в тайне казявки ешь)).</p>
            <p className="modal_text">Хоть мы с тобой наверно не так много общаемся без того что бы сказать как мы друг друга любим, ((, это из-за меня(, я просто не супер разговорчивый, но когда я приеду, я надеюсь что я разговорюсь)), и мы будем дурачиться, и играться как дети). Люблю тебя)). ООО еще раз с новым годом мышонок)))))).</p>
            <p className="modal_text">теперь я хочу поговорить о тебе), боже какая ты ахуенная, прости меня за это матное слово, но другое ни какое больше не подходит к описанию тебя). Твоя божественная фигура, при виде которой у меня уже стояк), хоть я до сих пор в афиге что я такое говорю , ведь как бы это не прилично, хотя как я буду тебя трахать потом, эти слова покажуться пушинкой). Если что я не говорю что я тебя буду трахать , так что бы тебе не дай бох стало плохо, а просто мне очень нравится твое тело), да и ты в обшем.Хоть мне вообще не нравится разделение тело и весь человек, но все же для тебя я могу такое говорить, ведь сложно представить что такое миленькое существо как ты, будет такое красивое)))). Зачем я это пишу), ну я дурак).</p>
            <p className="modal_text">Ну да мне жопа), я и правда не уместил все(, так что украсить  не получится(, а я бы это легко сделал(, прости(((. Надеюсь мы встретимся), пройдем через все трудности, хоть меня уже наверно неделю а то и гораздо больше, то что я же если не успею, ну когда ты дашь мне денег что бы я к тебе приехал, хоть я и сделаю все что бы такого не было, но если такое будет, то мне уже очень стыдно..... Я буду хоть камни Словакские есть), мне нечего от тебя не нужно, только твая забота ,и ты ). так ладно все( Люблю тебя), не плачь мышонок). хоть и мог милее написать, или в конце веселее, написав все лучшие моменты, но я думаю под шампусиком будущий Ваня тебе расскажет), там будет жопа). А и прости за орфографию, да, я Таджик). (пишу через минуту) боже как же это классно вот так писать)))))), на твой день рождение тебе огромнуууууюю посылку подарю)), там будет еще больше всего)). Целую</p>

            <button className='button_to_top' onClick={goToTop}>to top</button>
          </div>
 
        </div>
      )}
      </div>
      <div>
     
   
  
    
    </div>
      </footer>
    </div>
    
  );
 

}

export default App;
