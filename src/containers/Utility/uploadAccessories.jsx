import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import showResults from './Show';
import DropFiles from './components/DropFiles';

const UploadAccessories = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('Bulk Upload Accessories')}</h3>
        <h3 className="page-subhead subhead">Select generated template with data to execute Accessories import.
        </h3>
        <ul>
          <li>The template must be a TAB delimited file.</li>
          <li>The child item ids must be a COMMA delimited value.</li>
          <li>Item IDs that are not defined or listed in the database will not be updated.</li>
          <li>If any Item attributes failed to validate the entire row will not be updated.</li>
          <li>Item attributes with blank values will be treated as null values.
                        It will update the attributes with null values.
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
      <DropFiles onSubmit={showResults} />
    </Row>
  </Container>
);

UploadAccessories.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common')(UploadAccessories);
