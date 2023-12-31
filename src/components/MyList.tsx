import React, {Component} from 'react';
import {Text,View,ScrollView,TouchableOpacity,Image} from 'react-native';

class MyList extends Component {
  
    state = {
        loading: false,
        data: [],
        current_page: 1,
        total_pages: 20,
        error: null,
        hasMore: true
    }

    constructor(props) {
        super(props);
        this.state.data=this.createData(); 
    }

    createData = () => {
        
        let newData = [];
        newData.push({
            title: "Lorem ipsum", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
            image: require('../images/img1.png'),
            id: this.state.data.length
        });
        newData.push({
            title: "Curabitur vulputate", 
            text: "Curabitur vulputate enim in lacus imperdiet, a convallis odio posuere. Nulla id ex et purus sodales rutrum non eu eros. Ut consequat est lacus.",
            image: require('../images/img2.png'),
            id: this.state.data.length+1
        });
        newData.push({
            title: "Proin hendrerit", 
            text: "Proin hendrerit nisl id turpis bibendum, sit amet scelerisque augue elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a blandit sapien.",
            image: require('../images/img3.png'),
            id: this.state.data.length+2
        });
        return newData;
       
    }
    
    loadData = () => {
        if (this.state.loading) { return; }
        console.log('load page:'+ this.state.current_page)
        this.setState({ loading: true });
        let newData =this.createData();        
        let hasMoreData = this.state.total_pages > this.state.current_page;
        this.setState({
            hasMore: hasMoreData,        
            data: [...this.state.data, ...newData],
            loading: true,
            current_page: this.state.current_page + 1
        });
       setTimeout(this.finishLoad,250);       
    }

    finishLoad = () => {
        this.setState({ loading: false });
    }

    handleScroll = (event) => {        
        if (
            this.state.hasMore &&
            this.isCloseToBottom(event.nativeEvent.layoutMeasurement, event.nativeEvent.contentOffset, event.nativeEvent.contentSize)            
        ) {
            this.loadData()
        }
    } 
    
    isCloseToBottom(layoutMeasurement, contentOffset, contentSize) {   
        return (layoutMeasurement.height + contentOffset.y) 
        >= (contentSize.height - 50); 
    }

    renderList = () => {
        return ( this.state.data.map((u) => {
            return ( 
            <TouchableOpacity key={u.id}>
                <View style={{ padding: 10, borderBottomWidth:1, marginBottom:10 }}>                
                    <Image style={{height: 250}} source={u.image} />
                    <Text style={{ fontSize: 15}}>{u.title}</Text> 
                    <Text>{u.text}</Text>
                </View>
             </TouchableOpacity>);
            })
       );
    }
  
    render() {
        return (
            <ScrollView onScroll={this.handleScroll}> 
            {this.renderList()} 
          </ScrollView>
          );
    }
}

export default MyList;