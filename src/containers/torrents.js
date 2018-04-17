import { connect } from 'react-redux'
import Table from '../components/table.js'


const mapStateToProps = (state, ownProps) => {
    return {
        data: state.torrents
    }
}
/*
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}*/

const Torrents = connect(
    mapStateToProps,
    null
)(Table)

export default Torrents;