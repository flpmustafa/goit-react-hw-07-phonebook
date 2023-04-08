import PropTypes from 'prop-types';

export function Section({ children }) {
  return <>{children}</>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};