import React from 'react';
import LazyImage from '../common/lazy-img-loader';
import WeddingPartyMember from './wedding-party-member';
import useWindowDimensions from '../hooks/window-size';
import './wedding.css';

function Wedding() {
	const { height, width } = useWindowDimensions();
	const viewport = { height, width };
	const src = '/splash_party.jpg'
	let weddingParty = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];
	weddingParty = weddingParty.map((person, index) => <WeddingPartyMember viewport={viewport} key={index} index={index}/>)
	return (
		<div className="section-container">
			<div className="grey-overlay" />
			<div style={{ display: 'flex', width: '100%', zIndex: 2, padding: '2rem', flexDirection: 'column' }}>
				<h4 className="section-header">The Wedding Party</h4>
				<LazyImage src={src} />
				<ul className="wedding-party-list-container">
					{weddingParty}
				</ul>
			</div>
		</div>
	);
}

export default Wedding;
