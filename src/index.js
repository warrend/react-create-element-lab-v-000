import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');
const youEl = React.createElement('ul', { className: 'my-interests' }, 
	[
		React.createElement('li', {}, 'JavaScript'),
		React.createElement('li', {}, 'React'),
		React.createElement('li', {}, 'Movies'),
		React.createElement('li', {}, 'Ice cream')
	]
)

const meInReact = React.createElement('div', {className: 'me'}, [title, paragraph, youEl])

ReactDOM.render(
  meInReact, 
  document.getElementById('root')
);

export default meInReact
