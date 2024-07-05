import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Binoculars from '../../assets/icons/Binoculars'
import baseStyles, { textwhite } from '../../components/baseStyleSheet'
import MessageCard from './MessageCard'
import ChatInput from '../Home/ChatInput'
import PaperPlain from '../../assets/icons/PaperPlain'
import { useRoute } from '@react-navigation/native'
import { processChatMessage } from '../../apis/baseApi'
import { debounceHandler, showToast } from '../../utilityFunctions/utilityFunctions'
import LoadingScreen from '../../components/LoadingScreen'


const ChatScreen = ({ setShowChats = () => { } }) => {
    const [chatInput, setChatInput] = useState('')
    const [messages, setMessages] = useState([{ message: 'Hii! We’re here to help you. ', isBotMessage: true },])
    const userData = useState(state => state?.appData?.userData)
    // const debounceFunction = useCallback(debounceHandler(getChatMessageResponse, 1000),[])
    const [loadingMessage, setLoadingMessage] = useState(false)

    const handleSendMessage = () => {
        if (loadingMessage) return
        if (!chatInput) {
            showToast('please enter chat message')
        } else {
            if (userData) {
                getChatMessageResponse()
            }
        }
    }

    const getChatMessageResponse = async () => {
        setLoadingMessage(true)
        const tempChatText = chatInput
        processChatMessage({
            "query": tempChatText,
            "session_name": 'abc@gmail.com',
            "userdetails": { ...userData }
        }).then((msg)=>{
            setLoadingMessage(false)
            if (msg) setChatInput('')
            if (msg) setMessages(p => [{ message: chatInput, isBotMessage: false }, ...p])
            if (msg) setMessages(p => [{ message: msg, isBotMessage: true }, ...p])
            console.log('msg', msg)
        })
    }
    return (
        <SafeAreaView style={{flex:1}} >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}
                colors={['rgba(2, 140, 243, 1)', 'rgba(47, 234, 168, 1)']} >
                <TouchableOpacity onPress={() => setShowChats(false)} style={{ flexDirection: 'row', marginVertical: 10, alignSelf: 'center', }} >
                    <View style={{ height: 5, width: 45, borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.33)', marginRight: -0.5, transform: [{ rotateZ: '10deg' }] }} ></View>
                    <View style={{ height: 5, width: 45, borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.33)', marginLeft: -0.5, transform: [{ rotateZ: '-10deg' }] }} ></View>

                </TouchableOpacity>
                <View style={{ paddingHorizontal: 16, flexDirection: 'column-reverse', flex: 1 }} >
                    <FlatList
                        keyExtractor={(data => data + Math.random())}
                        ListFooterComponent={
                            <View style={{ marginBottom: 16 }} >
                                <View style={[baseStyles.flxRowAliCnt, { justifyContent: 'center', marginTop: 40 }]} >
                                    <Binoculars />
                                </View>
                                <Text style={[textwhite(16, 400), { textAlign: 'center', marginTop: 8 }]} >Ask anything to drive net zero</Text>
                            </View>
                        }
                        showsVerticalScrollIndicator={false}
                        inverted
                        data={messages}
                        renderItem={({ item, index }) => {
                            return <MessageCard messageData={item} />
                        }}
                        ListHeaderComponent={
                            loadingMessage && <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.46)', alignSelf: 'flex-start', borderRadius: 10, marginVertical: 8, paddingVertical: 8, paddingHorizontal: 16, width: '60%' }} >
                                <LoadingScreen showAsIcon />
                            </View>
                        }
                    />
                </View>

                {/* INPUT AND SEND BUTTON  */}
                <View style={[baseStyles.flxRowAliCnt, { width: '100%', marginBottom: 15, marginTop: 2, paddingHorizontal: 16 }]} >
                    <ChatInput value={chatInput} onChange={(val) => setChatInput(val)} />
                    <TouchableOpacity onPress={handleSendMessage} style={[baseStyles.allCntr, { height: 45, width: 45, marginLeft: 8, borderRadius: 10, backgroundColor: '#fff', opacity: loadingMessage ? 0.5 : 1 }]} >
                        <PaperPlain />
                    </TouchableOpacity>
                </View>



            </LinearGradient>
        </SafeAreaView>
    )
}

export default ChatScreen



// const getChatMessageResponse = async ()=>{
//     const query = {
//         "query": "what is eco-friendly and sustainable energy concepts",
//         "userdetails": {
//             // "country_of_user_residence": "India",
//             // "do_use_renewable_electricty_at_home": "Yes",
//             // "primary_heating_source_at_home": "Electricity",
//             // "do_use_cooking_gas": "Yes",
//             // "do_user_have_car": "No"
//         }
//     }
//     try {
//         // const msg = await processChatMessage(query)
//         // console.log('msg', msg)
//         // if(msg) setMessages(p=>[...p, {message : msg, userId:'bot'}])
//     } catch (e) {
//         console.log(e)
//     }
// }
