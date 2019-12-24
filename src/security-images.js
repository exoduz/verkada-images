import React from 'react';

class SecurityImages extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			steps: 50,
			currentIndex: 50,
			images: [],
		};

		this.onLoadMore = this.onLoadMore.bind( this );
	}

	componentDidMount() {
		// Start and end times.
		const start = 1500348260;
		const end = 1503031520;

		// Set the current to start.
		let current = start;
		let imageUrls = [];
		// The URL for the images.
		const url = 'https://hiring.verkada.com/thumbs/';

		// Create an array of image URLs.
		while ( current !== end ) {
			imageUrls.push( `${ url }${ current }.jpg` );
			current += 20;
		}

		this.setState( { images: imageUrls } );
	}

	onLoadMore( event ) {
		event.preventDefault();

		this.setState( prev => {
      return { currentIndex: prev.currentIndex + this.state.steps };
    } );
	}

	render() {
		const { currentIndex, images } = this.state;

		return <div className="container">
			<div className="image-container">
				{ images.slice( 0, currentIndex ).map( ( image, index ) => {
						return <div className="image-item" key={ `image-${ currentIndex }-${ index }` } >
							<img src={ image } alt={ `The door ${ currentIndex }-${ index }` } />
							<p>Image { index + 1 }</p>
						</div>
				} ) }
			</div>
			<div>
				{ currentIndex < images.length 
					? <button type="button" onClick={ event => this.onLoadMore( event ) } >Load More</button>
					: "You are the last item, you cannot load more."
				}
			</div>
		</div>;
	}
}

export default SecurityImages;
