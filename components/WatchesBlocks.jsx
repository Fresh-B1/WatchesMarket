const React = require('react');

function WatchesBlocks() {
  return (
    <div id="watchBlock" className="container_for_watches">
      <div className="watch_1">
        <div className="watch_1_block_left"><p className="watch_title title_1">ALLURING OAK</p> <p className='watch_description description_1'>Текстурированный циферблат из дуба символизирует спокойствие и величие природы. Эти ультратонкие прочные часы из дерева мгновенно привнесут нотку горпкор-гламура в любой образ. Пришло время продемонстрировать всем ритмы вашего стиля!</p><a className='btn_wb_buy' href="#order_crt">ЗАКАЗАТЬ</a></div>
        <div className="watch_1_block_right"><img src="./img/watch/watch_1.png" alt="watch #1" /></div>
      </div>

      <div className="watch_2">
        <div className="watch_2_block_left"><img src="./img/watch/watch_13.png" alt="watch #2" /></div>
        <div className="watch_2_block_right"><p className="watch_title title_2">DARK WOOD</p> <p className='watch_description description_2'>Черный циферблат с гладкой текстурой и ремешок из темного дерева. Часы призваны олицетворять спокойствие и современный стиль одухотворенный природой.</p><a className='btn_wb_buy' href="#order_crt">ЗАКАЗАТЬ</a></div>
      </div>

      <div className="watch_3">
        <div className="watch_3_block_left"><p className="watch_title title_3">GOLDEN WOOD</p> <p className='watch_description description_3'>Эти эффектные женские часы с гладким черным циферблатом и яркими вставками из дерева шлефованной обработки. Они придадут вашему образу элегантность. </p><a className='btn_wb_buy' href="#order_crt">ЗАКАЗАТЬ</a></div>
        <div className="watch_3_block_right"><img src="./img/watch/watch_10.png" alt="watch #3" /></div>
      </div>

      <div className="watch_4">
        <div className="watch_4_block_left"><img src="./img/watch/watch_11.png" alt="watch #4" /></div>
        <div className="watch_4_block_right"><p className="watch_title title_4">RARE BREGUETTE STYLE</p> <p className='watch_description description_4'>Классические брегеты секстурированным деревянным циферблатом, призваны напомнить об успокаивающей силе леса и тепле лесного костра. Идеальный аксессуар, чтобы подчеркнуть свой тонкий вкус в ритме современного города.</p><a className='btn_wb_buy' href="#order_crt">ЗАКАЗАТЬ</a></div>
      </div>

      <div className="watch_5">
        <div className="watch_5_block_left"><p className="watch_title title_5">BLACK SAPPHIRE</p> <p className='watch_description description_5'>Текстурированный циферблат черного цвета с метллическими вставками. Эти прочные часы мгновенно привнесут нотку горпкор-гламура в любой образ.</p><a className='btn_wb_buy' href="#order_crt">ЗАКАЗАТЬ</a></div>
        <div className="watch_5_block_right"><img src="./img/watch/watch_5.png" alt="watch #5" /></div>
      </div>

    </div>
  );
}

module.exports = WatchesBlocks;
