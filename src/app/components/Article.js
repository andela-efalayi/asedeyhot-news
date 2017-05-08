import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  item: {
    float: 'left'
  }
};

const Article = props => (
  <div >
     <Card style={styles.item}>
      <CardHeader
        title={props.title}
      />
      <CardText>
        {props.description}
      </CardText>
      <CardActions>
        <RaisedButton
          label="Read more"
          href={props.url}
          target="_blank"
          primary
        />
      </CardActions>
    </Card>
  </div>
);

export default Article;
