import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import baseStyles, { textOffWhite, textOrange, textwhite } from '../../components/baseStyleSheet'
import GreenButton from '../../components/GreenButton'
import { getIn2Digit, isNumber, showToast } from '../../utilityFunctions/utilityFunctions'

const OTPPage = ({ email = '',handleVerifyOTP=()=>{}, handleResendBtn=()=>{}  }) => {
  const [otp, setOpt] = useState({ '0':'', '1':'', '2':'', '3':'' })
  const inputRef = useRef([])
  const [resendTime, setResendTime] = useState(30)
  
  const resendOTPClick = ()=>{
    showToast('OTP send again')
    handleResendBtn()
    setResendTime(30)
  }

  useEffect(()=>{
    let inte
    if(resendTime>0){
      inte = setTimeout(()=>{
        setResendTime(p=>p-1)
      },1000)
    }
    return ()=> clearTimeout(inte)
  },[resendTime])

  return (
    <View style={{ paddingHorizontal: 16, marginTop: 50 }} >
      <ScrollView showsVerticalScrollIndicator={false} >
        <Text style={[textwhite(24, 600)]} >Enter the Code</Text>
        <Text>
          <Text style={[textOrange(12, 400), { color: '#A9A3A3' }]} >Code sent on </Text>
          <Text style={[textOrange(12, 400), { color: '#F85E00' }]} >{email}</Text>
        </Text>

        <View style={[baseStyles.flxRowSpcBtwn, { marginTop: 40, paddingHorizontal: 16, }]} >
          {[...Object.keys(otp)].map((value, i) => {
            return <TextInput key={i}
            maxLength={1}
            ref={el => inputRef.current[i] = el}
            onFocus={()=>{
              if(otp[i]){
                inputRef.current[i].setSelection(0,10)
              }
            }}
            onKeyPress={({nativeEvent})=>{
              if (nativeEvent.key === 'Backspace' && !otp[i] && inputRef.current[i - 1]) {
                inputRef.current[i - 1].focus();
              }
            }}
              onChangeText={(txt)=>{
                if(isNumber(txt) || !txt){
                  setOpt(p=>{
                    p[i] = txt
                    return {...p}
                  })
                  if(!txt && inputRef[i-1]){
                    inputRef.current[i-1].focus();
                  }
                  if (txt && inputRef.current[i + 1]) {
                    inputRef.current[i + 1].focus();
                  }
                }
              }}
              keyboardType='numeric'
              style={[baseStyles.allCntr, baseStyles.borderGry, { height: 45, width: 60, borderRadius: 8, textAlign: 'center', color: '#CFCCCC', fontSize: 14 }]}
              value={otp[i]}
            />
          })}
        </View>

        <View style={{marginTop:30, paddingHorizontal: 16,}} >
          <Text onPress={!!resendTime ? ()=>{} : resendOTPClick} style={[textwhite(12,600)]} >Resend Code{!!resendTime ? ` in 00: ${getIn2Digit(resendTime)}`:''}</Text>

          <GreenButton text='Verify OTP' isDisabled={false} onPress={()=>handleVerifyOTP(`${otp[0]}${otp[1]}${otp[2]}${otp[3]}`)} />
        </View>


      </ScrollView>
    </View>
  )
}

export default OTPPage
// borderColor:inputRef.current[i]==i ? 'green' : 'rgba(207, 204, 204, 1)',