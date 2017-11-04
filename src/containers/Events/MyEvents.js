import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const createEvent = e => {//eslint-disable-line
  return (<tr key={e.title}>
    <td>
      <div className="media">
        <div className="media-body">
          <div className="pull-right badge baed-info">{e.created_at}</div>
          <h4 className="media-heading">{e.title}</h4>
          <p>{e.description}</p>
        </div>
      </div>
    </td>
    <td className="text-center">
      <label htmlFor className="switch">
        <Link to={`/organizators/events/${e.id}`} >
          <Button >EDIT</Button></Link>
        <em />
      </label>
    </td>
  </tr>);
};


class MyEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      loading: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: false,
      events: nextProps.events||[] ,// eslint-disable-line
    });
  }
  render() {
    const message=this.props.message;//eslint-disable-line
    console.log(message);//eslint-disable-line
    console.log(this.state);//eslint-disable-line
    return (<div>
      <Table id="table-ext-2" responsive striped bordered hover>

        <tbody>
          {!this.state.loading &&
           this.state.events.length === 0 && !message && <div>Empty result set</div>}
          {message && message}
          {(this.state.events.length === 0 && this.state.loading) ? <div>Зареждане...</div> : this
                            .state
                            .events
                            .map(createEvent)}
        </tbody>
      </Table>
    </div>);
  }

}

export default MyEvents;
