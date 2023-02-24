import styled from "styled-components/native";

export const OTPInputContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;

export const TextInputHidden = styled.TextInput`
  /* width: 300px;
  border-color: #e5e5e5;
  border-width: 1px;
  border-radius: 5px;
  padding: 15px;
  margin-top: 50px;
  color: white; */
  position: absolute;
  opacity: 0;
`;

export const SplitOTPBoxesContainer = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const SplitBoxes = styled.View`
  border-color: #5CA7FF;
  border-width: 2px;
  border-radius: 5px;
  padding: 15px;
  min-width: 50px;
`;

export const SplitBoxText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: black;
`;

export const SplitBoxesFocused = styled(SplitBoxes)`
  border-color: #cecece;
`;

export const ButtonContainer = styled.TouchableOpacity`
  
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 1px;
`;

export const ButtonText = styled.Text`
  color: black;
  font-size: 20px;
`;