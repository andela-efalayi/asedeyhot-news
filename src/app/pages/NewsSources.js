import React from 'react';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Explore from 'material-ui/svg-icons/action/explore';
import Public from 'material-ui/svg-icons/social/public';

import SubHeader from '../components/SubHeader';

const NewsSources = (props) => {
	return(
		<div>
			<SubHeader all
				displaySearchResult={props.displaySearchResult}/>
			<div classID="list-container">
			{props.sources.map(source => (
				<Card key={source.id}
					className="item">
					<CardTitle title={source.name} subtitle={source.category.toUpperCase()}/>
					<CardText className="item-description">
					{source.description}
					</CardText>
					<CardActions>
						 <IconMenu
							iconButtonElement={<IconButton 
							tooltip="view headlines" touch={true} 
							tooltipPosition="top-center"><Public /></IconButton>}
							onChange={props.showHeadlines}>
							<MenuItem
							primaryText="View Headlines"
							rightIcon={<Explore />}
							value={source}
							/>
							<MenuItem
							primaryText="Add To Favourites"
							rightIcon={<FavoriteBorder />}
							value={source.id}
							/>
						</IconMenu>
					</CardActions>
				</Card>
			))}
		</div>
		</div>
	);
};

export default NewsSources;

