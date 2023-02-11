import './clientsFooter.scss';

// Кнопки сторінки не переключаються, не робив щоб не гаяти час. Приклад є в сайд барі.

export const ClientsFooter = () => {
  return (
    <div className="footer">
      <p className="footer__text">Showing data 1 to 8 of 256K entries</p>
      <div className="footer__buttons">
        <FooterButton content="<" />
        <FooterButtonActive content="1" />
        <FooterButton content="2" />
        <FooterButton content="3" />
        <FooterButton content="4" />
        <FooterButton content="..." />
        <FooterButton content="40" />
        <FooterButton content=">" />
      </div>
    </div>
  );
};

const FooterButton = ({ content }) => {
  return <button className="footer__button">{content}</button>;
};

const FooterButtonActive = ({ content }) => {
	return <button className="footer__button-active">{content}</button>;
 };