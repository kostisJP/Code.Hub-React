import React from "react";
import "./Footer.css";
import classNames from "classnames";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            popClasses : ["team-pop", "flex_wrapper", "team-pop-hide"],
        };

        this.onHoverShow = this.onHoverShow.bind(this);
        this.onHoverHide = this.onHoverHide.bind(this);
    }


    onHoverShow() {
        const newPopClasses = ["team-pop", "flex_wrapper"];
        this.setState({
            popClasses: newPopClasses
        });
      }

      onHoverHide() {
        const newPopClasses = ["team-pop", "flex_wrapper", "team-pop-hide"];
        setTimeout (()=>{
        this.setState({
            popClasses: newPopClasses
        });
    },3200);
}

render() {
return(
<footer>
    <div className="made-with-wrapper flex_wrapper">
        <div className="footer-text flex_wrapper">
            <span>Made with</span>
            <i className="react-footer"></i>
            <span>React.js by</span>
            <span onMouseEnter = {this.onHoverShow} onMouseLeave = {this.onHoverHide} className="team-footer grad_span">Team_5</span>
            <div className = {classNames(this.state.popClasses)}>
                <a href="https://gr.linkedin.com/in/kkefalas" target="_blank" className="team-member"><i className="team-avatar team-kostas"></i>Konstantinos <br/> Kefalas</a>
                <a href="https://gr.linkedin.com/in/alexandros-kounadis-093b0152" target="_blank" className="team-member"><i className="team-avatar team-alex"></i>Aggelos <br/> Kounadis</a>
                <a href="https://gr.linkedin.com/in/vasilis-heliotis" target="_blank" className="team-member"><i className="team-avatar team-bill"></i>Vasilis <br/> Heliotis</a>
            </div>
        </div>
    </div>
</footer>
);
}
}

export default Footer;