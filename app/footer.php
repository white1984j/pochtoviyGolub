    </main>
    <footer class="b-footer">
      <div class="container b-footer-container">
        <div class="b-footer-path">
          <div>
            <a href="#" class="b-footer-logo">ООО “Почтовый голубь”</a>
            <p>Все права защищены</p>
          </div>
          <div class="b-footer__confidentiality">
            <p>Политика конфеденциальности</p>
          </div>
        </div>
        <div class="b-footer-path">
          <a href="#" class="b-footer-link">Главная</a>
        </div>
        <div class="b-footer-path">
          <div>
            <a href="#" class="b-footer-link">Клиентам </a>
            <ul class="b-footer-nav">
              <li>
                <a href="#">Перевозки по РФ</a>
              </li>
              <li>
                <a href="#">Перевозки по СНГ</a>
              </li>
              <li>
                <a href="#">Рефрижираторные поезда</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="b-footer-path">
          <div>
            <a href="#" class="b-footer-link">О компании</a>
            <ul class="b-footer-nav">
              <li>
                <a href="#">Автопарк</a>
              </li>
              <li>
                <a href="#">География</a>
              </li>
              <li>
                <a href="#">История</a>
              </li>
              <li>
                <a href="#">Команда</a>
              </li>
              <li>
                <a href="#">Документы</a>
              </li>
              <li>
                <a href="#">Благодарственные письма</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="b-footer-path">
          <a href="#" class="b-footer-link">Карьера</a>
        </div>
        <div class="b-footer-path">
          <a href="#" class="b-footer-link">Контакты</a>
        </div>
      </div>
    </footer>
  </div>

  <script src="js/scripts.min.js"></script>

  <div class="d-none">
    <div class="b-modal" id="order-call">
      <div class="b-modal__head">
        Заказать звонок
      </div>
      <div class="b-modal__body">
        <form>
          <label class="b-label">
            <input type="text" class="b-input" placeholder="Ваше имя">
          </label>
          <label class="b-label b-label--error">
            <input type="tel" class="b-input" placeholder="Контактный номер">
            <p class="b-label__error-txt">Неверный формат</p>
          </label>
          <label class="b-label">
            <input type="emeil" class="b-input" placeholder="Email">
          </label>
          <div class="txt-c">
            <input type="submit" class="btn btn--red btn--sm" value="ПОЛУЧИТЬ РАСЧЕТ">
          </div>
        </form>
      </div>
    </div>

    <div class="b-modal" style="width: 750px" id="calc-transportations">
      <div class="b-modal__head">
        Расчет перевозки
      </div>
      <div class="b-modal__body">
        <form>
          <div class="row">
            <div class="col-12 col-md-6">
              <label class="b-label">
                <input type="text" class="b-input" placeholder="Где будет загрузка?">
              </label>
              <label class="b-label">
                <input type="text" class="b-input" placeholder="Куда вести?">
                <p class="b-label__error-txt">Неверный формат</p>
              </label>
              <label class="b-label">
                <input type="text" class="b-input" placeholder="Вес груза">
              </label>
              <label class="b-label">
                <input type="text" class="b-input" placeholder="Объем груза">
              </label>
            </div>
            <div class="col-12 col-md-6">
              <label class="b-label">
                <input type="text" class="b-input" placeholder="Ваше имя">
              </label>
              <label class="b-label">
                <input type="tel" class="b-input" placeholder="Контактный номер">
                <p class="b-label__error-txt">Неверный формат</p>
              </label>
              <label class="b-label">
                <input type="emeil" class="b-input" placeholder="Email">
              </label>
              <label class="b-label">
                <input type="text" class="b-input" placeholder="Индивидуальные пожелания">
              </label>
            </div>
          </div>

          <div class="txt-c">
            <input type="submit" class="btn btn--red btn--sm" value="ПОЛУЧИТЬ РАСЧЕТ">
          </div>
        </form>
      </div>
    </div>
  </div>

</body>
</html>
