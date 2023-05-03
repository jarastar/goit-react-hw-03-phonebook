import PropTypes from 'prop-types';
import { FilterWrap, FilterInput } from './Filter.styled';

const Filter = ({ handleChange }) => (
  <FilterWrap>
    <label>Find contacts by name</label>
    <FilterInput type="text" name="filter" onChange={handleChange} />
  </FilterWrap>
);


Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Filter;