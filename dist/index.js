Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var isServer = typeof window === 'undefined';
var RenderIfVisible = function (_a) {
    var _b = _a.defaultHeight, defaultHeight = _b === void 0 ? 300 : _b, _c = _a.visibleOffset, visibleOffset = _c === void 0 ? 1000 : _c, _d = _a.root, root = _d === void 0 ? null : _d, children = _a.children, placeholder = _a.placeholder;
    var _e = React.useState(isServer), isVisible = _e[0], setIsVisible = _e[1];
    var placeholderHeight = React.useRef(defaultHeight);
    var intersectionRef = React.useRef(null);
    // Set visibility with intersection observer
    React.useLayoutEffect(function () {
        if (intersectionRef.current) {
            var observer_1 = new IntersectionObserver(function (entries) {
                if (typeof window !== undefined && window.requestIdleCallback) {
                    window.requestIdleCallback(function () { return setIsVisible(entries[0].isIntersecting); });
                }
                else {
                    setIsVisible(entries[0].isIntersecting);
                }
            }, { root: root, rootMargin: visibleOffset + "px 0px " + visibleOffset + "px 0px" });
            observer_1.observe(intersectionRef.current);
            return function () {
                if (intersectionRef.current) {
                    observer_1.unobserve(intersectionRef.current);
                }
            };
        }
        return function () { };
    }, [intersectionRef]);
    // Set true height for placeholder element after render.
    React.useLayoutEffect(function () {
        if (intersectionRef.current && isVisible) {
            placeholderHeight.current = intersectionRef.current.offsetHeight;
        }
    }, [isVisible, intersectionRef]);
    return (React__default.createElement("div", { ref: intersectionRef }, isVisible ? (React__default.createElement(React__default.Fragment, null, children)) : (placeholder ? placeholder : React__default.createElement("div", { style: { height: placeholderHeight.current } }))));
};

exports.default = RenderIfVisible;
//# sourceMappingURL=index.js.map
