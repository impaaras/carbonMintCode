import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const BuildingsGreen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#00955F"
        d="M19.688 20.563h-1.313v-9.187a1.313 1.313 0 0 0-1.313-1.313h-5.25V6.126a1.312 1.312 0 0 0-2.04-1.093L3.209 9.407a1.313 1.313 0 0 0-.584 1.094v10.062H1.312a.656.656 0 1 0 0 1.313h18.375a.656.656 0 0 0 0-1.313Zm-2.625-9.187v9.187h-5.25v-9.187h5.25ZM3.938 10.5 10.5 6.126v14.437H3.937V10.501Zm5.25 2.187v1.313a.656.656 0 0 1-1.313 0v-1.313a.656.656 0 1 1 1.313 0Zm-2.626 0v1.313a.656.656 0 0 1-1.312 0v-1.313a.656.656 0 1 1 1.313 0Zm0 4.594v1.313a.656.656 0 1 1-1.312 0v-1.313a.656.656 0 1 1 1.313 0Zm2.625 0v1.313a.656.656 0 1 1-1.312 0v-1.313a.656.656 0 1 1 1.313 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
const BuildingsBlack = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M19.688 20.563h-1.313v-9.187a1.313 1.313 0 0 0-1.313-1.313h-5.25V6.126a1.312 1.312 0 0 0-2.04-1.093L3.209 9.407a1.313 1.313 0 0 0-.584 1.094v10.062H1.312a.656.656 0 1 0 0 1.313h18.375a.656.656 0 0 0 0-1.313Zm-2.625-9.187v9.187h-5.25v-9.187h5.25ZM3.938 10.5 10.5 6.126v14.437H3.937V10.501Zm5.25 2.187v1.313a.656.656 0 0 1-1.313 0v-1.313a.656.656 0 1 1 1.313 0Zm-2.626 0v1.313a.656.656 0 0 1-1.312 0v-1.313a.656.656 0 1 1 1.313 0Zm0 4.594v1.313a.656.656 0 1 1-1.312 0v-1.313a.656.656 0 1 1 1.313 0Zm2.625 0v1.313a.656.656 0 1 1-1.312 0v-1.313a.656.656 0 1 1 1.313 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export {BuildingsBlack, BuildingsGreen}