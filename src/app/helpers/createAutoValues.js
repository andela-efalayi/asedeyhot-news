import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

/**
 * @export
 * @param {Array} newsSources
 * @returns {Array}
 */
export default function createAutoValues(newsSources) {
  return newsSources.map((source) => {
    const rObj = {
      id: source.id,
      sortOptions: source.sortBysAvailable,
      text: source.name,
      value: (
        <MenuItem
          primaryText={source.name}
          containerElement={<Link to={{
            pathname: `/sources/${source.id}`,
            query: {
              sortBysAvailable: source.sortBysAvailable
            }
          }} />}
        />
      ),
    };
    return rObj;
  });
}
