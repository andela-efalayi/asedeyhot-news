import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';

const ArchiveCard = ({ headlines }) => {
  if (Object.keys(headlines).length === 0) {
    return (
      <div>
        <h4>You have no saved headlines.</h4>
      </div>
    );
  }
  return (
    <div>
      {Object.entries(headlines).map(([key, value]) => (
      <Card key={key} className="archiveItem">
        <div className="row">
          <div className="col-xs-4 col-sm-4">
            <img className="img-responsive" src={value.urlToImage} />
          </div>
          <div className="col-xs-8 col-sm-8">
            <CardText>
              <h5>{value.title}</h5>
              <p>Author: {value.author}</p>
              <p><a href={value.url}>Go to link</a></p>
            </CardText>
          </div>
        </div>
      </Card>
    ))}
    </div>
  );
};

ArchiveCard.propTypes = {
  headlines: PropTypes.object
};

ArchiveCard.defaultProps = {
  headlines: null
};

export default ArchiveCard;
