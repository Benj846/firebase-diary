import { useState, useEffect } from "react";
import { Alert } from "react-native";
import {
  logout,
  loginWithKakaoAccount,
  login,
  getProfile,
  KakaoProfile,
} from "@react-native-seoul/kakao-login";
import { useStore } from "../../store";

//카카오 프로필 가져오기 hook 만들어놓기
export const useGetKakaoProfile = () => {
  const [profileData, setProfileData] = useState<KakaoProfile>();

  const getFn = async () => {
    try {
      const res = await getProfile();
      setProfileData(res);
    } catch (error) {}
  };

  useEffect(() => {
    getFn();
  }, []);
  return profileData;
};

export const signOutKakao = async () => {
  try {
    await logout();
    Alert.alert(`로그아웃 했당!`);
  } catch (error) {
    Alert.alert(`엇! 로그아웃을 다시 시도해주세요!${error}`);
  }
};
// create a custom hook to check if a user is logged in
export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const getFn = async () => {
    try {
      const token = await login();
      if (token) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    getFn();
  }, []);
  return isLoggedIn;
};

//

export const signInWithKakaoAccount = async () => {
  try {
    const token = await loginWithKakaoAccount();
    console.log(JSON.stringify(token));
  } catch (error) {
    Alert.alert(`엇! 로그인을 다시 시도해주세요!${error}`);
  }
};
export const signInWithKakao = async () => {
  try {
    const token = await login();
    if (token) {
      console.log("login function state is ", token.accessToken);
    }
  } catch (error) {
    Alert.alert(`엇! 로그인을 다시 시도해주세요!${error}`);
  }
};

export const useCustomHook = () => {
  const setLogin = useStore((state) => state.setLogin);
  const loged = useStore((state) => state.loged);

  const fn = async () => {
    try {
      const token = await login();
      if (token) {
        // setLogin;
        console.log("login function state is ", token.accessToken);
        setLogin();
      }
      // console.log(JSON.stringify(token));
    } catch (error) {
      Alert.alert(`엇! 로그인을 다시 시도해주세요!${error}`);
    }
  };

  useEffect(() => {
    fn();
  }, []);
  return loged;
};
