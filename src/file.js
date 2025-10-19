import React from 'react';
import Header from './components/header';

import TextChanger from './components/changetext';
import Image from './components/img';
import photo from './img/photo.jpg'
import Typewriter from './components/pechat'
import Card from './components/card'
import react from './img/react.png'
import js_2 from './img/js_2.png'
import logo2 from './img/logo2.png'
import tablet from './img/tablet.png'
import php from './img/php.png'
import git from './img/git.png'
import TextChangerforCard from './components/changeTextforcard';
import MyForm from './components/fotma';


//ReactDOM.render(React.createElement('input', {
        //placeholder: "Hello",
       // onClick: () => console.log("Click"),
        //onMouseEnter: ()=>console.log("Mouse")
     // }), document.getElementById('root'));



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: 'default', // 'default', 'profession', 'history'
            activeRejim: 'default'
        };
    }

    handleSectionChange = (section) => {
        this.setState({ activeSection: section });
    }
    
    render(){
        return (<div>
        <Header 
                    title="Моя визитка"
                    activeSection={this.state.activeSection}
                    onDefaultClick={() => this.setState({ activeSection: 'default' })}
                    onProfessionClick={() => this.setState({ activeSection: 'profession' })}
                    onHistoryClick={() => this.setState({ activeSection: 'history' })}
                    onFriendsClick={() => this.setState({ activeSection: 'friends' })}
                />
                {/* key меняется при смене раздела, что сбрасывает компонент */}
                

        <main>
            <div className='main_cont'>
                <Image image={photo}/>
                <TextChanger 
                        key={this.state.activeSection}
                        activeSection={this.state.activeSection}
                    />
                
            </div>
            <div>
                <Typewriter text="ля какой"/>
            </div>
            <div className='cardochka'>
                <Card image1={react} text1="Знание React" 
                image2={logo2} text2="Знание HTML"
                image3={tablet} text3="адаптивная верстка"
                image4={js_2} text4="Компетенция JS"
                image5={php} text5="Понимание РНР"
                image6={git} text6="Знание Git"
                activeRejim={this.state.activeRejim}
                    onDefault={() => this.setState({ activeRejim: 'default' })}
                    onReact={() => this.setState({ activeRejim: 'react' })}
                    onHtml={() => this.setState({ activeRejim: 'html' }) }
                    onPhp={()=>this.setState({activeRejim:'php'})}
                    onJava={()=>this.setState({activeRejim:'java'})}
                    onGit={()=>this.setState({activeRejim:'git'})}
                    onTablet={()=>this.setState({activeRejim:'tablet'})}/>
                <div className='vyvod'>
                <TextChangerforCard 
                        key={this.state.activeRejim}
                        activeRejim={this.state.activeRejim}
                    />
                
            </div>
            </div>
            <MyForm title="Ваш номер"/>
        </main>
        
    </div>)
    }
    
}
export default App
