import PropTypes from 'prop-types';
import { Container } from './styles';

export default function InputSearch({ value, onChange }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Digite oque nome que quer procurar"
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
