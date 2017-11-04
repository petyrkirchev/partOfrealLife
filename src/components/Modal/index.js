import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import iconModalDismiss from '../../images/icon__modal-dismiss.svg';

class Modal extends Component {
  render() {
    const { children, title, visible, onClose } = this.props;

    if (!visible) {
      return null;
    }

    return (
      <div>
        <div className="pop-modal__overlay animated fadeIn" role="presentation" onClick={onClose} />
        <div className={classNames('pop-modal animated slideInUp', {
          'pop-modal--has-title': title,
        })}
        >
          { title && (
            <div className="pop-modal__title">
              { title }
            </div>
          )}
          <div className="pop-modal__content">
            { children }
          </div>
          <div className="pop-modal__dismiss" role="presentation" onClick={onClose}>
            <img src={iconModalDismiss} alt="Затвори прозореца" />
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  title: PropTypes.sting,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  title: '',
  visible: false,
  onClose: () => {},
};

export default Modal;
