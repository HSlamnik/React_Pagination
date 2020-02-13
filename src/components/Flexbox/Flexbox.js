import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
	justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
	align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
	flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'unset')};
	flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : 0)};
	width: ${(props) => (props.flex ? `${props.flex}%` : '')};
	margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}%` : 0)};
	margin-right: ${(props) => (props.marginRight ? `${props.marginRight}%` : 0)};
	z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};
`;

const Flexbox = (props) => {
	return <Container {...props}>{props.children}</Container>;
};

Flexbox.propTypes = {
	flexDirection: PropTypes.string,
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
	flexWrap: PropTypes.string,
	flexGrow: PropTypes.string,
	flex: PropTypes.string,
	width: PropTypes.string,
	marginLeft: PropTypes.string,
	marginRight: PropTypes.string,
	zIndex: PropTypes.string
};

export default Flexbox;