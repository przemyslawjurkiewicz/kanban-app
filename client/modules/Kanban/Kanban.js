import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';
import { createLane } from '../Lane/LaneActions';

const Kanban = props => (
  <div>
    <button
      className={styles.AddLane}
      onClick={() =>
        props.createLane({
          name: 'New lane',
        })
      }
    >
      AddLane
    </button>
    <Lanes lanes={props.lanes} />
  </div>
);

const mapStateToProps = state => ({
  lanes: state.lanes,
});

const mapDispatchToProps = {
  createLane,
};

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
