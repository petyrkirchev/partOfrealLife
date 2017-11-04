import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileProgress extends Component {
  render() {
    const { progress, remainingFields } = this.props;

    const cupFull = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="3917.368 328.182 42.763 41.237"
        width="42.76"
        height="41.24"
      >
        <defs>
          <clipPath id="myClip">
            <rect
              x="0"
              y={(1 - progress) * 41.24}
              width="42.76"
              height={41.26 - (1 - (progress * 41.24))}
            />
          </clipPath>
        </defs>
        <path
          id="Path_2772"
          clipPath="url(#myClip)"
          fill="#F26C4F"
          d="M35.285,4.733V2.226A1.082,1.082,0,0,0,36.351,1.16,1.1,1.1,0,0,0,35.285,0H7.487A1.082,1.082,0,0,0,6.421,1.066a1.1,1.1,0,0,0,1.066,1.16V4.733H0v3.65A21.479,21.479,0,0,0,13.277,28.165a19.29,19.29,0,0,0,2.848.964,21.68,21.68,0,0,0,2.891,1.859l-.222.512-1.015,2.166H12.467a1.787,1.787,0,0,0-1.782,1.782v5.79H31.976v-5.79a1.665,1.665,0,0,0-1.7-1.782h-5.3L23.97,31.5,23.756,31a20.785,20.785,0,0,0,2.959-1.893,19.975,19.975,0,0,0,2.771-.938A21.479,21.479,0,0,0,42.763,8.391V4.733ZM7.666,19.7a17.908,17.908,0,0,1-4.1-11.315V8.3H7.487v3.471a21.631,21.631,0,0,0,2.66,10.42A18.02,18.02,0,0,1,7.666,19.7Zm27.44,0a18.116,18.116,0,0,1-2.4,2.379,21.567,21.567,0,0,0,2.584-10.232V8.3h3.829v.085H39.2A17.57,17.57,0,0,1,35.106,19.7Z" //eslint-disable-line
          transform="translate(3917.368 328.182)"
        />
      </svg>
    );

    const cupEmpty = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="3917.368 328.182 42.763 41.237"
        width="42.76"
        height="41.24"
      >
        <path
          id="Path_2772"
          fill="#C9C9C9"
          d="M35.285,4.733V2.226A1.082,1.082,0,0,0,36.351,1.16,1.1,1.1,0,0,0,35.285,0H7.487A1.082,1.082,0,0,0,6.421,1.066a1.1,1.1,0,0,0,1.066,1.16V4.733H0v3.65A21.479,21.479,0,0,0,13.277,28.165a19.29,19.29,0,0,0,2.848.964,21.68,21.68,0,0,0,2.891,1.859l-.222.512-1.015,2.166H12.467a1.787,1.787,0,0,0-1.782,1.782v5.79H31.976v-5.79a1.665,1.665,0,0,0-1.7-1.782h-5.3L23.97,31.5,23.756,31a20.785,20.785,0,0,0,2.959-1.893,19.975,19.975,0,0,0,2.771-.938A21.479,21.479,0,0,0,42.763,8.391V4.733ZM7.666,19.7a17.908,17.908,0,0,1-4.1-11.315V8.3H7.487v3.471a21.631,21.631,0,0,0,2.66,10.42A18.02,18.02,0,0,1,7.666,19.7Zm27.44,0a18.116,18.116,0,0,1-2.4,2.379,21.567,21.567,0,0,0,2.584-10.232V8.3h3.829v.085H39.2A17.57,17.57,0,0,1,35.106,19.7Z" //eslint-disable-line
          transform="translate(3917.368 328.182)"
        />
      </svg>
    );

    return (
      <div className="profile-progress">
        <h3 className="profile-progress__title">Профилът ви е завършен на {`${progress * 100}%`}</h3>
        { remainingFields > 0 &&
          <p className="profile-progress__info">
            Остава да попълните { `${remainingFields} ${remainingFields === 1 ? 'поле' : 'полета'}` } за да получите значка!
          </p>
        }
        <div className="profile-progress__bar">
          <div className="profile-progress__bar__progress">
            <span className="profile-progress__bar__progress--empty" />
            <span className="profile-progress__bar__progress--filled" style={{ width: `${progress * 100}%` }} />
            <div className="profile-progress__bar__progress__percent" style={{ left: `${progress * 100}%` }}>
              <span className="profile-progress__bar__bullet" />
              { progress * 100 }%
            </div>
          </div>
          <div className="profile-progress__cup__container">
            <div className="profile-progress__cup profile-progress__cup--empty">
              { cupEmpty }
            </div>
            <div className="profile-progress__cup profile-progress__cup--full">
              { cupFull }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileProgress.propTypes = {
  progress: PropTypes.number,
  remainingFields: PropTypes.number,
};

ProfileProgress.defaultProps = {
  progress: 0,
  remainingFields: 0,
};

export default ProfileProgress;
