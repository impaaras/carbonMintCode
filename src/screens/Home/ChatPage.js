import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SparkStar from '../../assets/icons/SparkStar'
import ChatInput from './ChatInput'
import PaperPlain from '../../assets/icons/PaperPlain'
import baseStyles, { textwhite } from '../../components/baseStyleSheet'
import ChatScreen from '../chat/ChatScreen'
import { scale } from '../../utilityFunctions/utilityFunctions'

const ChatPage = () => {
    const [showChats, setShowChats] = useState(false)

    return (
        <View>

            <View style={{ height: scale(150) }} >

                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                    colors={['rgba(47, 234, 168, 1)', 'rgba(2, 140, 243, 1)']} >
                    <View style={{ height: 300, width: '100%', paddingHorizontal: 24, paddingVertical: 24 }} >
                        <View style={[baseStyles.flxRowAliCnt]} >
                            <SparkStar />
                            <Text style={[textwhite(20, 600), { marginLeft: 4 }]} >Ask anything to drive net zero</Text>
                        </View>

                        {/* INPUT AND SEND BUTTON  */}
                        <View style={[baseStyles.flxRowAliCnt, { width: '100%', marginTop: 25 }]} >
                            <ChatInput onFocus={() => setShowChats(true)} onChange={(txt) => setShowChats(true)} />
                            <TouchableOpacity onPress={'handleGoToChatPage'} style={[baseStyles.allCntr, { height: 45, width: 45, marginLeft: 8, borderRadius: 10, backgroundColor: '#fff' }]} >
                                <PaperPlain />
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>

            <Modal
                animationType="slide"
                visible={showChats} >
                <View style={{ flex: 1 }}>
                    <ChatScreen setShowChats={setShowChats} />
                </View>

            </Modal>

        </View>
    )
}
export default ChatPage
