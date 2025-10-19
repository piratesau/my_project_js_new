import React from "react"

class Card extends React.Component {
    render(){
        const { title, activeRejim, onReact, 
                    onHtml, onJava, onGit, onTablet, onPhp } = this.props;
        return(
            <div className="cont">
                <div className="card card_react " onClick={onReact}>
                    <div className="img_all">
                        <img src={this.props.image1} className="img2"/>
                    </div>
                    <div className="text">
                        <h4>
                            {this.props.text1}
                        </h4>
                    </div>
                </div>
                <div className="card card_html" onClick={onHtml}>
                    <div className="img_all">
                        <img src={this.props.image2} className="img2"/>
                    </div>
                    <div className="text">
                        <h4>
                            {this.props.text2}
                        </h4>
                    </div>
                </div>
                <div className="card card_tablet" onClick={onTablet}>
                    <div className="img_all">
                        <img src={this.props.image3} className="img2"/>
                    </div>
                    <div className="text">
                        <h4>
                            {this.props.text3}
                        </h4>
                    </div>
                </div>
                <div className="card card_java" onClick={onJava}>
                    <div className="img_all">
                        <img src={this.props.image4} className="img2"/>
                    </div>
                    <div className="text">
                        <h4>
                            {this.props.text4}
                        </h4>
                    </div>
                </div>
                <div className="card card_php" onClick={onPhp}>
                    <div className="img_all">
                        <img src={this.props.image5} className="img2"/>
                    </div>
                    <div className="text">
                        <h4>
                            {this.props.text5}
                        </h4>
                    </div>
                </div>
                <div className="card card_git" onClick={onGit}>
                    <div className="img_all">
                        <img src={this.props.image6} className="img2"/>
                    </div>
                    <div className="text">
                        <h4>
                            {this.props.text6}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card