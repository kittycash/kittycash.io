import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Branding from './components/Branding';

const Downloads = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'downloads.description' })}
      />
    </Helmet>
    <Header border />

    <Branding />

    <Footer />
  </div>
);

Downloads.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Downloads);