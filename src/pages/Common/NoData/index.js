import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

const SegmentExamplePlaceholderInline = props => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        We don't have any documents matching your query.
      </Header>
    </Segment>
  );
};

export default SegmentExamplePlaceholderInline;
