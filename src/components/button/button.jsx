import React from 'react';
import PropTypes from 'prop-types';

function Button({ texte }) {
  return (<button className="bg-black text-white p-3" type="button">{texte}</button>);
}

Button.propTypes = {
  texte: PropTypes.string.isRequired,
};

export default Button;
