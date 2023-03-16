import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles.css';

const App = (props) => {
  const { Component } = props;

  return (
    <>
      <Head>
        <title>Andrew Borovin</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet" />
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
