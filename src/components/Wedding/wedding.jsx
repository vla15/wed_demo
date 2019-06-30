import React from 'react';
import LazyImage from '../common/lazy-img-loader';
import WeddingPartyMember from './wedding-party-member';
import useWindowDimensions from '../hooks/window-size';
import { weddingParty } from '../../enums/wedding-party';

import './wedding.css';

function Wedding() {
	const { height, width } = useWindowDimensions();
	const viewport = { height, width };
	const src = '/splash_party.jpg'
	const weddingComponent = weddingParty.map((person, index) => <WeddingPartyMember {...person} viewport={viewport} key={index} index={index}/>)
	return (
		<div className="section-container">
			<div className="grey-overlay" />
			<div style={{ display: 'flex', width: '100%', zIndex: 2, flexDirection: 'column' }}>
				<h4 className="section-header" style={{ marginBottom: '2rem', marginTop: '2rem' }}>The Wedding Party</h4>
				<LazyImage src={src} />
				<ul className="wedding-party-list-container" style={{ marginTop: '2rem', padding: '2rem', }}>
					{weddingComponent}
				</ul>
			</div>
		</div>
	);
}

export default Wedding;
