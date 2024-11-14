import React from 'react';

const Loader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loader}>
        <div style={{ ...styles.loaderBase, ...styles.loaderBefore }}></div>
        <div style={{ ...styles.loaderBase, ...styles.loaderAfter }}></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a semi-transparent background
    zIndex: 9999, // Make sure loader is on top
  },
  loader: {
    transform: 'rotateZ(45deg)',
    perspective: '1000px',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    color: '#fff',
    position: 'relative' as 'relative',
  },
  loaderBase: {
    content: "''",
    display: 'block',
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: 'inherit',
    height: 'inherit',
    borderRadius: '50%',
    animation: '1s spin linear infinite',
  },
  loaderBefore: {
    transform: 'rotateX(70deg)',
  },
  loaderAfter: {
    color: '#FF3D00',
    transform: 'rotateY(70deg)',
    animationDelay: '.4s',
  },
  keyframesSpin: `
    @keyframes spin {
      0%, 100% { box-shadow: .2em 0px 0 0px currentcolor; }
      12% { box-shadow: .2em .2em 0 0 currentcolor; }
      25% { box-shadow: 0 .2em 0 0px currentcolor; }
      37% { box-shadow: -.2em .2em 0 0 currentcolor; }
      50% { box-shadow: -.2em 0 0 0 currentcolor; }
      62% { box-shadow: -.2em -.2em 0 0 currentcolor; }
      75% { box-shadow: 0px -.2em 0 0 currentcolor; }
      87% { box-shadow: .2em -.2em 0 0 currentcolor; }
    }
  `,
};

// Inject keyframes directly into the style sheet
const injectStyles = (css: string) => {
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
};

// Ensure styles are injected only once
if (typeof window !== 'undefined') {
  injectStyles(styles.keyframesSpin);
}

export default Loader;
