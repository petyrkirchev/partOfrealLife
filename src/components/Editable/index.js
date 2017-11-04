import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { saveEventPart } from './actions/';

class Editable extends Component {
  constructor(props) {
    super(props);

    if (!props.value && typeof props.children !== 'string') {
      console.error('You should provide default value or pass string as children.'); // eslint-disable-line
      return;
    }

    this.state = {
      editing: false,
      value: props.children,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.setValue = this.setValue.bind(this);
    this.showEditing = this.showEditing.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.children,
    });
  }

  shouldComponentUpdate() {
    return true;
  }
  onChange(event) {
    this.setValue(event.target.value);
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.setState({
        editing: false,
      });

      this.props.onBlur(this.state.value);
    }
  }

  onBlur() {
    this.setState({
      editing: false,
    });

    saveEventPart({
      eventId: this.props.urlId, part: this.props.whatIEdit, data: this.state.value||this.props.children });// eslint-disable-line


    this.props.onBlur(this.state.value);
  }

  setValue(value) {
    this.setState({
      value,
    });
  }

  showEditing() {
    this.setState({
      editing: true,
    });

    setTimeout(() => {
      this.field.focus();
    }, 0);
  }

  render() {
    const { block, type, maxLength, className } = this.props;
    const text = this.state.value;
    return (
      <div
        className={classNames('editable', `editable--${type}`, {
          'editable--editing': this.state.editing,
          'editable--block': block,
        }, className)}
        onClick={this.showEditing}
        role="presentation"
      >
        <div style={{ visibility: this.state.editing ? 'hidden' : 'visible' }}>
          { (text) || 'Зареждане...!!!!' }
        </div>
        <textarea
          ref={(item) => { this.field = item; }}
          className={classNames('editable__field', {
            hidden: !this.state.editing,
          })}
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onBlur={this.onBlur}
        />
        { maxLength && this.state.editing ? (
          <span className="editable__length">
            * Максимален брой символи: {maxLength}
          </span>
        ) : null }
      </div>
    );
  }
}

Editable.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string,
  block: PropTypes.bool,
  type: PropTypes.oneOf(['light', 'dark']),
  maxLength: PropTypes.number,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  whatIEdit: PropTypes.string,
};

Editable.defaultProps = {
  value: '',
  block: false,
  type: 'dark',
  maxLength: 0,
  className: '',
  whatIEdit: '',
  onBlur: () => {},
};

export default Editable;
