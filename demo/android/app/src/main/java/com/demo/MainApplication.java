package com.demo;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.showlocationservicesdialogbox.LocationServicesDialogBoxPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.imagepicker.ImagePickerPackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  //CallbackManager mCallbackManager;
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
//      new CallbackManager.Factory();
//      mCallbackManager = CallbackManager.Factory.create();
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new LocationServicesDialogBoxPackage(),
            new RNDeviceInfo(),
            new VectorIconsPackage(),
            new MapsPackage(),
            new ImagePickerPackage(),
            new RNGoogleSigninPackage(),
            new RNGestureHandlerPackage()
            //new FBSDKPackage(mCallbackManager)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
