import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.defaultStyles.overlay.zIndex = 2;
Modal.defaultStyles.overlay.borderRadius = '10px';
Modal.defaultStyles.overlay.border = '1px solid black';

class MenuModal extends Component {
  constructor(props) {
    super(props);
    this.subtitleRef = React.createRef();
  }


  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '60%',
        minWidth: '50%',
      },
    };
    const { isOpen, toggleModal } = this.props;
    return (
      <div>
        <Modal
          isOpen={isOpen}
          // onAfterOpen={this.afterOpenModal}
          style={customStyles}
          contentLabel="Menu"
          // eslint-disable-next-line no-return-assign
          overlayRef={overlay => this.overlay = overlay}
          // eslint-disable-next-line react/jsx-boolean-value
        >
          <div className="dismiss-container">
            <button type="button" className="dismiss" onClick={toggleModal}><i className="fas fa-times fa-2x" /></button>
          </div>
          <h2 style={{ textAlign: 'center' }} ref={this.subtitleRef}>MENU 菜單</h2>
          <div className="card">
            <div className="modal-body card-body">
              <h5 style={{ fontWeight: 'bold' }} className="card-title">Drink up! We have an open bar!</h5>
              <div>
                <h4 className="section-header">Cocktail hour</h4>
                <div>Hors d&apos;oeuvre - </div>
                <div>
                  <b>Chilled</b>
                  <ul className="info-list-container">
                    <li className="info-list-item">Avocado-Corn Bruschetta</li>
                    <li className="info-list-item">Tomato and Mozzarella Caprese Skewers</li>
                    <li className="info-list-item">Ahi Tuna Wontons with Wasabi Cream</li>
                  </ul>
                </div>
                <div>
                  <b>Hot</b>
                  <ul className="info-list-container">
                    <li className="info-list-item">Sweet and Tangy BBQ Meatballs</li>
                    <li className="info-list-item">Mini Crab Cakes with Spicy Remoulade</li>
                    <li className="info-list-item">Bacon Wrapped Scallops</li>
                    <li className="info-list-item">Mac and Cheese Croquettes (Kid Friendly)</li>
                    <li className="info-list-item">Brie and Apple Phyllo Kisses (Kid Friendly)</li>
                  </ul>
                </div>
                <h4 className="section-header">Reception</h4>
                <div>
                  <div>
                    <b>Entrée</b>
                    <ul className="info-list-container">
                      <li className="info-list-item">Chicken Cordon Bleu with Chardonnay Sauce</li>
                      <li className="info-list-item">Tortellini Pesto Parmesan</li>
                      <li className="info-list-item">Beef, or as Betty calls it &quot;Cow Option&quot;</li>
                    </ul>
                  </div>
                </div>
                <h4 className="section-header">Dessert 甜點 - TBD</h4>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

MenuModal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
};

MenuModal.defaultProps = {
  isOpen: false,
  toggleModal: () => {},
};

export default MenuModal;
