import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Note from '../../components/Note';
import Radio from '../../components/Form/Radio';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ButtonAddNote from '../../components/Button/AddNote';

import iconTrashWhite from '../../images/icon__trash--white.svg';
import iconBarsWhite from '../../images/icon__bars--white.svg';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: props.data,
      editNote: '',
    };

    this.setNoteType = this.setNoteType.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
  }

  setNoteType(id, important) {
    const notes = this.state.notes;
    const changedNotes = [];

    // TODO: Test this with a lot of notes if this is slow
    for (let i = 0; i < notes.length; i += 1) {
      const note = notes[i];

      if (note.id === id) {
        note.important = important;
      }

      changedNotes.push(note);
    }

    this.setState({
      notes: changedNotes,
    });
  }

  deleteNote(id) {
    const notes = this.state.notes;

    this.setState({
      notes: notes.filter(note => note.id !== id),
    });
  }

  toggleEditModal(id) {
    this.setState({
      editNote: id,
    });
  }

  render() {
    const { editable } = this.props;

    return (
      <div className="row">
        { this.state.notes.length === 0 && (
          <div className="col-xs-12">
            <p>Няма бележки</p>
          </div>
        )}
        { this.state.notes.map(note => (
          <div key={note.id} className="col-xs-12 col-md-6">
            <div className="row m-t-xs">
              <div
                className={classNames('col-lg-6 m-t-xxs', {
                  'pull-right m-b-xxs': !editable,
                })}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <Radio
                      onChange={() => this.setNoteType(note.id, false)}
                      checked={!note.important}
                      id={`note__active--${note.id}`}
                      name={note.id.toString()}
                      label="Активна"
                      type="dark"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Radio
                      onChange={() => this.setNoteType(note.id, true)}
                      checked={note.important}
                      id={`note__important--${note.id}`}
                      name={note.id.toString()}
                      label="Важна"
                      type="dark"
                    />
                  </div>
                </div>
              </div>
              { editable && (
                <div className="col-lg-6">
                  <div className="pull-right">
                    <Button
                      className="m-r-xxs"
                      size="sm"
                      onClick={() => this.deleteNote(note.id)}
                      preIcon={iconTrashWhite}
                    />
                    <Button
                      size="sm"
                      onClick={() => this.toggleEditModal(note.id)}
                      preIcon={iconBarsWhite}
                    />
                  </div>
                </div>
              )}
            </div>
            <Note text={note.text} important={note.important} />
            <Modal visible={this.state.editNote === note.id} onClose={this.toggleEditModal}>
              <textarea>
                { note.text }
              </textarea>
            </Modal>
          </div>
        ))}
        { editable && (
          <div className="col-xs-12 m-t-sm">
            <ButtonAddNote inverse />
          </div>
        )}
      </div>
    );
  }
}

Notes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  editable: PropTypes.bool,
};

Notes.defaultProps = {
  editable: false,
};

export default Notes;
