const styles = {
  global: {
    '*': {
      boxSizing: 'border-box',
      userSelect: 'none',
    },
    'html, body': {
      margin: 0,
      padding: 0,
      height: '100%',
      overflowY: 'auto',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    'input:-webkit-autofill': {
      boxShadow: '0 0 0px 1000px white inset',
      WebkitTextFillColor: 'inherit',
      transition: 'background-color 5000s ease-in-out 0s',
    },
    'input:-webkit-autofill:focus': {
      boxShadow: '0 0 0px 1000px white inset',
    },
    'textarea: focus, input: focus, button: focus': {
      outline: 'none !important',
    },
    'textarea: focus-visible, input: focus-visible, button: focus-visible': {
      outline: 'none !important',
    },
    ul: {
      listStyle: 'none',
    },
  },
};

export default styles;
