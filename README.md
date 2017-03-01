[![Language](https://img.shields.io/badge/language-ES%206-orange.svg)](https://github.com/lukehoban/es6features#readme)
[![Platforms](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](http://facebook.github.io/react-native/docs/getting-started.html)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/RayChooi)

# React Native test for vertical paging on Android

## Test Plan

Steps taken to test vertical paging and make sure original scrolling is not affected.

The test app made features 5 pages in a scrollView which are equal to the device dimensions.

**Test vertical paging works**
```javascript
<ScrollView
  pagingEnabled={ true }>
```
- Scroll up and down to test locking
- Hold in the middle to test snap directions

<img src="https://github.com/raymondchooi/testPagingEnabled/blob/master/img/pagingEnabled.gif" alt="Paging enabled" width="320px"></img>

**Test normal scroll**
```javascript
<ScrollView
  pagingEnabled={ false }>
```
- Test momentum (fast/slow fling)

<img src="https://github.com/raymondchooi/testPagingEnabled/blob/master/img/pagingDisabledMomentum.gif" alt="Paging disabled momentum" width="320px"></img>

- Test stop mid fling (with screen press)

<img src="https://github.com/raymondchooi/testPagingEnabled/blob/master/img/pagingDisabledStop.gif" alt="Paging disabled stop" width="320px"></img>

## License

GNU General Public License v3.0
