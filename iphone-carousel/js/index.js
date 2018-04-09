var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}
	return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
	if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var prefix = function prefix(obj, prop, value) {
	var prefs = ['webkit', 'Moz', 'O', 'ms'];
	for (var pref in prefs) {
		obj[prefs[pref] + prop] = value;
	}
};

var phoneImg = "iphone-carousel/imgs/phone.png",
	backgroundImagesArray = [
		"iphone-carousel/imgs/hourglass_iphone.png",
		"iphone-carousel/imgs/bear_pax_iphone.png",
		"iphone-carousel/imgs/food_whim_iphone.png",
		"iphone-carousel/imgs/smart_camera_iphone.png",
		"iphone-carousel/imgs/ezwifi_iphone.png",
		"iphone-carousel/imgs/news_iphone.png",
		"iphone-carousel/imgs/golden_iphone.png",
		"iphone-carousel/imgs/billy_iphone.png"
	],
	screenImagesArray = [
		"iphone-carousel/imgs/hourglass.gif",
		"iphone-carousel/imgs/bear_pax.jpg",
		"iphone-carousel/imgs/food_whim.gif",
		"iphone-carousel/imgs/smart_camera.jpg",
		"iphone-carousel/imgs/ezwifi.jpg",
		"iphone-carousel/imgs/news.jpg",
		"iphone-carousel/imgs/golden.jpg",
		"iphone-carousel/imgs/billy.jpg"
	],
	imageCaptionsArray = [
		"A productivity app that tracks your time being productive (or unproductive).",
		"An extension for a liver monitoring device that was developed in another class. The app displays and gives a potential diagnosis of various diseases based on data taken from the device, allows the user to connect with other users via an anonymous forum, and find the nearest hospital or AA center.",
		"Provides one restaurant suggestion at a time to help indecisive people choose where to eat.",
		"A smart camera that aims to snap the perfect photo every time using computer vision!",
		"Connect to a wifi network automatically by scanning a QR Code.",
		"A news app that knows you.",
		"An app with a weather view and a map view detailing where users can take cool photos around Berkeley and when Golden hour times are.",
		"Billy the giraffe has a long neck; catch some scarves to keep him warm! This app is a simple game created using Apple’s SpriteKit framework."
	],
	imageAttributionsArray = [
		["Tao Ong & Caroline Zhou, fall '17", "taoong", "hourglass"],
		["Sarah Chin & Tiffany Liaw, spring '17", "tliaw512", "BearPax"],
		["Erik Yang & Cedric Nixon, spring '17", "erikyangs", "ios-decal-final-project"],
		["Gustavo Silva, spring '17", "gusrsilva", "Picture-Perfect-iOS"],
		["Nathan Phama, fall '17", "1313661888"],
		["Teddy Zhang & Jimmy Wei, spring '17", "CptTeddy", "teddy-jimmy-ios"],
		["David Xie & Evan Chang, spring '17", "ossim", "golden"],
		["Andre Lai, spring '17", "andrelai812", "Billy-the-Giraffe"]
	];

var PhoneSlider = function (_React$Component) {
	_inherits(PhoneSlider, _React$Component);

	function PhoneSlider(props) {
		_classCallCheck(this, PhoneSlider);

		var _this = _possibleConstructorReturn(this, (PhoneSlider.__proto__ || Object.getPrototypeOf(PhoneSlider)).call(this, props));

		_this.initializeSlider = _this.initializeSlider.bind(_this);
		_this.goTo = _this.goTo.bind(_this);

		_this.state = {
			slideIndex: 2
		};
		return _this;
	}

	_createClass(PhoneSlider, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.initializeSlider();
			var slider = React.findDOMNode(this.refs.slider);
//			slider.addEventListener("mousemove", function (event) {
//				console.log("x", event.pageX);
//				console.log("0 - 1", event.pageX / document.documentElement.clientWidth);
//				console.log("percent", Math.round(event.pageX / document.documentElement.clientWidth * 100));
//			}, false);
		}
	}, {
		key: 'initializeSlider',
		value: function initializeSlider() {
			var backgroundSlider = React.findDOMNode(this.refs.backgroundSlider),
				backgroundSlides = backgroundSlider.childNodes,
				backgroundSlidesArray = [].slice.call(backgroundSlides),
				backgroundLength = backgroundSlidesArray.length,
				backgroundTransform = 100 / backgroundLength * this.state.slideIndex,
				screenSlider = React.findDOMNode(this.refs.screenSlider),
				screenSlides = screenSlider.childNodes,
				screenSlidesArray = [].slice.call(screenSlides),
				screenLength = screenSlidesArray.length,
				screenTransform = 100 / screenLength * this.state.slideIndex,
				i = void 0;
			for (i = 0; i < backgroundLength; i++) {
				backgroundSlidesArray[i].style.width = 100 / backgroundLength + "%";
			}
			for (i = 0; i < screenLength; i++) {
				screenSlidesArray[i].style.width = 100 / screenLength + "%";
			}
			backgroundSlider.style.width = backgroundLength * 100 + "%";
			screenSlider.style.width = screenLength * 100 + "%";
			backgroundSlider.style.paddingLeft = "0px";
			screenSlider.style.paddingLeft = "0px";
			prefix(backgroundSlider.style, "Transform", 'translateX(-25%)');
			prefix(screenSlider.style, "Transform", 'translateX(-25%)');
		}
	}, {
		key: 'goTo',
		value: function goTo(index) {
			var backgroundSlider = React.findDOMNode(this.refs.backgroundSlider),
				backgroundSlides = backgroundSlider.childNodes,
				backgroundSlidesArray = [].slice.call(backgroundSlides),
				backgroundLength = backgroundSlidesArray.length,
				screenSlider = React.findDOMNode(this.refs.screenSlider),
				screenSlides = screenSlider.childNodes,
				screenSlidesArray = [].slice.call(screenSlides),
				screenLength = screenSlidesArray.length, 
				iframeElements = document.getElementsByTagName("IFRAME"), 
				attributes = imageAttributionsArray[index], 
				githubCard;
			
			for (var element of iframeElements) {
				if (element.getAttribute("id").includes("ghcard-")) {
					githubCard = element;
					break;
				}
			}
			
			var appStoreCard = document.getElementById("appstore-card");
			
			if (attributes.length === 2) {
				var appStoreCardFrame = document.getElementById("appstore-card-iframe");
				appStoreCardFrame.src = "https://banners.itunes.apple.com/banner.html?bt=catalog&t=catalog_white&id=" + attributes[1] + "&c=us&l=en-US&w=300&h=250&store=apps";
				githubCard.style.display = "none";
				appStoreCardFrame.style.display="";
				appStoreCard.style.display = "";
			} else {
				var newSrc = "https://cdn.jsdelivr.net/github-cards/1.0/cards/default.html?user=" + attributes[1] + "&identity=ghcard-" + attributes[1] + "-1&repo=" + attributes[2] + "&target=blank&client_id=61cc8636c6f8d67267be&client_secret=fbdff7bca1b568dd3f22ce3f3633bb432ab50d05";
				githubCard.src = newSrc;
				githubCard.style.display = "";
				appStoreCard.style.display = "none";
			}

			prefix(backgroundSlider.style, "Transform", "translateX(-" + 100 / backgroundLength * index + "%)");
			prefix(screenSlider.style, "Transform", "translateX(-" + 100 / screenLength * index + "%)");

			this.setState({
				slideIndex: index
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
				backgroundImages = _props.backgroundImages,
				screenImages = _props.screenImages,
				imageCaptions = _props.imageCaptions,
				imageAttributes = _props.imageAttributes,
				phone = _props.phone;

			return React.createElement(
				'div', {
					className: 'slider',
					ref: 'slider'
				},
				React.createElement(
					'div', {
						className: 'phone-slider'
					},
					React.createElement(
						'div', {
							className: 'phone-slider__background background'
						},
						React.createElement(
							'ul', {
								ref: 'backgroundSlider',
								className: 'background__list'
							},
							backgroundImages.map(function (item, index) {
								return React.createElement(PhoneSlide, {
									key: index,
									slideIndex: _this2.state.slideIndex,
									index: index,
									onClick: _this2.goTo,
									img: item,
									type: 'background'
								});
							})
						)
					),
					React.createElement(
						'div', {
							className: 'phone-slider__phone'
						},
						React.createElement('img', {
							src: phone,
							alt: 'iPhone'
						}),
						React.createElement(
							'div', {
								className: 'phone-slider__screen screen'
							},
							React.createElement(
								'ul', {
									ref: 'screenSlider',
									className: 'screen__list'
								},
								screenImages.map(function (item, index) {
									return React.createElement(PhoneSlide, {
										key: index,
										slideIndex: _this2.state.slideIndex,
										index: index,
										img: item,
										type: 'screen'
									});
								})
							)
						)
					)
				),
				React.createElement('div', { className: 'showcase-caption text-center' },
									React.createElement('div', { className: 'showcase-caption' }, imageCaptions[_this2.state.slideIndex]),
									React.createElement('div', { className: 'showcase-caption-attribution' }, "— " + imageAttributes[_this2.state.slideIndex][0])
								   )
			);
		}
	}]);

	return PhoneSlider;
}(React.Component);

var PhoneSlide = function (_React$Component2) {
	_inherits(PhoneSlide, _React$Component2);

	function PhoneSlide(props) {
		_classCallCheck(this, PhoneSlide);

		var _this3 = _possibleConstructorReturn(this, (PhoneSlide.__proto__ || Object.getPrototypeOf(PhoneSlide)).call(this, props));

		_this3.handleClick = _this3.handleClick.bind(_this3);
		return _this3;
	}

	_createClass(PhoneSlide, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'handleClick',
		value: function handleClick(event) {
			event.preventDefault();
			this.props.onClick(this.props.index);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
				img = _props2.img,
				type = _props2.type,
				index = _props2.index,
				slideIndex = _props2.slideIndex,
				active = slideIndex === index ? "active" : "";

			if (type === "background") {
				return React.createElement(
					'li', {
						className: 'background__list-item background__list-item--' + active,
						onClick: this.handleClick
					},
					React.createElement('img', {
						src: img
					})
				);
			} else if (type === "screen") {
				return React.createElement(
					'li', {
						className: 'screen__list-item'
					},
					React.createElement('img', {
						src: img
					})
				);
			}
		}
	}]);

	return PhoneSlide;
}(React.Component);

React.render(React.createElement(PhoneSlider, {
	backgroundImages: backgroundImagesArray,
	screenImages: screenImagesArray,
	imageCaptions: imageCaptionsArray,
	imageAttributes: imageAttributionsArray,
	phone: phoneImg
}), document.getElementById("app"));
