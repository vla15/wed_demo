import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './wedding-party-member.css';

function WeddingPartyMember({ index, viewport, name, content, src }) {
	const [animationClass, setAnimationClass] = useState();
	const listRef = useRef(null);
	useEffect(() => {
		const rect = listRef.current.getBoundingClientRect();
		const isVisible = !(
			Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < 20 ||
			Math.floor(100 - ((rect.bottom - viewport.height) / rect.height) * 100) < 20
		  );
		if (isVisible) {
			setAnimationClass(index % 2 === 0 ? 'wedding-party-visible-left' : 'wedding-party-visible-right')
		} else {
			setAnimationClass('not-visible');
		}
	})
	return (
		<li ref={listRef} className={`wedding-party-item ${animationClass}`}>
			<h2>{name}</h2>
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
