import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './wedding-party-member.css';

function WeddingPartyMember({ index, viewport, name, content, src }) {
	const [animationClass, setAnimationClass] = useState();
	const listRef = useRef(null);
	const isEven = index % 2 === 0;
	useEffect(() => {
		const rect = listRef.current.getBoundingClientRect();
		const isVisible = !(
			Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < 20 ||
			Math.floor(100 - ((rect.bottom - viewport.height) / rect.height) * 100) < 20
		  );
		if (isVisible) {
			setAnimationClass(isEven ? 'wedding-party-visible-left' : 'wedding-party-visible-right')
		} else {
			setAnimationClass('not-visible');
		}
	})
	return (
		<li ref={listRef} className={`wedding-party-item ${animationClass}`}>
			<div className="grey-overlay" />
			<div className="wedding-party-item-content" style={{ justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
				<h2>{name}</h2>
			</div>
		</li>
	)
}

WeddingPartyMember.propTypes = {
	viewport: PropTypes.object,
	index: PropTypes.number.isRequired,
	name: PropTypes.string,
	content: PropTypes.string,
	src: PropTypes.string,
}

export default WeddingPartyMember;
