import React from 'react';
import { Card, CardActions, CardHeader,
  CardMedia, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const Article = props => (
  <Card className="article">
    <CardHeader title={props.title} />
    <CardMedia >
      <img src={props.image} />
    </CardMedia>
    <CardText className="article-description">
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
);

export default Article;
