var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var clickTimes = 0;

var CourseAnswerShow = React.createClass({
    getDefaultProps: function () {
        return null;
    },
    getInitialState: function () {
        return {
            picSrc: this.props.data.picSrc,
            oriWidth: 0,
            oriHeight: 0,
            preWidth: 0,
            preHeight: 0,
            initX: 0,
            initY: 0,
            preX: 0,
            preY: 0,
            lastFingers: 0,
            initPeriod: 0
        };
    },
    // dom 加载完成之后
    componentDidMount: function () {
        var img = $('#course_answerpic .img_show_outer img');
        var rateImg = img.width() / img.height();
        var rateDevice = document.body.clientWidth / document.body.clientHeight;

        if (rateDevice < rateImg) {
            // 宽度100%
            img.css('width', '100%');
        }
        else {
            // 高度100%
            img.css('height', '100%');
        }

        this.setState({
            oriWidth: img.width(),
            oriHeight: img.height(),
            preWidth: img.width(),
            preHeight: img.height()
        });
    },
    // dom卸载之前
    componentWillUnmount: function () {

    },
    _renderAnswerPic: function () {

    },
    _returnBlocly: function () {
        this.props.onRemove();
    },
    _handledbclick: function (e) {
        console.log('点击')
        var that = this
        var img = $(e.currentTarget).children('img')
        //防止第二次点击时e为空（react默认清除事件行为）
        e.persist()
        // console.log(e)
        clickTimes++
        setTimeout(function () {
            if (clickTimes > 1) {
                //图片双击事件
                console.log('双击')

                var scaled = img.width() / that.state.oriWidth
                console.log('scaled' + scaled)
                //超过两倍缩小
                if (scaled >= 2) {
                    img.css('left', (img[0].offsetLeft + e.pageX) / 2 + 'px')
                    img.css('top', (img[0].offsetTop + e.pageY) / 2 + 'px')

                    img.width(that.state.oriWidth);
                    img.height(that.state.oriHeight);
                    that.setState({
                        preWidth: that.state.oriWidth,
                        preHeight: that.state.oriHeight
                    });
                }
                //小于两倍放大
                else {
                    img.css('left', (img[0].offsetLeft * 2 - e.pageX) + 'px')
                    img.css('top', (img[0].offsetTop * 2 - e.pageY) + 'px')

                    img.width(that.state.oriWidth * 2);
                    img.height(that.state.oriHeight * 2);
                    that.setState({
                        preWidth: that.state.oriWidth * 2,
                        preHeight: that.state.oriHeight * 2
                    });
                }

                clickTimes = 0;
            }
            else if (clickTimes == 1) {
                //图片单击事件
                console.log('单击')

                clickTimes = 0;
                that._returnBlocly();
            }
        }, 300);
    },
    //图片双手手势函数
    _touchStart: function (e) {
        var fingers = e.nativeEvent.touches.length;
        var img = $(e.currentTarget).children('img');
        var eventType = e.nativeEvent.type;

        if (fingers == 1) {
            if (eventType == 'touchstart') {
                this.setState({
                    initX: img[0].offsetLeft,
                    initY: img[0].offsetTop,
                    preX: e.nativeEvent.touches[0].pageX,
                    preY: e.nativeEvent.touches[0].pageY
                })
            }

        }

        if (fingers == 2) {
            this.state.lastFingers = 2
            if (eventType == 'touchstart') {
                var x1 = e.nativeEvent.touches[0].pageX;
                var x2 = e.nativeEvent.touches[1].pageX;

                var y1 = e.nativeEvent.touches[0].pageY;
                var y2 = e.nativeEvent.touches[1].pageY;

                this.setState({
                    initX: img[0].offsetLeft,
                    initY: img[0].offsetTop,
                    preX: (e.nativeEvent.touches[0].pageX + e.nativeEvent.touches[1].pageX) / 2,
                    preY: (e.nativeEvent.touches[0].pageY + e.nativeEvent.touches[1].pageY) / 2,

                    initPeriod: Math.pow((Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2)), 0.5),
                    preWidth: img.width(),
                    preHeight: img.height()
                })
            }
        }
    },
    _touchMove: function (e) {
        var fingers = e.nativeEvent.touches.length;
        var img = $(e.currentTarget).children('img');
        var eventType = e.nativeEvent.type;

        if (fingers == 1) {
            // 单手滑动
            if (eventType == 'touchmove') {
                // 双手变单手
                if (this.state.lastFingers == 2) {
                    console.log(e.nativeEvent.touches)
                    this.setState({
                        initX: img[0].offsetLeft,
                        initY: img[0].offsetTop,
                        preX: e.nativeEvent.touches[0].pageX,
                        preY: e.nativeEvent.touches[0].pageY,
                        lastFingers: 1
                    })
                }
                else {
                    var touchX = e.nativeEvent.touches[0].pageX;
                    var touchY = e.nativeEvent.touches[0].pageY;

                    var changeX = touchX - this.state.preX;
                    var changeY = touchY - this.state.preY;

                    img.css('left', (this.state.initX + changeX) + 'px')
                    img.css('top', (this.state.initY + changeY) + 'px')
                }
            }
        }

        if (fingers == 2) {
            this.state.lastFingers = 2
            if (eventType == 'touchmove') {
                // 双手缩放
                var x1 = e.nativeEvent.touches[0].pageX;
                var x2 = e.nativeEvent.touches[1].pageX;

                var y1 = e.nativeEvent.touches[0].pageY;
                var y2 = e.nativeEvent.touches[1].pageY;

                var ingPeriod = Math.pow((Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2)), 0.5)

                var scaling = ingPeriod / this.state.initPeriod
                var scaled = img.width() / this.state.oriWidth

                /*console.log('scaling:', scaling)
                console.log('scaled:', scaled)*/

                img.width(this.state.preWidth * scaling)
                img.height(this.state.preHeight * scaling)

                // 最大三倍，最小一倍，有问题
                /*if (scaled < 3 && scaled > 1) {
                    img.width(this.state.preWidth * scaling / this.state.oriWidth > 3 ? this.state.oriWidth * 3 : (this.state.preWidth * scaling / this.state.oriWidth < 1 ? this.state.oriWidth : this.state.preWidth * scaling));
                    img.height(this.state.preHeight * scaling / this.state.oriHeight > 3 ? this.state.oriHeight * 3 : (this.state.preHeight * scaling / this.state.oriHeight < 1 ? this.state.oriHeight : this.state.preHeight * scaling));
                }*/


                // 双手滑动
                var touchX = (e.nativeEvent.touches[0].pageX + e.nativeEvent.touches[1].pageX) / 2;
                var touchY = (e.nativeEvent.touches[0].pageY + e.nativeEvent.touches[1].pageY) / 2;

                var changeX = touchX - this.state.preX;
                var changeY = touchY - this.state.preY;
                img.css('left', (this.state.initX + changeX) + 'px')
                img.css('top', (this.state.initY + changeY) + 'px')
            }
        }
    },
    _touchEnd: function (e) {

    },
    render: function () {
        return <div id="answer_show_box" className="answer_show_box flex">
            <div className="course_btn flex" onTouchEnd={this._returnBlocly}>
                <img src="images/index/close.png"/>
            </div>
            <div className="img_show_outer" onClick={this._handledbclick}
                 onTouchStart={this._touchStart}
                 onTouchMove={this._touchMove}
                 onTouchEnd={this._touchEnd}>
                <img src={this.state.picSrc}/>
            </div>
        </div>;
    }
});
module.exports = CourseAnswerShow;
